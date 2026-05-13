import {
  LayoutDashboard,
  History,
  Settings,
  Video,
} from "lucide-react";

const links = [
  {
    label: "Dashboard",
    icon: LayoutDashboard,
  },
  {
    label: "Interviews",
    icon: Video,
  },
  {
    label: "History",
    icon: History,
  },
  {
    label: "Settings",
    icon: Settings,
  },
];

export function Sidebar() {
  return (
    <aside className="hidden w-64 border-r border-neutral-900 bg-black md:flex md:flex-col">
      <div className="border-b border-neutral-900 p-6">
        <h2 className="text-xl font-bold text-white">
          AI Interviewer
        </h2>
      </div>

      <nav className="flex flex-1 flex-col gap-2 p-4">
        {links.map((link) => (
          <button
            key={link.label}
            className="flex items-center gap-3 rounded-xl px-4 py-3 text-left text-neutral-400 transition hover:bg-neutral-900 hover:text-white"
          >
            <link.icon className="h-5 w-5" />
            {link.label}
          </button>
        ))}
      </nav>
    </aside>
  );
}