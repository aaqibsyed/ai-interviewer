"use client";

import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import { toast } from "sonner";

export function UserMenu({
  email,
}: {
  email: string;
}) {
  const router = useRouter();

  async function handleLogout() {
    const supabase = createClient();

    await supabase.auth.signOut();

    router.push("/login");
    toast.success("Logged out successfully!")
    router.refresh();
  }

  return (
    <div className="flex items-center gap-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-neutral-800 text-sm font-semibold">
          {email.charAt(0).toUpperCase()}
        </div>

        <div className="hidden md:block">
          <p className="text-sm font-medium">
            {email}
          </p>
        </div>
      </div>

      <button
        onClick={handleLogout}
        className="rounded-xl border border-neutral-800 px-4 py-2 text-sm text-neutral-300 transition hover:bg-neutral-900"
      >
        Logout
      </button>
    </div>
  );
}