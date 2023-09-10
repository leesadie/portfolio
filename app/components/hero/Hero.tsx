'use client';

import { LiaArrowRightSolid } from 'react-icons/lia'
import { roboto_mono } from "@/app/fonts";
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();

    return (
        <div className="flex flex-col gap-5 lg:gap-10 mx-8 lg:mt-32 mt-16 lg:ml-36">
            <div
                className='
                    lg:text-7xl
                    lg:pt-10
                    text-2xl
                    sm:text-4xl
                    md:text-5xl
                    text-amber-50
                    leading-relaxed
                '
            >
                <div>
                    Hello–I’m Sadie Lee.
                </div>
                <div className='lg:mt-5 hidden lg:block'>
                    Currently focused on research @BCCHR 
                </div>
                <div className='lg:mt-5 hidden lg:block'>
                    and Cognitive Systems @UBC.
                </div>
                <div className='lg:hidden'>
                    Currently focused on research @BCCHR and Cognitive Systems + Data Science @UBC
                </div>
            </div>
            <div className='lg:hidden flex flex-row gap-2'>
                <div className='flex flex-row gap-2 group cursor-pointer'
                    onClick={() => router.push('/about')}
                >
                    <div className={`tracking-tighter group-hover:opacity-50 text-amber-50 ${roboto_mono.className}`}>
                        More about me
                    </div>
                    <div className='text-amber-50 group-hover:opacity-50 group-hover:translate-x-2 transition-transform'>
                        <LiaArrowRightSolid size={24}/>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Hero;