import type { NextConfig } from "next";
import path from "node:path";

const nextConfig: NextConfig = {
  // Pin the Turbopack workspace root to this app. Without it Next 16 walks up to
  // ~/ (a stray ~/pnpm-lock.yaml is there) and compiles foreign files like
  // ~/src/middleware.ts. Keep the root local to this deployable app.
  turbopack: {
    root: path.resolve(import.meta.dirname),
  },
};

export default nextConfig;
