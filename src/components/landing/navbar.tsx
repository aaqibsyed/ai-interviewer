import { Button } from "@/components/ui/button";

export function Navbar() {
  return (
    <header className="border-b border-neutral-900">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <div className="text-lg font-semibold">
          AI Interviewer
        </div>

        <nav className="hidden gap-6 text-sm text-neutral-400 md:flex">
          <a href="#">Features</a>
          <a href="#">Pricing</a>
          <a href="#">About</a>
        </nav>

        <Button variant="outline">
          Login
        </Button>
      </div>
    </header>
  );
}