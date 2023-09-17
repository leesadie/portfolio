'use client';

import { roboto_mono } from "@/app/fonts";

const ResearchInfo = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50">
                Reinforcement learning (Sept. 2023 - Present)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Researching and implementing algorithms for multi-agent reinforcement learning from EEG signals. More info soon.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
                Human-robot interaction (Sept. 2023 - Present)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Developing tests to explore human-robot interaction for reinforcement learning based neurorobotics. Focusing tests around cognitive load for usability and accessibility. More info soon.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
                Deep learning (Mar. 2023 - Aug. 2023)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Building convolutional neural networks to classify brain 
                tumor data. Learned how to build simple neural networks from scratch with Python and numpy.
            </div>
            <div className="text-amber-50">
                <a target='_blank' rel='noopener noreferrer' href='https://github.com/leesadie/Brain-Tumor-Detection' className={`tracking-tighter lg:text-sm text-[10px] lg:pt-2 pt-1 opacity-80 underline underline-offset-4 cursor-pointer hover:opacity-60 transition ${roboto_mono.className}`}>See GitHub repo</a>
            </div>
        </div>
    );
}

export default ResearchInfo;