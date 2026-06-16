"use client";

import { useEffect, useRef, useCallback } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface NetworkCanvasProps {
  className?: string;
}

/* ---------------------------------------------------------------------------
 * Decorative animated background adapted from the Essence NetworkView.
 *
 * 14 fixed nodes orbit a center point. The paint is tuned for a light/paper
 * canvas: amber radial core, charcoal orbit rings and dots, no shadowBlur.
 * Occasional pulses use a thin amber stroke + opacity fade instead of glow.
 *
 * Reduced motion: one static frame (radial + static dots), no rAF loop.
 * --------------------------------------------------------------------------- */

const NODE_COUNT = 14;
const ORBIT_SPEED_BASE = 0.0015;
const PAPER = "#FAFAFA";
const AMBER_CORE = "rgba(217, 138, 30, 0.12)";
const CHARCOAL_DOT = "rgba(18, 18, 18, 0.07)";
const CHARCOAL_RING = "rgba(18, 18, 18, 0.04)";
const AMBER_PULSE = "rgba(217, 138, 30, 0.25)";

interface NodeState {
  angle: number;
  radius: number;
  speed: number;
  size: number;
  /** 0 = no pulse, 0..1 = pulse in progress */
  pulse: number;
  /** frame at which next pulse fires */
  nextPulse: number;
}

function initNodes(maxRadius: number): NodeState[] {
  const nodes: NodeState[] = [];
  for (let i = 0; i < NODE_COUNT; i++) {
    const angle = (i / NODE_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.4;
    const band = 0.3 + (i / NODE_COUNT) * 0.6;
    const radius = band * maxRadius + (Math.random() - 0.5) * 30;
    nodes.push({
      angle,
      radius: Math.max(40, radius),
      speed: ORBIT_SPEED_BASE * (0.6 + Math.random() * 0.8) * (i % 2 === 0 ? 1 : -1),
      size: 2 + Math.random() * 2,
      pulse: 0,
      nextPulse: 300 + Math.floor(Math.random() * 600),
    });
  }
  return nodes;
}

function paintFrame(
  ctx: CanvasRenderingContext2D,
  w: number,
  h: number,
  nodes: NodeState[],
  frame: number,
  animate: boolean,
) {
  const cx = w / 2;
  const cy = h / 2;
  const maxR = Math.min(cx, cy) - 20;

  // Clear with paper
  ctx.fillStyle = PAPER;
  ctx.fillRect(0, 0, w, h);

  // Center radial gradient in amber, low alpha
  const grad = ctx.createRadialGradient(cx, cy, 0, cx, cy, maxR * 0.6);
  grad.addColorStop(0, AMBER_CORE);
  grad.addColorStop(1, "rgba(217, 138, 30, 0)");
  ctx.fillStyle = grad;
  ctx.fillRect(0, 0, w, h);

  // Orbit rings
  ctx.strokeStyle = CHARCOAL_RING;
  ctx.lineWidth = 1;
  for (let r = 60; r < maxR; r += 70) {
    ctx.beginPath();
    ctx.arc(cx, cy, r, 0, Math.PI * 2);
    ctx.stroke();
  }

  // Nodes
  for (const node of nodes) {
    if (animate) {
      node.angle += node.speed;

      // Pulse timer
      if (frame >= node.nextPulse && node.pulse === 0) {
        node.pulse = 0.01;
        node.nextPulse = frame + 400 + Math.floor(Math.random() * 800);
      }
      if (node.pulse > 0) {
        node.pulse += 0.012;
        if (node.pulse >= 1) node.pulse = 0;
      }
    }

    const x = cx + Math.cos(node.angle) * node.radius;
    const y = cy + Math.sin(node.angle) * node.radius;

    // Dot
    ctx.fillStyle = CHARCOAL_DOT;
    ctx.beginPath();
    ctx.arc(x, y, node.size, 0, Math.PI * 2);
    ctx.fill();

    // Pulse: thin expanding amber ring, no shadowBlur
    if (node.pulse > 0) {
      const pr = node.pulse;
      const pulseR = node.size + pr * 18;
      ctx.strokeStyle = AMBER_PULSE.replace("0.25", String((0.25 * (1 - pr)).toFixed(3)));
      ctx.lineWidth = 1.5 * (1 - pr);
      ctx.beginPath();
      ctx.arc(x, y, pulseR, 0, Math.PI * 2);
      ctx.stroke();
    }
  }
}

export function NetworkCanvas({ className }: NetworkCanvasProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const nodesRef = useRef<NodeState[] | null>(null);
  const reduced = useReducedMotion();

  const paint = useCallback((animate: boolean) => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const rect = container.getBoundingClientRect();
    const dpr = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const maxR = Math.min(rect.width, rect.height) / 2 - 20;
    if (!nodesRef.current) {
      nodesRef.current = initNodes(maxR);
    }

    paintFrame(ctx, rect.width, rect.height, nodesRef.current, 0, animate);
  }, []);

  useEffect(() => {
    if (reduced) {
      // Static single frame
      paint(false);
      return;
    }

    let frame = 0;
    let rafId: number;

    const loop = () => {
      frame++;
      const canvas = canvasRef.current;
      const container = containerRef.current;
      if (!canvas || !container) {
        rafId = requestAnimationFrame(loop);
        return;
      }
      const ctx = canvas.getContext("2d");
      if (!ctx) {
        rafId = requestAnimationFrame(loop);
        return;
      }

      const rect = container.getBoundingClientRect();
      const dpr = typeof devicePixelRatio !== "undefined" ? devicePixelRatio : 1;
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);

      const maxR = Math.min(rect.width, rect.height) / 2 - 20;
      if (!nodesRef.current) {
        nodesRef.current = initNodes(maxR);
      }

      paintFrame(ctx, rect.width, rect.height, nodesRef.current, frame, true);
      rafId = requestAnimationFrame(loop);
    };

    rafId = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafId);
  }, [reduced, paint]);

  return (
    <div
      ref={containerRef}
      aria-hidden="true"
      className={cn("absolute inset-0 -z-10 pointer-events-none", className)}
    >
      <canvas
        ref={canvasRef}
        aria-hidden="true"
        className="block h-full w-full"
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
}
