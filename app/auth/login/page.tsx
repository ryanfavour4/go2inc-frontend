"use client";
import { useState } from "react";
import { IInputState } from "@/components/input/useInput";
import Input from "@/components/input";
import Logo from "@/components/svg/logo";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function Login() {
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const router = useRouter();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        router.push("#");
    };

    return (
        <div className="min-h-screen bg-[url('../assets/images/auth-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href={"/"}>
                        <Logo className="h-40 w-40 py-3 text-primary" />
                    </Link>
                    <h2 className="text-center text-lg/9 font-bold">Login to Go to INC.</h2>
                </div>

                <div className="mt-10 rounded-lg border border-primary bg-light px-6 py-6 shadow sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-6">
                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium">
                                Email
                            </label>
                            <div className="mt-2">
                                <Input
                                    setState={setEmail}
                                    state={email}
                                    name="email"
                                    type="email"
                                    required={true}
                                    placeholder="Email address"
                                    autoComplete="email"
                                />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="btn-primary flex items-center gap-2">
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                        <p>
                            Don&apos;t have an account?
                            <Link className="mx-1 text-secondary" href={"/auth/register"}>
                                Register now!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
