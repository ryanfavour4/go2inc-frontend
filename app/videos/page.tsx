"use client";
import Layouts from "@/layout/layout";
import { useEffectOnce } from "react-use";
import { getVideosService, VideosData } from "@/api-services/video.service";
import { useState } from "react";
import { VideoCard } from "./video-card";
import Link from "next/link";

export default function Videos() {
    const [loading, setLoading] = useState(false);
    const [videos, setVideos] = useState<VideosData[]>([]);

    useEffectOnce(() => {
        setLoading(true);
        getVideosService({ category: 1, page: 1, pageSize: 10 })
            .then((res) => {
                setLoading(false);
                setVideos(res?.data?.videos);
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
                    <Link className="btn-primary block w-fit px-6 py-2" href={"/videos/create"}>
                        Create Video
                    </Link>
                </div>
                <div className="container grid grid-cols-1 gap-5 px-4 pb-8 md:grid-cols-2 lg:grid-cols-3">
                    {loading && (
                        <div className="row-span-12 flex h-full w-full items-center justify-center text-center md:col-span-2 lg:col-span-3">
                            <p>Loading...</p>
                        </div>
                    )}
                    {!!videos.length &&
                        videos?.map((video) => (
                            <VideoCard
                                description={video.description}
                                title={video.title}
                                videoUrl={video.link}
                                key={video?.id}
                            />
                        ))}
                    {!loading && videos.length === 0 && (
                        <div className="row-span-12 flex h-full w-full items-center justify-center text-center md:col-span-2 lg:col-span-3">
                            <p>No videos found</p>
                        </div>
                    )}
                </div>
            </div>
        </Layouts>
    );
}
