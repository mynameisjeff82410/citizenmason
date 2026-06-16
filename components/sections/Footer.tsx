import { cn } from "@/lib/utils";
import { Container } from "@/components/ui/container";
import { Separator } from "@/components/ui/separator";
import { Text } from "@/components/ui/text";

const FOOTER_LINKS = [
  { label: "Who it's for", href: "#tracks" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Proof", href: "#range" },
];

function KeystoneGlyph({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 20 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("h-5 w-auto", className)}
      aria-hidden
    >
      <path d="M2 0H18L16 24H4L2 0Z" fill="currentColor" />
      <path d="M5 3H15L13.5 21H6.5L5 3Z" fill="currentColor" opacity="0.25" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer id="footer" className="w-full py-12">
      <Container size="xwide">
        <Separator className="mb-10" />
        <div className="flex flex-col gap-8 sm:flex-row sm:items-start sm:justify-between">
          <div className="flex flex-col gap-3">
            <div className="flex items-center gap-2">
              <KeystoneGlyph className="text-accent" />
              <span className="text-sm font-semibold tracking-[0.12em] uppercase">
                Citizen Mason
              </span>
            </div>
            <Text tone="muted" size="sm">
              {"Let's build something that runs."}
            </Text>
            <a
              href="mailto:jeff@citizenmason.com"
              className="rounded-sm text-sm text-link hover:text-link-hover transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
            >
              jeff@citizenmason.com
            </a>
          </div>

          <nav className="flex gap-6">
            {FOOTER_LINKS.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="rounded-sm text-sm text-muted-foreground hover:text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-canvas"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>
      </Container>
    </footer>
  );
}
