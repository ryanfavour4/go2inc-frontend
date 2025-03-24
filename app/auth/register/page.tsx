"use client";
import Link from "next/link";
import { ChangeEvent, useState } from "react";
import { IInputState } from "@/components/input/useInput";
import Input from "@/components/input";
import Logo from "@/components/svg/logo";
import { useRouter } from "next/navigation";
import { postRegisterService } from "@/api-services/auth.service";
import Checkbox from "@/components/checkbox";
import SpinnerSemicircle from "@/components/svg/spinner-semicircle";

export default function Register() {
    const [name, setName] = useState<IInputState>({ value: "" });
    const [email, setEmail] = useState<IInputState>({ value: "" });
    const [kingsChatId, setKingsChatId] = useState({ value: "" });
    const [zone, setZone] = useState({ value: "" });
    const [church, setChurch] = useState({ value: "" });
    const [designation, setDesignation] = useState<string[]>([]);
    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const toggleDesignation = (e: ChangeEvent<HTMLInputElement>) => {
        console.log(e.target.checked);
        console.log(e.target.value);
        if (e.target.checked) {
            setDesignation([...designation, e.target.value]);
        } else {
            setDesignation(designation.filter((item) => item !== e.target.value));
        }
        console.log(designation);
    };

    const handleRegister = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        postRegisterService({
            email: email.value,
            church: church.value,
            kingsChatId: kingsChatId.value,
            fullname: name.value,
            zone: zone.value,
            designation: designation,
        })
            .then((res) => {
                console.log(res);
                router.push("/");
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alert(err.message);
            });
    };

    return (
        <div className="min-h-screen bg-[url('../assets/images/auth-bg.jpg')] bg-cover bg-center bg-no-repeat">
            <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-6 lg:px-8">
                <div className="flex flex-col items-center justify-center gap-5 sm:mx-auto sm:w-full sm:max-w-sm">
                    <Link href={"/"}>
                        <Logo className="h-40 w-40 py-3 text-primary" />
                    </Link>
                    <h2 className="text-center text-lg/9 font-bold">Register to Go2Inc.</h2>
                </div>

                <div className="mt-10 overflow-y-auto rounded-lg border border-primary bg-light px-6 py-6 shadow sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleRegister} className="space-y-4">
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
                            <label htmlFor="" className="block text-sm/6 font-medium">
                                Designation
                            </label>
                            <div className="mt-1">
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        name="zonal-rep"
                                        id="zonal-rep"
                                        onChange={(e) => toggleDesignation(e)}
                                        value={"zonal-rep"}
                                    />
                                    <p>Zonal Rep GO2INC Effectuator</p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Checkbox
                                        name="country-rep"
                                        id="country-rep"
                                        onChange={(e) => toggleDesignation(e)}
                                        value={"country-rep"}
                                    />
                                    <p>Country Rep GO2INC Effectuator</p>
                                </div>
                            </div>
                        </div>

                        <div>
                            <button
                                disabled={loading}
                                type="submit"
                                className="btn-primary flex items-center gap-2"
                            >
                                <p>Submit</p>
                                {loading && <SpinnerSemicircle className="animate-spin" />}
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
