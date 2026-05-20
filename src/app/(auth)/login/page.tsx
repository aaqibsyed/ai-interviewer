"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function LoginPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);


    async function handleLogin() {
        setLoading(true);

        const supabase = createClient();

        const { error } = await supabase.auth.signInWithPassword({
            email,
            password,
        });

        setLoading(false);

        if (error) {
            toast.error(error.message);
            return;
        }

        router.push("/dashboard");
        toast.success(
            "Logged in successfully"
        );
    }

    return (
        <>
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
            <div className="w-full max-w-md rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
                <h1 className="text-3xl font-bold">
                    Login
                </h1>
                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleLogin();
                    }}
                    className="mt-6 space-y-4"
                >
                    <input
                        type="email"
                        name="email"
                        autoComplete="email"
                        placeholder="Email"
                        className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 outline-none"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <input
                        type="password"
                        name="password"
                        autoComplete="current-password"
                        placeholder="Password"
                        className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        loading={loading}
                    >
                        Login
                    </Button>

                    <p className="text-center text-sm text-neutral-400">
                        New user?{" "}
                        <a
                            href="/signup"
                            className="text-white underline"
                        >
                            Create account
                        </a>
                    </p>

                </form>
            </div>
        </main>
        </>
    );
}