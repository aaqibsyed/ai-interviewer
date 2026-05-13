import {
  Brain,
  Mic,
  BarChart3,
} from "lucide-react";

const features = [
  {
    title: "AI Mock Interviews",
    description:
      "Practice frontend interviews with realistic AI-generated questions.",
    icon: Brain,
  },
  {
    title: "Voice Interviews",
    description:
      "Simulate real interview conversations using voice AI.",
    icon: Mic,
  },
  {
    title: "Performance Analytics",
    description:
      "Track confidence, communication, and technical performance.",
    icon: BarChart3,
  },
];

export function Features() {
  return (
    <section className="border-t border-neutral-900 py-24">
      <div className="mx-auto max-w-7xl px-6">
        <div className="grid gap-6 md:grid-cols-3">
          {features.map((feature) => (
            <div
              key={feature.title}
              className="rounded-2xl border border-neutral-900 bg-neutral-950 p-6"
            >
              <feature.icon className="h-10 w-10 text-white" />

              <h3 className="mt-4 text-xl font-semibold">
                {feature.title}
              </h3>

              <p className="mt-2 text-neutral-400">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}