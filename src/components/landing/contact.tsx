import {
    GitCompareArrows,
    BriefcaseBusiness,
    Mail,
} from "lucide-react";
import Image from "next/image";

export function Contact() {
    return (
        <section
            id="contact"
            className="mx-auto max-w-7xl px-6 py-24 scroll-mt-24"
        >
            <div className="mx-auto max-w-5xl rounded-3xl border border-neutral-900 bg-neutral-950 p-8 md:p-12">
                {/* <h2 className="text-4xl font-bold">
                    Let us Connect
                </h2>

                <p className="mt-4 text-neutral-400">
                    Interested in collaborating or
                    discussing opportunities?
                </p> */}
                <div className="grid gap-10 md:grid-cols-2 md:items-center">
                    <div>
                        <h4 className="mb-4 text-xl font-semibold text-gray-500 ">
                            Interested in collaborating or
                            discussing opportunities?
                        </h4>
                        <h2 className="text-4xl font-bold">
                            Let's Connect
                        </h2>

                        <p className="mt-4 text-lg text-neutral-400">
                            I'm Aaqib Javed, a Frontend Developer
                            passionate about React, Next.js,
                            TypeScript, Javascript, and building AI-powered
                            products.
                        </p>

                        <div className="mt-8 flex flex-wrap gap-4">
                            <a
                                href="https://github.com/aaqibsyed"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-3 transition hover:border-neutral-600"
                            >
                                {/* <Button
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                > */}
                                <GitCompareArrows size={18} />
                                GitHub
                                {/* </Button> */}
                            </a>

                            <a
                                href="https://www.linkedin.com/in/aaqibjaved89/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-3 transition hover:border-neutral-600"
                            >
                                {/* <Button className="w-full sm:w-auto"> */}
                                <BriefcaseBusiness size={18} />
                                LinkedIn
                                {/* </Button> */}
                            </a>
                            <a
                                href="mailto:aaqibjaved422@outlook.com"
                                className="flex items-center gap-2 rounded-xl border border-neutral-800 px-4 py-3 transition hover:border-neutral-600"
                            >
                                {/* <Button
                                    variant="outline"
                                    className="w-full sm:w-auto"
                                > */}
                                <Mail size={18} />
                                Gmail
                                {/* </Button> */}
                            </a>
                        </div>
                    </div>
                    <div className="flex justify-center">
                        <div className="overflow-hidden rounded-3xl border border-neutral-800">
                            <Image
                                src="/syed-profile.jpeg"
                                alt="Aaqib Javed"
                                width={420}
                                height={420}
                                className="h-auto w-full object-cover"
                                priority
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}