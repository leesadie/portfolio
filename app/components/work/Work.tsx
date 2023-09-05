'use client';

import { roboto_mono } from "@/app/fonts";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { LiaArrowRightSolid } from 'react-icons/lia'

const Work = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-5 lg:mt-32 mt-12 items-center justify-center text-amber-50 mx-10">
            <div className="relative mt-4 outline outline-amber-50 rounded-md h-full w-full items-center justify-center group cursor-pointer"
                onClick={() => router.push('/research')}
            >
                <div className={`flex flex-row gap-32 lg:gap-72 pt-4 pl-6 text-sm lg:text-base tracking-tighter opacity-50 transition group-hover:opacity-100 ${roboto_mono.className}`}>
                    <div>
                        2023
                    </div>
                </div>
                <hr className="mx-6 mt-4 border-amber-50"/>
                <div className="flex flex-row lg:gap-96 gap-16">
                    <div className="text-lg lg:text-6xl ml-6 mt-4 right-32">
                        Neurotechnology research
                    </div>
                    <div className="mt-4 text-4xl opacity-50 transition-transform group-hover:-rotate-45 lg:group-hover:translate-y-6 group-hover:opacity-100">
                        <LiaArrowRightSolid/>
                    </div>
                </div>
                <div className="mt-5 px-6 pb-10">
                    <video
                        autoPlay
                        loop
                        muted
                        className='outline outline-amber-50 object-cover w-[1400px] lg:h-[600px]'
                    >
                        <source src='/videos/intro1.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
            <div className="relative outline outline-amber-50 rounded-md h-full w-full items-center justify-center group cursor-pointer"
                onClick={() => router.push('/evaluation')}
            >
                <div className={`flex flex-row gap-40 lg:gap-80 pt-4 pl-6 text-sm lg:text-base tracking-tighter opacity-50 transition group-hover:opacity-100 ${roboto_mono.className}`}>
                    <div>
                        2023
                    </div>
                </div>
                <hr className="mx-6 mt-4 border-amber-50"/>
                <div className="flex flex-row lg:gap-96 gap-28">
                    <div className="text-lg lg:text-6xl ml-6 mt-4 right-32">
                        Forestʌr Evaluation
                    </div>
                    <div className="mt-4 lg:ml-96 lg:pl-20 lg:text-7xl text-4xl opacity-50 transition-transform group-hover:-rotate-45 lg:group-hover:translate-y-6 group-hover:opacity-100">
                        <LiaArrowRightSolid/>
                    </div>
                </div>
                <div className="mt-5 px-6 pb-10">
                    <Image 
                        src='/images/eval_img2.svg'
                        alt="evaluation"
                        width={100}
                        height={50}
                        className="outline outline-amber-50 object-fit w-[1400px] h-[160px]"
                    />
                    
                </div>
            </div>
            <div className="relative outline outline-amber-50 rounded-md h-full w-full items-center justify-center group cursor-pointer"
                onClick={() => router.push('/cogs')}
            >
                <div className={`flex flex-row gap-28 lg:gap-64 pt-4 pl-6 text-sm lg:text-base tracking-tighter opacity-50 transition group-hover:opacity-100 ${roboto_mono.className}`}>
                    <div>
                        2023
                    </div>
                </div>
                <hr className="mx-6 mt-4 border-amber-50"/>
                <div className="flex flex-row lg:gap-96 gap-28">
                    <div className="text-lg lg:text-6xl ml-6 mt-4 right-32">
                        Cognitive Systems
                    </div>
                    <div className="mt-4 lg:ml-80 lg:pl-32 lg:text-7xl text-4xl opacity-50 transition-transform group-hover:-rotate-45 lg:group-hover:translate-y-10 group-hover:opacity-100">
                        <LiaArrowRightSolid/>
                    </div>
                </div>
                <div className="mt-5 px-6 pb-10">
                    <video
                        autoPlay
                        loop
                        muted
                        className='outline outline-amber-50 object-cover w-[1400px] lg:h-[600px]'
                    >
                        <source src='/videos/cogs200_3.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
            <div className="relative outline outline-amber-50 rounded-md h-full w-full items-center justify-center group cursor-pointer"
                onClick={() => router.push('/reachout')}
            >
                <div className={`flex flex-row gap-20 lg:gap-72 pt-4 pl-6 text-sm lg:text-base tracking-tighter opacity-50 transition group-hover:opacity-100 ${roboto_mono.className}`}>
                    <div>
                        2023
                    </div>
                </div>
                <hr className="mx-6 mt-4 border-amber-50"/>
                <div className="flex flex-row lg:gap-96 gap-32">
                    <div className="text-lg lg:text-6xl ml-6 mt-4 right-32">
                        T1D REACHOUT
                    </div>
                    <div className="mt-4 lg:ml-80 lg:pl-40 lg:text-7xl text-4xl opacity-50 transition-transform group-hover:-rotate-45 lg:group-hover:translate-y-14 group-hover:opacity-100">
                        <LiaArrowRightSolid/>
                    </div>
                </div>
                <div className="mt-5 px-6 pb-10">
                    <Image 
                        src='/images/reachout_graph.svg'
                        alt="evaluation"
                        width={100}
                        height={50}
                        className="outline outline-amber-50 object-fit w-[1400px] h-[160px]"
                    />
                </div>
            </div>
            <div className="relative outline outline-amber-50 rounded-md w-full h-full items-center justify-center group cursor-pointer"
                onClick={() => router.push('/forestar')}
            >
                <div className={`flex flex-row gap-52 lg:gap-96 pt-4 pl-6 text-sm lg:text-base tracking-tighter opacity-50 transition group-hover:opacity-100 ${roboto_mono.className}`}>
                    <div>
                        2023
                    </div>
                </div>
                <hr className="mx-6 mt-4 border-amber-50"/>
                <div className="flex flex-row lg:gap-96 gap-48">
                    <div className="text-lg lg:text-6xl ml-6 mt-4 right-32">
                        Forestʌr
                    </div>
                    <div className="mt-4 lg:ml-96 lg:pl-72 lg:text-7xl text-4xl opacity-50 transition-transform group-hover:-rotate-45 lg:group-hover:translate-y-24 lg:group-hover:translate-x-8 group-hover:opacity-100">
                        <LiaArrowRightSolid/>
                    </div>
                </div>
                <div className="mt-5 px-6 pb-10">
                    <video
                        autoPlay
                        loop
                        muted
                        className='outline outline-amber-50 object-cover object-top w-[1400px] h-[160px] filter brightness-75'
                    >
                        <source src='/videos/forestar_final.mp4' type='video/mp4'/>
                    </video>
                </div>
            </div>
        </div>
        
    );
}

export default Work;