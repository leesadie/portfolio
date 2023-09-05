'use client';

import { roboto_mono } from "@/app/fonts";

const EvaluationHead = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 lg:mt-32 mt-16 lg:ml-20 mx-8">
                <div
                    className="
                    text-3xl
                    sm:text-4xl
                    md:text-5xl
                    lg:text-7xl
                    lg:pt-10
                    text-amber-50
                "
                >
                    Forestʌr Evaluation
                </div>
                <div className="lg:text-3xl text-amber-50">
                    UBC Emerging Media Lab
                </div>
                <hr className="border-amber-50"/>
                <div className="grid grid-cols-3 gap-8 text-amber-50">
                    <div>
                        — Scope
                        <div className={`mt-2 flex flex-col text-[10px] md:text-sm lg:text-sm tracking-tighter ${roboto_mono.className}`}>
                            Analysis
                        </div>
                        <div className={`flex flex-col text-[10px] md:text-sm lg:text-sm tracking-tighter ${roboto_mono.className}`}>
                            Design thinking
                        </div>
                    </div>
                    <div className="lg:ml-20">
                        — Date
                        <div className={`mt-2 flex flex-col text-[10px] md:text-sm lg:text-sm tracking-tighter ${roboto_mono.className}`}>
                            Sept. 2023
                        </div>
                    </div>
                    <div className="lg:ml-32">
                        — Tools
                        <div className={`mt-2 flex flex-col text-[10px] md:text-sm lg:text-sm tracking-tighter ${roboto_mono.className}`}>
                            Figma  .  FigJam
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default EvaluationHead;