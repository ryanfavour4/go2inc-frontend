"use client";
import { getCategoryService } from "@/api-services/category.service";
import { postVideoService } from "@/api-services/video.service";
import Checkbox from "@/components/checkbox";
import Input from "@/components/input";
import Select from "@/components/select";
import SpinnerSemicircle from "@/components/svg/spinner-semicircle";
import Layouts from "@/layout/layout";
import { convertVimeoUrl } from "@/utils/convertVimeoUrl";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useEffectOnce } from "react-use";

export default function CreateVideo() {
    const [title, setTitle] = useState({ value: "" });
    const [link, setLink] = useState({ value: "" });
    const [description, setDescription] = useState({ value: "" });
    const [category, setCategory] = useState({ value: "1" });
    const [isRecorded, setIsRecorded] = useState({ value: "" });
    const [isActive, setIsActive] = useState({ value: "" });
    const [loading, setLoading] = useState(false);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const [categories, setCategories] = useState<any[]>([]);
    const router = useRouter();

    useEffectOnce(() => {
        setLoading(true);
        getCategoryService({ page: 1, pageSize: 10 })
            .then((res) => {
                setLoading(false);
                setCategories(res?.data?.categories);
            })
            .catch((err) => {
                setLoading(false);
                console.error(err);
            });
    });

    const submitVideo = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        if (!title.value) return toast.error("Title is required");
        if (!link.value) return toast.error("Link is required");
        if (!link.value.includes("vimeo")) return toast.error("Link must be a vimeo video");

        if (loading) return;
        console.log({
            category: category.value,
            description: description.value,
            isActive: isActive.value === "yes" ? true : false,
            isRecorded: isRecorded.value === "yes" ? true : false,
            link: convertVimeoUrl(link.value) || "",
            title: title.value,
        });

        setLoading(true);
        postVideoService({
            category: category.value,
            description: description.value,
            isActive: isActive.value === "yes" ? true : false,
            isRecorded: isRecorded.value === "yes" ? true : false,
            link: convertVimeoUrl(link.value) || "",
            title: title.value,
        })
            .then((res) => {
                console.log(res);
                router.push("/videos");
                toast.success("Video uploaded successfully, please go to video page");
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
                    <h3 className="text-lg font-semibold">Create Video</h3>
                    <form onSubmit={submitVideo} className="mt-10 grid grid-cols-1 md:grid-cols-2">
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
                                    placeholder="Video Title"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5 md:mt-0">
                            <label htmlFor="link" className="block text-sm/6 font-medium">
                                Link
                            </label>
                            <div className="mt-1">
                                <Input
                                    setState={setLink}
                                    state={link}
                                    name="link"
                                    type="text"
                                    required={true}
                                    placeholder="Video Link"
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
                        <div className="mt-5">
                            <label htmlFor="category" className="block text-sm/6 font-medium">
                                Category
                            </label>
                            <div className="mt-1">
                                <Select
                                    options={[...categories, { label: "Default", value: 1 }]}
                                    setState={setCategory}
                                    state={category}
                                    name="category"
                                    required={true}
                                    placeholder="Video Category"
                                    className="w-full md:max-w-sm"
                                />
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="isRecorded" className="block text-sm/6 font-medium">
                                Is Recorded
                            </label>
                            <div className="mt-1">
                                <div className="mt-1">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            name="is-recorded"
                                            id="is-recorded"
                                            checked={isRecorded.value === "yes"}
                                            onChange={(e) =>
                                                setIsRecorded({ value: e.target.value })
                                            }
                                            value={"yes"}
                                        />
                                        <p>Active (Yes)</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            name="is-recorded"
                                            id="is-recorded"
                                            checked={isRecorded.value === "no"}
                                            onChange={(e) =>
                                                setIsRecorded({ value: e.target.value })
                                            }
                                            value={"no"}
                                        />
                                        <p>Not Active (No)</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="mt-5">
                            <label htmlFor="isActive" className="block text-sm/6 font-medium">
                                Is Active
                            </label>
                            <div className="mt-1">
                                <div className="mt-1">
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            name="is-active"
                                            id="is-active"
                                            checked={isActive.value === "yes"}
                                            onChange={(e) => setIsActive({ value: e.target.value })}
                                            value={"yes"}
                                        />
                                        <p>Active (Yes)</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Checkbox
                                            name="is-active"
                                            id="is-active"
                                            checked={isActive.value === "no"}
                                            onChange={(e) => setIsActive({ value: e.target.value })}
                                            value={"no"}
                                        />
                                        <p>Not Active (No)</p>
                                    </div>
                                </div>
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
