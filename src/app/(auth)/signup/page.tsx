"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import { createClient } from "@/lib/supabase/client";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";

export default function SignupPage() {
    const router = useRouter();

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const [loading, setLoading] = useState(false);

    async function handleSignup() {
        setLoading(true);

        const supabase = createClient();

        const { data, error } = await supabase.auth.signUp({
            email,
            password,
        });

        setLoading(false);

        // if (error) {
        //     toast.error(error.message);
        //     return;
        // }

        if (error) {
            toast.error(error.message);
            setLoading(false);
            return;
        }

        if (
            data.user?.identities &&
            data.user.identities.length === 0
        ) {
            toast.error("Account already exists. Please login.");
            setLoading(false);
            return;
        }



        //    router.push("/confirm-email");
        router.push("/dashboard")
        toast.success(
            "Account created successfully"
        );
    }

    return (
        <main className="flex min-h-screen items-center justify-center bg-black px-6 text-white">
            <div className="w-full max-w-md rounded-2xl border border-neutral-900 bg-neutral-950 p-8">
                <h1 className="text-3xl font-bold">
                    Create Account
                </h1>

                <form
                    onSubmit={(e) => {
                        e.preventDefault();
                        handleSignup();
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
                        autoComplete="new-password"
                        placeholder="Password"
                        className="w-full rounded-xl border border-neutral-800 bg-black px-4 py-3 outline-none"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />

                    <Button
                        type="submit"
                        className="w-full"
                        disabled={loading}
                    >
                        {loading ? "Loading..." : "Create Account"}
                    </Button>

                    <p className="text-center text-sm text-neutral-400">
                        Already have an account?{" "}
                        <a
                            href="/login"
                            className="text-white underline"
                        >
                            Login
                        </a>
                    </p>
                </form>
            </div>
        </main>
    );
}