'use client';

import { roboto_mono } from "@/app/fonts";
import Spline from '@splinetool/react-spline';
import { LiaArrowDownSolid} from 'react-icons/lia'
import Image from "next/image";

const ForestarBG = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 lg:mt-28 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50">
                Background
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                The transition from primarily living among nature to living in 
                urban environments has increased exposure to stressors and 
                pollutants which have caused long-term health effects.
            </div>
            <div className="hidden lg:flex lg:flex-row flex-col gap-5 text-amber-50 mt-4 items-center justify-center">
                <div className="outline outline-amber-50 rounded-md lg:w-3/4 w-full lg:h-80 h-40">
                    <div className="lg:text-xl lg:ml-24 ml-28 mt-12 lg:mt-24">
                        To improve patient wellbeing,
                        <br /> 
                        doctors have become interested 
                        <br />
                        in prescribing nature.
                    </div>
                </div>
                <div className="outline outline-amber-50 rounded-md lg:w-3/4 w-full lg:h-80 h-40">
                    <div className="lg:text-xl lg:ml-24 ml-28 mt-12 lg:mt-24">
                        Research has shown that forest
                        <br /> 
                        bathing has direct health
                        <br />
                        benefits like reducing anxiety [1].
                    </div>
                </div>
                <div className="outline outline-amber-50 rounded-md lg:w-3/4 w-full lg:h-80 h-40">
                    <div className="lg:text-xl lg:ml-24 ml-28 mt-12 lg:mt-24">
                        Forest bathing involves slowing
                        <br /> 
                        down and interacting with all
                        <br />
                        five senses in a forest.
                    </div>
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Problem
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                This project is an extension of a 2022 UBC Faculty of Forestry clinical trial. 
                During the clinical trial, some participants were unable to attend forest 
                bathing sessions due to mobility, transportation, and/or illness.
                <br/>
                <div className="mt-4">
                    These participants also felt unable to go forest bathing on their own as they had no prior experience. 
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Solution
            </div>
            <hr className="border-amber-50"/>
            <div className="relative hidden lg:flex text-amber-50">
                <div className="absolute left-0 text-2xl">
                    Increase accessibility to forest bathing 
                    <br />
                    whilst maintaining the practice
                </div>
                <div className="absolute right-0 top-60 text-2xl">
                    A mobile app that provides
                    <br />
                    interactive forest bathing
                    <br />
                    sessions with certified guides
                </div>
                <div className="absolute left-0 top-96 text-2xl">
                    Choose routes based on
                    <br />
                    specific features and
                    <br />
                    your time availability
                </div>
                <div className="">
                    <Spline scene="https://prod.spline.design/DmmFCxO7DSKgd32a/scene.splinecode"/>
                </div>
            </div>
            <div className="lg:hidden flex items-center justify-center mt-5 text-amber-50">
                <div className="absolute left-8 mb-32 text-[10px]">
                    Increase accessibility to
                    <br />
                    forest bathing whilst
                    <br />
                    maintaining the practice
                </div>
                <div className="absolute right-8 mt-32 text-[10px]">
                    A mobile app for
                    <br />
                    interactive and certified
                    <br />
                    forest bathing sessions
                </div>
                <Image 
                    src='/images/solution2.svg'
                    alt="solution"
                    width={100}
                    height={200}
                />
            </div>
            <div className="lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Challenges
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50 tracking-wide">
                Why have we built a mobile app when this practice is largely about disconnecting from technology?
            </div>
            <div className="text-amber-50">
                <LiaArrowDownSolid size={32}/>
            </div>
            <div className="lg:text-3xl text-amber-50">
                How can we build an app that reduces distractions? 
            </div>
            <div className="lg:text-3xl text-amber-50">
                How can we use other media to help people focus on the experience? 
            </div>
            <div className="lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Our answer
            </div>
            <hr className="border-amber-50"/>
            <div className="flex flex-row gap-32 mt-12 items-center justify-center">
                <div className="lg:text-2xl text-amber-50">
                    Use augmented reality to help retain
                    <br />
                    focus on a particular sense or feeling
                </div>
                <div>
                    <Image 
                        src='/images/forestar_ar.PNG'
                        alt='forestar test'
                        width={300}
                        height={400}
                    />
                </div>
            </div>
            <div className="flex flex-row gap-32 mt-12 items-center justify-center">
                <div>
                    <Image 
                        src='/images/forestar_lang.png'
                        alt='forestar test'
                        width={300}
                        height={400}
                    />
                </div>
                <div className="lg:text-2xl text-amber-50">
                    Adjust both auditory and visual 
                    <br />
                    language to act as cues that the session
                    <br />
                    is a {`'`}quiet{`'`} or distraction-free zone
                </div>
            </div>
            <div className="hidden lg:block lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Development process
            </div>
            <hr className="border-amber-50 hidden lg:block"/>
            <div className="hidden lg:flex flex-col text-amber-50">
                {/*
                <div className="flex items-center justify-center mt-40">
                    <hr className="w-3/4 border-amber-50"/>
                </div>
                */}
                <div className="flex items-center justify-center mt-40">
                    <img
                        src="/images/timeline.svg"
                        alt="timeline"
                        className="w-3/4"
                    ></img>
                </div>
                <div className="flex flex-row gap-44 ml-52 mt-5 text-amber-50">
                    <div>
                        Research, planning,
                        <br />
                        and design
                    </div>
                    <div>
                        Developing basic
                        <br />
                        proof of concept
                    </div>
                    <div>
                        Configuring React
                        <br />
                        with Needle Engine
                    </div>
                    <div>
                        Testing for bugs
                        <br />
                        and user flow
                    </div>
                </div>
            </div>
            <div className="lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Reflections
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                .  My first experience in software development, both frontend and backend.
            </div>
            <div className="lg:text-3xl text-amber-50">
                .  One of my biggest takeaways is learning to think about how a tool or technology can be used in ways outside of the norm.
            </div>
            <div className="lg:text-3xl text-amber-50">
                .  If given more time, I would have liked to work on the backend, and focus on the user experience and interaction design, especially with the AR
            </div>
            <div className="lg:text-3xl text-amber-50 lg:mt-28 mt-12">
                Citations
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-xl text-sm text-amber-50">
                [1] Kotera, Y., Richardson, M. & Sheffield, D. Effects of Shinrin-Yoku (Forest Bathing) and Nature Therapy on Mental Health: a Systematic Review and Meta-analysis. Int J Ment Health Addiction 20, 337–361 (2022). https://doi.org/10.1007/s11469-020-00363-4
            </div>
        </div>
    );
}

export default ForestarBG;