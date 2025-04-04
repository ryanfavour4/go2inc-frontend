"use client";
import { postEventService } from "@/api-services/event.service";
import Input from "@/components/input";
import SpinnerSemicircle from "@/components/svg/spinner-semicircle";
import Layouts from "@/layout/layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateEvents() {
    const [name, setName] = useState({ value: "" });
    const [location, setLocation] = useState({ value: "" });
    const [expectedParticipants, setExpectedParticipants] = useState({ value: "1" });
    const [eventDate, setEventDate] = useState({ value: "" });

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        postEventService({
            name: name.value,
            location: location.value,
            eventDate: eventDate.value,
            expectedParticipants: Number(expectedParticipants.value),
        })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((_res) => {
                router.push("/events");
                setLoading(false);
            })
            .catch((err) => {
                setLoading(false);
                alert(err.message);
            });
    };

    return (
        <Layouts>
            <div className="px-4 py-6">
                <div className="rounded-lg border bg-white p-5 shadow">
                    <h3 className="text-lg font-semibold">Create Event</h3>
                    <form onSubmit={submitEvent} className="mt-10 grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <label htmlFor="name" className="block text-sm/6 font-medium">
                                name
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setName}
                                    state={name}
                                    name="name"
                                    type="text"
                                    required={true}
                                    placeholder="Event Name"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <label htmlFor="location" className="block text-sm/6 font-medium">
                                Location
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setLocation}
                                    state={location}
                                    name="location"
                                    type="text"
                                    required={true}
                                    placeholder="Events Location"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="eventDate" className="block text-sm/6 font-medium">
                                Event Date
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setEventDate}
                                    state={eventDate}
                                    name="eventDate"
                                    type="date"
                                    required={true}
                                    placeholder="Set Your Event date"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label
                                htmlFor="expectedParticipants"
                                className="block text-sm/6 font-medium"
                            >
                                Expected Participant / Visitors
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setExpectedParticipants}
                                    state={expectedParticipants}
                                    name="expectedParticipants"
                                    type="number"
                                    required={true}
                                    placeholder="Number of people expected for your event"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>

                        <div className="mt-10">
                            <button
                                disabled={loading}
                                type="submit"
                                className="btn-primary flex w-fit items-center gap-2 px-8 py-2"
                            >
                                <p>Submit</p>
                                {loading && <SpinnerSemicircle className="animate-spin" />}
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layouts>
    );
}
