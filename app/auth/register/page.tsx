"use client"
import Link from "next/link";
import { useState } from "react";
import { IInputState } from "@/components/input/useInput";
import Input from "@/components/input";
import Logo from "@/components/svg/logo";
import { useRouter } from "next/navigation";

export default function Register() {
    const [name, setName] = useState<IInputState>({ value: "" });
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const [kingsChatId, setKingsChatId] = useState({ value: "" });
    const [zone, setZone] = useState({ value: "" });
    const [church, setChurch] = useState({ value: "" });
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
                    <h2 className="text-center text-lg/9 font-bold">Register to Go to INC.</h2>
                </div>

                <div className="mt-10 overflow-y-auto rounded-lg border border-primary bg-light px-6 py-6 shadow sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleLogin} className="space-y-4">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium">
                                Name
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setName}
                                    state={name}
                                    name="name"
                                    type="text"
                                    required={true}
                                    placeholder="Full Name"
                                    autoComplete="name"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm/6 font-medium">
                                Email
                            </label>
                            <div className="mt-1">
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
                            <label htmlFor="kingsChatId" className="block text-sm/6 font-medium">
                                Kingschat ID
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setKingsChatId}
                                    state={kingsChatId}
                                    name="kingsChatId"
                                    type="text"
                                    required={true}
                                    placeholder="Kings Chat Username"
                                    autoComplete="username"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="zone" className="block text-sm/6 font-medium">
                                Zone
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setZone}
                                    state={zone}
                                    name="zone"
                                    type="text"
                                    required={true}
                                    placeholder="Branch Zone"
                                    autoComplete="address-level1"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="church" className="block text-sm/6 font-medium">
                                Church
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setChurch}
                                    state={church}
                                    name="church"
                                    type="text"
                                    required={true}
                                    placeholder="Church Name"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                className="btn-primary mt-10 flex items-center gap-2"
                            >
                                Submit
                            </button>
                        </div>
                    </form>
                    <div className="mt-4 flex items-center gap-2 text-sm font-semibold">
                        <p>
                            Already have an account?
                            <Link className="mx-1 text-secondary" href={"/auth/login"}>
                                Login here!
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
}
