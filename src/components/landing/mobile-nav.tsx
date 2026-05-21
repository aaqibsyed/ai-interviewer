"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

export function MobileNav() {
  const [open, setOpen] =
    useState(false);

  return (
    <div className="md:hidden">
      <button
        onClick={() =>
          setOpen(!open)
        }
      >
        {open ? (
          <X size={22} />
        ) : (
          <Menu size={22} />
        )}
      </button>

      {open && (
        <div className="absolute left-0 right-0 top-16 border-t border-neutral-900 bg-black">
          <div className="flex flex-col gap-4 p-6">
            <Link
              href="#features"
              onClick={() =>
                setOpen(false)
              }
            >
              Features
            </Link>

            <Link
              href="#about"
              onClick={() =>
                setOpen(false)
              }
            >
              About
            </Link>

            <Link
              href="#pricing"
              onClick={() =>
                setOpen(false)
              }
            >
              Pricing
            </Link>

            <Link
              href="#contact"
              onClick={() =>
                setOpen(false)
              }
            >
              Contact
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}