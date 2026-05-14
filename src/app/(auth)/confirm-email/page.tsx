export default function ConfirmEmailPage() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
      <div className="w-full max-w-md rounded-2xl border border-neutral-900 bg-neutral-950 p-8 text-center">
        <h1 className="text-3xl font-bold">
          Confirm Your Email
        </h1>

        <p className="mt-4 text-neutral-400">
          We sent you a confirmation link.
          Please check your inbox and verify your email before logging in.
        </p>

        <a
          href="/login"
          className="mt-6 inline-block text-sm text-white underline"
        >
          Back to Login
        </a>
      </div>
    </main>
  );
}