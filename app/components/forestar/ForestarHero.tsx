'use client';

import { roboto_mono } from "@/app/fonts";

const ForestarHero = () => {
    return (
        <div>
            <div className="relative outline outline-amber-50 h-full lg:w-11/12 w-5/6 lg:ml-20 ml-8 rounded-md">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-full w-full object-none filter brightness-50"
                >
                    <source src="/videos/forestar1.mp4" type="video/mp4"/>
                </video>
                <div className="absolute inset-y-0 lg:left-10 left-5 top-16 lg:top-80 lg:text-3xl text-sm text-amber-50">
                    Improving wellbeing with forest
                    <br />
                    bathing (森林浴): self-guided
                    <br />
                    sensory immersion
                    <div className={`tracking-tighter lg:text-sm text-xs lg:pt-2 pt-1 opacity-80 underline underline-offset-4 cursor-pointer hover:opacity-60 ${roboto_mono.className}`}
                    >
                        <a target='_blank' rel='noopener noreferrer' href='https://github.com/tarabrown/ForestSpaces/' className={`tracking-tighter lg:text-sm text-[10px] lg:pt-2 pt-1 opacity-80 underline underline-offset-4 cursor-pointer hover:opacity-60 transition ${roboto_mono.className}`}>See GitHub repo</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ForestarHero;