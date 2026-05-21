import Link from "next/link";
import { Button } from "@/components/ui/button";

export function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-7xl px-6 py-24"
    >
      <div className="mx-auto max-w-xl rounded-2xl border border-neutral-900 bg-neutral-950 p-8 text-center">
        <h2 className="text-4xl font-bold">
          Free Forever
        </h2>

        <p className="mt-4 text-neutral-400">
          Everything you need to practice
          technical interviews.
        </p>

        <div className="mt-8 text-6xl font-bold">
          ₹0
        </div>

        <ul className="mt-8 space-y-3 text-neutral-300">
          <li>✓ Unlimited Interviews</li>
          <li>✓ Adaptive Difficulty</li>
          <li>✓ Detailed Reports</li>
          <li>✓ Progress Tracking</li>
        </ul>

        <Link href="/signup">
          <Button
            className="mt-8"
            size="lg"
          >
            Get Started
          </Button>
        </Link>
      </div>
    </section>
  );
}