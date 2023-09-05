'use client';

import { roboto_mono } from "@/app/fonts";
import Image from "next/image";

const Cogs200Hero = () => {
    return (
        <div className="mt-5">
            <div className="relative outline outline-amber-50 h-full w-full rounded-md">
                
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-full w-full object-cover"
                >
                    <source src="/videos/cogs_hero.mp4" type="video/mp4"/>
                </video>
                
                <div className="absolute inset-y-0 lg:left-10 left-5 top-16 lg:top-80 lg:text-3xl text-xs text-amber-50">
                    The affect-stress model:
                    <br />
                    A methodological framework for
                    <br />
                    physiological-based affect in
                    <br />
                    stress detection.
                    <div className="flex flex-row gap-2">
                        <a 
                            target='_blank' 
                            rel='noopener noreferrer' 
                            href='files/cogs200.pdf'
                            className={`tracking-tighter lg:text-sm text-[10px] lg:pt-2 pt-1 opacity-80 underline underline-offset-4 cursor-pointer hover:opacity-60 transition ${roboto_mono.className}`}>
                            Read project
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cogs200Hero;