import { Features } from "@/components/landing/features";
import { Footer } from "@/components/landing/footer";
import { Navbar } from "@/components/landing/navbar";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <Navbar />

      <section className="mx-auto flex max-w-7xl flex-col items-center justify-center px-6 py-32 text-center">
        <div className="rounded-full border border-neutral-800 px-4 py-1 text-sm text-neutral-400">
          AI-Powered Mock Interviews
        </div>

        <h1 className="mt-6 max-w-4xl text-5xl font-bold leading-tight tracking-tight md:text-7xl">
          Ace Your Frontend Interviews with AI
        </h1>

        <p className="mt-6 max-w-2xl text-lg text-neutral-400">
          Practice React, JavaScript, Next.js, and behavioral interviews with
          real-time AI feedback and performance analysis.
        </p>

        <div className="mt-10 flex gap-4">
          <Button size="lg">
            Start Free
          </Button>

          <Button variant="outline" size="lg">
            Watch Demo
          </Button>
        </div>
      </section>

      <Features />

      <Footer />
    </main>
  );
}