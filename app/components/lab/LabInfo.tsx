'use client';

import { roboto_mono } from "@/app/fonts";
import Image from "next/image";

const LabInfo = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50">
                Creative coding
            </div>
            <hr className="border-amber-50"/>
            <div className="grid grid-cols-2 gap-5">
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/coordinates.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <source src="/videos/flow.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Spherical coordinates - p5.js
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Flow fields - p5.js
                </div>
            </div>
            <div className="lg:grid lg:grid-cols-3 hidden mt-12 gap-5">
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <source src="/videos/loading.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%' }}
                    >
                        <source src="/videos/typography.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%',}}
                    >
                        <source src="/videos/generative.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Animation - Processing
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Typography - Processing
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Generative - Processing
                </div>
            </div>
            <div className="grid grid-cols-2 lg:gap-20 gap-5 mt-12 items-center justify-center">
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/lsystems.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    L-Systems - JavaScript  .  Python  .  HTML
                    <div className="pt-5">
                        Created for Forestar’s banner on the
                        EML website.
                    </div>
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
                Neural network outakes
            </div>
            <hr className="border-amber-50"/>
            <div className="grid grid-cols-2 gap-5">
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <Image 
                        src='/images/nn3.svg'
                        alt="poster 1"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: '100%' }}
                        className="rounded-md"
                    />
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/nn2.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Building NNs from scratch to learn for UBC MINT
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    MNIST classification output
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
                Airbnb clone
            </div>
            <hr className="border-amber-50"/>
            <div className="flex flex-col gap-3">
                <div className="border-2 border-amber-50 w-full lg:h-full rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/airbnb.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Next.js 13  .  TypeScript  .  MongoDB  .  Prisma  .  NextAuth  .  Tailwind
                </div>
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Taught myself basic frontend & backend for Forestar with this Airbnb clone from 
                    a really great YouTube tutorial by @codewithantonio as I had no prior experience
                </div>
            </div>
             
            <div className="lg:text-3xl text-amber-50 mt-12">
                Simple real-time face detection
            </div>
            <hr className="border-amber-50"/>
            <div className="grid grid-cols-2 lg:gap-20 gap-5 mt-12 items-center justify-center">
                <div className={`tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Python  .  OpenCV
                    <div className="pt-5">
                        Started working on for the 2023
                        girlCode x Aritzia hackathon to 
                        create a face detection system
                        for color matching.
                    </div>
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-96 h-40 rounded-md">
                    <Image 
                        src='/images/face3.svg'
                        alt="poster 1"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: '100%' }}
                        className="rounded-md"
                    />
                </div>
            </div>
            
            <div className="lg:text-3xl text-amber-50 mt-12">
                Motion + graphic design
            </div>
            <hr className="border-amber-50"/>
            <div className="grid grid-cols-2 gap-5">
                <div className="border-2 border-amber-50 w-full h-auto rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/soundspace1.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className="border-2 border-amber-50 w-full h-auto rounded-md">
                    <Image 
                        src='/images/poster1.svg'
                        alt="poster 1"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: '100%' }}
                        className="rounded-md"
                    />
                </div>
                <div className={`hidden lg:block tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Animated poster - Figma  .  Davinci
                    <div className="pt-2">
                        Event campaign
                    </div>
                </div>
                <div className={`hidden lg:block tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Poster - Illustrator  .  Figma
                    <div className="pt-2">
                        Event campaign
                    </div>
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-full h-40 rounded-md">
                    <Image 
                        src='/images/poster2.svg'
                        alt="poster 1"
                        width={100}
                        height={100}
                        style={{ width: '100%', height: '100%' }}
                        className="object-cover rounded-md"
                    />
                </div>
                <div className="border-2 border-amber-50 w-full lg:h-full h-40 rounded-md">
                    <video
                        autoPlay
                        loop
                        muted
                        className="rounded-md group-hover:opacity-70 object-cover"
                        style={{ width: '100%', height: '100%'}}
                    >
                        <source src="/videos/soundspace2.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className={`hidden lg:block tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Poster - Illustrator  .  Figma
                    <div className="pt-2">
                        Event campaign
                    </div>
                </div>
                <div className={`hidden lg:block tracking-tighter text-xs text-amber-50 lg:text-base ${roboto_mono.className}`}>
                    Animated poster - Figma  .  Davinci
                    <div className="pt-2">
                        Event campaign
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LabInfo;