'use client';

import Image from "next/image";
import Container from "../components/Container";
import { roboto_mono } from "@/app/fonts";

const AboutClient = () => {
    return (
        <Container>
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
                    About
                </div>
                <div
                    className="
                        lg:text-3xl
                        text-amber-50
                    "
                >
                    My present interests and experience lie in human computer interaction,
                    <br className="hidden lg:block"/>
                    machine and deep learning in the health sector, and
                    <br />
                    applications of data + design to improve human wellbeing.
                </div>
                <div className={`text-xs lg:text-base tracking-tighter text-amber-50 ${roboto_mono.className}`}>
                    Currently in — Vancouver, BC
                </div>
                <div className="flex flex-col gap-5 lg:mt-40 mt-20 items-center justify-center">
                    <Image 
                        src='/images/new_pfp.svg'
                        alt="profile"
                        width={200}
                        height={200}
                        className="outline outline-amber-50 rounded-full"
                    />
                    <div className="lg:text-3xl text-xl mt-5 text-amber-50">
                        Things I enjoy —
                    </div>
                    <div className="mt-5 text-amber-50 lg:text-xl">
                        <div className="flex flex-row gap-3">
                            Dancing (ballet)
                            <div>
                                .
                            </div>
                            <div>
                                Cooking new recipes
                            </div>
                        </div>
                        <div className="flex flex-row gap-3">
                            Taking pictures
                            <div className="pl-0.5">
                                .
                            </div>
                            <div>
                                Running during sunrise
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex flex-col lg:gap-5 gap-3 mt-12">
                    <div className="lg:text-3xl text-amber-50 mt-12">
                        Currently working on
                    </div>
                    <hr className="border-amber-50"/>
                    <div className="lg:text-3xl text-amber-50">
                        T1D REACHOUT —
                    </div>
                    <div className="lg:text-xl text-amber-50">
                        An intervention-based randomized controlled trial for a mobile app that provides
                        peer-led mental and emotional support to people with type 1 diabetes in BC, Canada.
                    </div>
                    <div className="lg:mt-8 mt-5 lg:text-3xl text-amber-50">
                        Where
                    </div>
                    <div className={`lg:text-sm text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                        BC Children’s Hospital Research Institute — UBC Department of Medicine (Tang Laboratory; former Görges Laboratory)
                    </div>
                    <div className="lg:mt-8 mt-5 lg:text-3xl text-amber-50">
                        My role
                    </div>
                    <div className={`lg:text-sm text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                        Heading time in range data collection and analysis
                        <br />
                        Developing algorithms in R to automate collection
                        <br />
                        Designing surveys in REDCap
                        <br />
                        Working with diabetes education centres to recruit participants
                    </div>
                </div>
                <div className="flex flex-col lg:gap-5 gap-3 mt-12">
                    <div className="lg:text-3xl text-amber-50 mt-12">
                        Currently studying
                    </div>
                    <hr className="border-amber-50"/>
                    <div className="lg:text-3xl text-amber-50">
                        Cognitive Systems (COGS) —
                    </div>
                    <div className="lg:text-xl text-amber-50">
                        An interdisciplinary study of existing intelligent systems to design both new ones and interfaces between agents. 
                    </div>
                    <div className="lg:mt-8 mt-5 lg:text-3xl text-amber-50">
                        Where
                    </div>
                    <div className={`lg:text-sm text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                        University of British Columbia — Vancouver
                    </div>
                    <div className="lg:mt-8 mt-5 lg:text-3xl text-amber-50">
                        My focus
                    </div>
                    <div className={`lg:text-sm text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                        Mind, language, and computation
                        <br />
                        Minor: Data Science
                    </div>
                    <div className="lg:mt-8 mt-5 lg:text-3xl text-amber-50">
                        Coursework
                    </div>
                    <div className={`lg:text-sm text-xs text-amber-50 mb-10 tracking-tighter ${roboto_mono.className}`}>
                        Symbolic Logic  .  Statistics for Data Science
                        <br />
                        Informatics  .  Designing Cognitive Systems
                        <br />
                        Programming & Algorithms  .  Differential Calculus
                    </div>
                </div>
            </div>
        </Container>
    );
}

export default AboutClient;