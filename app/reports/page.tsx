"use client";
import Layouts from "@/layout/layout";
import { useEffectOnce } from "react-use";
import { useState } from "react";
import { ReportCard } from "./report-card";
import Link from "next/link";
import { getReportService, ReportData } from "@/api-services/report.service";

export default function Reports() {
    const [loading, setLoading] = useState(false);
    const [reports, setReports] = useState<ReportData[]>([]);

    useEffectOnce(() => {
        setLoading(true);
        getReportService({ page: 1, pageSize: 10 })
            .then((res) => {
                setLoading(false);
                setReports(res?.data?.reports);
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
                    <Link className="btn-primary block w-fit px-6 py-2" href={"/reports/create"}>
                        Create Report
                    </Link>
                </div>
                <div className="container grid grid-cols-1 gap-5 px-4 pb-8 md:grid-cols-2 lg:grid-cols-2">
                    {loading && (
                        <div className="row-span-12 flex h-full w-full items-center justify-center text-center md:col-span-2 lg:col-span-3">
                            <p>Loading...</p>
                        </div>
                    )}
                    {!!reports.length &&
                        reports?.map((report) => (
                            <ReportCard
                                documentLink={report.documentLink}
                                videoLink={report.videoLink}
                                title={report.title}
                                description={report.description}
                                key={report?.id}
                            />
                        ))}
                    {!loading && reports.length === 0 && (
                        <div className="row-span-12 flex h-full w-full items-center justify-center text-center md:col-span-2 lg:col-span-3">
                            <p>No Report found</p>
                        </div>
                    )}
                </div>
            </div>
        </Layouts>
    );
}
