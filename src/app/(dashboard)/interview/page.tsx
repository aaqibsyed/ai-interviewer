import { PageHeader } from "@/components/ui/page-header";
import { Card, CardContent } from "@/components/ui/card";

export default function InterviewHubPage() {
  return (
    <div className="space-y-8 p-10">
      <PageHeader
        title="Interview Hub"
        description="Practice interviews and upcoming features."
      />

      <Card>
        <CardContent>
          <h2 className="text-2xl font-semibold">
            🎤 Video Interviews Coming Soon
          </h2>

          <p className="mt-4 text-neutral-400">
            We are working on AI-powered mock video interviews with:
          </p>

          <ul className="mt-4 space-y-2 text-neutral-300">
            <li>• Webcam-based interview sessions</li>
            <li>• Real-time AI interviewer</li>
            <li>• Speech-to-text analysis</li>
            <li>• Communication feedback</li>
            <li>• Body language insights</li>
            <li>• Personalized improvement suggestions</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}