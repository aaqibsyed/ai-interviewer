import Link from "next/link";

import { Button } from "@/components/ui/button";

import { createClient } from "@/lib/supabase/server";

export async function Navbar() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

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

        {user ? (
          <div className="flex items-center gap-4">
            <Link href="/dashboard">
              <Button variant="outline">
                Dashboard
              </Button>
            </Link>

            <form action="/auth/logout" method="POST">
              <Button variant="outline">
                Logout
              </Button>
            </form>

            <div className="hidden items-center gap-3 md:flex">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold text-white">
                {user.email?.charAt(0).toUpperCase()}
              </div>

              <p className="text-sm text-white">
                {user.email}
              </p>
            </div>
          </div>
        ) : (
          <Link href="/login">
            <Button variant="outline">
              Login
            </Button>
          </Link>
        )}
      </div>
    </header>
  );
}