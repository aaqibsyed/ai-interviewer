
import Link from "next/link";

import { Button } from "@/components/ui/button";

import { createClient } from "@/lib/supabase/server";
import { MobileNav } from "./mobile-nav";

interface NavbarProps {
  showProductNavData?: boolean
}

export async function Navbar({ showProductNavData = false }: NavbarProps) {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-neutral-900 bg-black/80 backdrop-blur">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {showProductNavData && <MobileNav />}
        <Link
          href="/"
          className="text-lg font-semibold"
        >
          AI Interviewer
        </Link>

        {showProductNavData &&
          <nav className="hidden gap-6 text-sm text-neutral-400 md:flex">
            <Link href="#features">Features</Link>
            <Link href="#about">About</Link>
            <Link href="#pricing">Pricing</Link>
            <Link href="#contact">Contact</Link>
          </nav>
        }


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
              {!showProductNavData &&
                <p className="text-sm text-white">
                  {user.email}
                </p>
              }
            </div>
          </div>
        ) : (
          <div className="flex gap-2">
            <Link href="/login">
              <Button variant="outline">
                Login
              </Button>
            </Link>
            <Link href="/signup">
              <Button variant="outline">
                Signup
              </Button>
            </Link>
          </div>
        )}
      </div>
    </header >
  );
}