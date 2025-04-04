"use client";
import { postReportService } from "@/api-services/report.service";
import Input from "@/components/input";
import SpinnerSemicircle from "@/components/svg/spinner-semicircle";
import Layouts from "@/layout/layout";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function CreateReport() {
    const [title, setTitle] = useState({ value: "" });
    const [documentLink, setDocumentLink] = useState({ value: "" });
    const [videoLink, setVideoLink] = useState({ value: "" });
    const [description, setDescription] = useState({ value: "" });

    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const submitEvent = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (loading) return;
        setLoading(true);
        postReportService({
            title: title.value,
            description: description.value,
            documentLink: documentLink.value,
            videoLink: videoLink.value,
        })
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            .then((_res) => {
                router.push("/reports");
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
                    <h3 className="text-lg font-semibold">Create Report</h3>
                    <form onSubmit={submitEvent} className="mt-10 grid grid-cols-1 md:grid-cols-2">
                        <div>
                            <label htmlFor="title" className="block text-sm/6 font-medium">
                                Title
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setTitle}
                                    state={title}
                                    name="title"
                                    type="text"
                                    required={true}
                                    placeholder="Report Title"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <label htmlFor="videoLink" className="block text-sm/6 font-medium">
                                Video Link
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setVideoLink}
                                    state={videoLink}
                                    name="videoLink"
                                    type="text"
                                    required={true}
                                    placeholder="Video Link"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="documentLink" className="block text-sm/6 font-medium">
                                Document Link
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setDocumentLink}
                                    state={documentLink}
                                    name="documentLink"
                                    type="text"
                                    required={true}
                                    placeholder="Document Link"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="description" className="block text-sm/6 font-medium">
                                Description
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setDescription}
                                    state={description}
                                    name="description"
                                    type="text"
                                    required={true}
                                    placeholder="Video Description"
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
