'use client';

import { roboto_mono } from "@/app/fonts";
import { useRouter } from "next/navigation";
import { LiaArrowRightSolid } from 'react-icons/lia'
import Image from "next/image";

const Work2 = () => {
    const router = useRouter();

    return (
        <div className="grid grid-cols-5 grid-rows-5 gap-4">
            <div className="relative outline outline-amber-50 row-span-2 rounded-md h-64 cursor-pointer group"
                onClick={() => router.push('/about')}
            >
                <Image 
                    src='/images/about.png'
                    alt="about hero"
                    fill
                    style={{ width: '100%', maxWidth:'200px', height: '100%', maxHeight:'180px'}}
                    className="rounded-sm ml-9 mt-8 group-hover:opacity-70"
                />
                <div className="flex flex-row absolute gap-2 mt-20 inset-x-0 bottom-0">
                    <div className="flex flex-row gap-2 cursor-pointer">
                        <div className={`pl-2 pb-2 tracking-tighter text-amber-50 group-hover:opacity-50 ${roboto_mono.className}`}>
                            More about me
                        </div>
                        <div className='text-amber-50 pt-0.5 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                            <LiaArrowRightSolid size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative outline outline-amber-50 col-span-3 row-span-3 rounded-md cursor-pointer group"
                onClick={() => router.push('/research')}
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-sm ml-2 mt-2 group-hover:opacity-50"
                    style={{ width: '100%', maxWidth: '1000px', height: '100%', maxHeight: '380px'}}
                >
                    <source src="/videos/intro1.mp4" type="video/mp4"/>
                </video>
                <div className="flex flex-row absolute gap-2 mt-20 inset-x-0 bottom-0">
                    <div className="flex flex-row gap-2 cursor-pointer">
                        <div className={`pl-2 pb-2 tracking-tighter text-amber-50 group-hover:opacity-50 ${roboto_mono.className}`}>
                            Neurotechnology research
                        </div>
                        <div className='text-amber-50 pt-0.5 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                            <LiaArrowRightSolid size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative outline outline-amber-50 col-span-3 row-span-2 col-start-2 row-start-4 rounded-md cursor-pointer group"
                onClick={() => router.push('/cogs')}
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-sm object-cover group-hover:opacity-50"
                    style={{ width: '100%', maxWidth: '1000px', height: '100%', maxHeight: '230px'}}
                >
                    <source src="/videos/cogs200_3.mp4" type="video/mp4"/>
                </video>
                <div className="flex flex-row absolute gap-2 mt-20 inset-x-0 bottom-0">
                    <div className="flex flex-row gap-2 cursor-pointer">
                        <div className={`pl-2 pb-2 tracking-tighter text-amber-50 group-hover:opacity-50 ${roboto_mono.className}`}>
                            Cognitive Systems (Coursework)
                        </div>
                        <div className='text-amber-50 pt-0.5 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                            <LiaArrowRightSolid size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative outline outline-amber-50 row-span-3 col-start-5 row-start-1 rounded-md cursor-pointer group"
                onClick={() => router.push('/evaluation')}
            >
                <Image 
                    src='/images/eval_img2.svg'
                    alt="evaluation"
                    fill
                    style={{ width: '100%', height: '100%'}}
                    className="rounded-md object-cover object-top filter brightness-75 group-hover:opacity-50"
                />
                <div className="flex flex-row absolute gap-2 mt-20 inset-x-0 bottom-0">
                    <div className="flex flex-row gap-2 cursor-pointer">
                        <div className={`pl-2 pb-2 tracking-tighter text-amber-50 group-hover:opacity-50 ${roboto_mono.className}`}>
                            Forestar Evaluation
                        </div>
                        <div className='text-amber-50 pt-0.5 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                            <LiaArrowRightSolid size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative outline outline-amber-50 row-span-2 col-start-5 row-start-4 rounded-md cursor-pointer group"
                onClick={() => router.push('/forestar')}
            >
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md object-cover opacity-70 group-hover:opacity-30"
                    style={{ width: '100%', maxWidth: '300px', height: '100%', maxHeight: '230px' }}
                >
                    <source src="/videos/forestar_final.mp4" type="video/mp4"/>
                </video>
                <div className="flex flex-row absolute gap-2 mt-20 inset-x-0 bottom-0">
                    <div className="flex flex-row gap-2 cursor-pointer">
                        <div className={`pl-2 pb-2 tracking-tighter text-amber-50 group-hover:opacity-50 ${roboto_mono.className}`}>
                            Forestar
                        </div>
                        <div className='text-amber-50 pt-0.5 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                            <LiaArrowRightSolid size={20}/>
                        </div>
                    </div>
                </div>
            </div>
            <div className="relative outline outline-amber-50 row-span-3 col-start-1 row-start-3 rounded-md cursor-pointer group"
                onClick={() => router.push('/reachout')}
            >
                <Image 
                    src='/images/reachout_graph.svg'
                    alt="reachout graph"
                    fill
                    style={{ width: '100%', height: '100%'}}
                    className="rounded-sm group-hover:opacity-50"
                />
                <div className="flex flex-row absolute gap-2 mt-20 inset-x-0 bottom-0">
                    <div className="flex flex-row gap-2 cursor-pointer">
                        <div className={`pl-2 pb-2 tracking-tighter text-amber-50 group-hover:opacity-50 ${roboto_mono.className}`}>
                            T1D REACHOUT
                        </div>
                        <div className='text-amber-50 pt-0.5 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                            <LiaArrowRightSolid size={20}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work2;