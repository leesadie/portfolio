'use client';

import { roboto_mono } from "@/app/fonts";
import Image from "next/image";

const Cogs300Hero = () => {
    return (
        <div className="mt-5">
            <div className="relative border-2 border-amber-50 h-full w-full rounded-md">
                
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-full w-full object-cover"
                >
                    <source src="/videos/cogs300_pss.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
    );
}

export default Cogs300Hero;