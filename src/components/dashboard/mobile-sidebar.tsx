"use client";

import { useState } from "react";

import { Menu, X } from "lucide-react";

import { Sidebar } from "./sidebar";
import { Button } from "../ui/button";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="outline"
        size="lg"
        onClick={() => setOpen(true)}
        className="h-10 w-10 p-0 md:hidden"
      >
        <Menu className="h-5 w-5 text-white" />
      </Button>

      {open && (
        <div className="fixed inset-0 z-50 flex">
          <div className="h-full">
            <Sidebar mobile />
          </div>

          <div
            className="flex-1 bg-black/60"
            onClick={() => setOpen(false)}
          />

          <Button
            variant="outline"
            onClick={() => setOpen(false)}
            className="absolute right-4 top-4"
          >
            <X className="h-6 w-6 text-white" />
          </Button>
        </div>
      )}
    </>
  );
}