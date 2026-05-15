import {
  LayoutDashboard,
  History,
  Settings,
  Video,
} from "lucide-react";
import Link from "next/link";

const links = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
    href: "/dashboard",
  },
  {
    label: "Interviews",
    icon: Video,
    href: "/interviews",
  },
  {
    label: "History",
    icon: History,
    href: "/history",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

interface SidebarProps {
  mobile?: boolean;
}

export function Sidebar({
  mobile,
}: SidebarProps) {
  return (
    <aside
      className={
        mobile
          ? "flex h-full w-64 flex-col bg-black"
          : "hidden w-64 border-r border-neutral-900 bg-black md:flex md:flex-col"
      }
    >
      <div className="border-b border-neutral-900 p-6">
        <Link href="/">
          <h2 className="text-xl font-bold text-white transition hover:text-neutral-300">
            AI Interviewer
          </h2>
        </Link>
      </div>
      {/* <Link
        href="/"
        className="text-lg font-semibold transition hover:text-neutral-300"
      >
        AI Interviewer
      </Link> */}

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {links.map((link) => (
          <Link
            href={link.href}
            key={link.label}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
          >
            <link.icon className="h-5 w-5" />
            {link.label}
          </Link>
        ))}
      </nav>
    </aside>
  );
}