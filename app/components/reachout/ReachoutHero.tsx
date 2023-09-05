'use client';

import { roboto_mono } from "@/app/fonts";

const ReachoutHero = () => {
    return (
        <div>
            <div className="relative outline outline-amber-50 h-full w-full rounded-md">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-full w-full"
                >
                    <source src="/videos/reachout_graph.mp4" type="video/mp4"/>
                </video>
                <div className="absolute inset-y-0 lg:left-10 left-5 top-16 lg:top-80 lg:text-3xl text-[10px] text-amber-50">
                    Automating time in range (TIR)
                    <br />
                    collection: measuring the impact
                    <br />
                    of mental support on T1D with
                    <br />
                    comparative glycemic outcomes.
                </div>
            </div>
        </div>
    );
}

export default ReachoutHero;