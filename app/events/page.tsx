"use client";
import Layouts from "@/layout/layout";
import { useEffectOnce } from "react-use";
import { useState } from "react";
import { EventCard } from "./event-card";
import Link from "next/link";
import { EventData, getEventService } from "@/api-services/event.service";

export default function Events() {
    const [loading, setLoading] = useState(false);
    const [events, setEvents] = useState<EventData[]>([]);

    useEffectOnce(() => {
        setLoading(true);
        getEventService({ page: 1, pageSize: 10 })
            .then((res) => {
                setLoading(false);
                setEvents(res?.data?.events);
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
            });
    });

    return (
        <Layouts>
            <div className="">
                <div className="flex items-center justify-end px-4 py-4">
                    <Link className="btn-primary block w-fit px-6 py-2" href={"/events/create"}>
                        Create Event
                    </Link>
                </div>
                <div className="container grid grid-cols-1 gap-5 px-4 pb-8 md:grid-cols-2 lg:grid-cols-2">
                    {loading && (
                        <div className="row-span-12 flex h-full w-full items-center justify-center text-center md:col-span-2 lg:col-span-3">
                            <p>Loading...</p>
                        </div>
                    )}
                    {!!events.length &&
                        events?.map((event) => (
                            <EventCard
                                expectedParticipants={event.expectedParticipants}
                                location={event.location}
                                name={event.name}
                                date={event.eventDate}
                                key={event?.id}
                            />
                        ))}
                    {!loading && events.length === 0 && (
                        <div className="row-span-12 flex h-full w-full items-center justify-center text-center md:col-span-2 lg:col-span-3">
                            <p>No Events found</p>
                        </div>
                    )}
                </div>
            </div>
        </Layouts>
    );
}
