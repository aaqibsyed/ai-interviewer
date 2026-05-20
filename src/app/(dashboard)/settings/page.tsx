import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";
import { createClient } from "@/lib/supabase/server";

export default async function SettingsPage() {
  const supabase = await createClient();

  const {
    data: { user },
  } = await supabase.auth.getUser();

  return (
    <div className="space-y-8 p-6">
      <PageHeader
        title="Settings"
        description="Manage your account and future interview preferences."
      />

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">
            Profile
          </h2>

          <p className="mt-4 text-neutral-400">
            Email
          </p>

          <p className="font-medium">
            {user?.email}
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">
            Interview Preferences
          </h2>

          <ul className="mt-4 space-y-3 text-neutral-400">
            <li>Default Difficulty (Coming Soon)</li>
            <li>Interview Length (Coming Soon)</li>
            <li>Preferred Topics (Coming Soon)</li>
          </ul>
        </CardContent>
      </Card>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">
            Account
          </h2>

          <p className="mt-4 text-neutral-400">
            More account management options will be available in future updates.
          </p>
        </CardContent>
      </Card>
    </div>
  );
}