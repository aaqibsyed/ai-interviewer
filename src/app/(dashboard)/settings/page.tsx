import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function SettingsPage() {
  return (
    <div className="space-y-8 p-10">
      <PageHeader
        title="Settings"
        description="Manage your interview experience."
      />

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">
            ⚙️ Settings Coming Soon
          </h2>

          <p className="mt-4 text-neutral-400">
            Future updates will include:
          </p>

          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Theme preferences</li>
            <li>• Interview difficulty preferences</li>
            <li>• Preferred interview duration</li>
            <li>• Notification settings</li>
            <li>• Export interview reports</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}