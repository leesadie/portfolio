'use client';

import Image from "next/image";
import ReachoutHero from "./ReachoutHero";
import { roboto_mono } from "@/app/fonts";

const ReachoutInfo = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <ReachoutHero />
            <div className="lg:text-3xl text-amber-50 mt-12">
               T1D REACHOUT
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50 mt-5">
                T1D REACHOUT is a 6-month intervention through a randomized controlled trial (RCT). The intervention aims to evaluate the impact of peer-led mental health support on people with type 1 diabetes delivered via a mobile app.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-5">
                Peer-led mental health support has been recognized as a vital component of effective self-management for diabetes, leading to improvements in clinical outcomes such as HbA1c and blood pressure control.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-5">
                The intervention's mental health support is accessed in several different ways including: 
            </div>
            <div className="flex lg:flex-row flex-col gap-2 text-amber-50 mt-4 items-center justify-center">
                <div className="flex items-center justify-center outline outline-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl px-5">
                        1:1 support with a designated peer supporter of choice
                    </div>
                </div>
                <div className="flex items-center justify-center outline outline-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl px-5">
                        Group support through a 24/7 chatroom with everyone on the app
                    </div>
                </div>
                <div className="flex items-center justify-center outline outline-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl px-5">
                        Topic-specific discussion boards
                    </div>
                </div>
                <div className="flex items-center justify-center outline outline-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl px-5">
                        Face to face support through 'virtual happy hours' (social Zoom meetings)
                    </div>
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 mt-5">
                This RCT is an extension of a pilot study conducted in 2022 by Dr. Tricia Tang in interior British Columbia, which was successful in reducing diabetes distress.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
               About
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50 mt-5">
                Time in range (TIR) refers to the percentage of time spent by the participant within the 3.9-10.0 mmol/L glucose range which is indicative of good glycemic control. TIR has recently been evaluated in conjuction with HbA1c, made possible with CGM technology, to provide greater insight into glucose level patterns within a period of time.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-5">
                This measurement will be compared as a secondary result at the 0-month (baseline), 3-month, and 6-month points to observe how the T1D REACHOUT intervention affects participants' glycemic outcomes.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
               Process
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50 mt-5">
                The clinical trial focuses on the Dexcom G6 and FreeStyle Libre 2. Both of these CGMs allow users to view their calculated TIR alongside other measures in a report from Dexcom Clarity and LibreView, respectively.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-5">
                To extract TIR without having to manually go through hundreds of participant reports, as well as ensure comparative calculations between the CGMs, we built functions using R and Jupyter Notebook.
            </div>
            <div className="text-amber-50 mt-5 lg:text-3xl">
                Process for Dexcom —
            </div>
            <div className="relative hidden lg:flex text-amber-50 items-center justify-center mt-32">
                <div className={`absolute left-52 top-80 tracking-tighter ${roboto_mono.className}`}>
                    Read, filter, select data
                </div>
                <div className={`absolute left-16 top-32 tracking-tighter ${roboto_mono.className}`}>
                    Create string for unique participant ID
                </div>
                <div className={`absolute left-32 -top-10 tracking-tighter ${roboto_mono.className}`}>
                    Calculate TIR (percentage of glucose within 3.9-10.0)
                </div>
                <div className={`absolute right-32 -top-10 tracking-tighter ${roboto_mono.className}`}>
                    Calculate time above and below range with this method
                </div>
                <div className={`absolute right-28 top-32 tracking-tighter ${roboto_mono.className}`}>
                    Call function on all Dexcom files
                </div>
                <div className={`absolute right-32 top-80 tracking-tighter ${roboto_mono.className}`}>
                    Bind all data + create unique IDs
                </div>
                <div className="flex items-center justify-center">
                    <Image 
                        src='/images/tir.svg'
                        alt="tir"
                        width={600}
                        height={600}
                    />
                </div>
            </div>
            <div className="lg:hidden flex relative text-amber-50 items-center justify-center mt-20">
                <div className="absolute left-5 top-28 text-[10px]">
                    Read, filter,
                    <br />
                    select data
                </div>
                <div className="absolute left-0 top-8 text-[10px]">
                    Create string for
                    <br />
                    unique participant ID
                </div>
                <div className="absolute left-6 -top-12 text-[10px]">
                    Calculate TIR 
                    <br />
                    (percentage of glucose
                    <br />
                    values within 3.9-10.0)
                </div>
                <div className="absolute right-7 -top-12 text-[10px]">
                    Calculate time above
                    <br />
                    and below range with
                    <br /> 
                    this method
                </div>
                <div className="absolute right-0 top-8 text-[10px]">
                    Call function on all
                    <br />
                    Dexcom files
                </div>
                <div className="absolute right-2 top-28 text-[10px]">
                    Bind all data +
                    <br />
                    create unique IDs
                </div>
                <div className="flex items-center justify-center">
                    <Image 
                        src='/images/tir.svg'
                        alt="tir"
                        width={200}
                        height={200}
                    />
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
               Challenges
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50 mt-5">
                The Dexcom G6 displays glucose readings for every 5 minutes, whereas the FreeStyle Libre 2 takes readings every minute yet displays readings in 15 minute increments. We therefore cannot calculate TIR in the same way for both CGMs as it would cause inaccurate results (which we discovered in the early stages by comparing our calculations to the reported percentage).
            </div>
            <div className="lg:text-3xl text-amber-50 mt-5">
                By creating separate functions to calculate TIR for each CGM, and then binding the data into a single data frame for ease of viewing and analysing, we get around this problem.
            </div>
            <a target='_blank' rel='noopener noreferrer' href='https://github.com/leesadie/tir_collection' className={`text-amber-50 underline underline-offset-4 tracking-tighter cursor-pointer text-xs lg:text-base hover:opacity-60 transition ${roboto_mono.className}`}>
                See GitHub repo (with example data)
            </a>
        </div>
    );
}

export default ReachoutInfo;