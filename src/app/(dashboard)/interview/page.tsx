import { Card, CardContent } from "@/components/ui/card";
import { PageHeader } from "@/components/ui/page-header";

export const metadata = {
  title:
    "Interview Hub",
};

export default function InterviewHubPage() {
  return (
    <div className="space-y-8 p-6">
      <PageHeader
        title="Interview Hub"
        description="Choose an interview mode and track upcoming features."
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">
              Technical Interviews
            </h2>

            <ul className="mt-4 space-y-2 text-neutral-400">
              <li>✓ React Interview</li>
              <li>✓ JavaScript Interview</li>
              <li>✓ Next.js Interview</li>
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardContent>
            <h2 className="text-xl font-semibold">
              HR Interviews
            </h2>

            <ul className="mt-4 space-y-2 text-neutral-400">
              <li>✓ Behavioral Questions</li>
              <li>✓ Communication Assessment</li>
              <li>✓ Situational Responses</li>
            </ul>
          </CardContent>
        </Card>
      </div>

      <Card>
        <CardContent>
          <h2 className="text-xl font-semibold">
            Coming Soon
          </h2>

          <div className="mt-4 grid gap-4 md:grid-cols-3">
            <div>
              <p className="font-medium">
                🎥 Video Interviews
              </p>

              <p className="text-sm text-neutral-400">
                Webcam-based mock interviews.
              </p>
            </div>

            <div>
              <p className="font-medium">
                🎙 AI Voice Interviewer
              </p>

              <p className="text-sm text-neutral-400">
                Real-time spoken interviews.
              </p>
            </div>

            <div>
              <p className="font-medium">
                📈 Personalized Coaching
              </p>

              <p className="text-sm text-neutral-400">
                Skill-gap analysis and recommendations.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}