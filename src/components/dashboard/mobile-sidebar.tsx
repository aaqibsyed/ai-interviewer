"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { Sidebar } from "./sidebar";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="md:hidden"
      >
        <Menu className="h-6 w-6 text-white" />
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="h-full">
            <Sidebar mobile />
          </div>

          <div
            className="flex-1 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <button
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4"
          >
            <X className="h-6 w-6 text-white" />
          </button>
        </div>
      )}
    </>
  );
}