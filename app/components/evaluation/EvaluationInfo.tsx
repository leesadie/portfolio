'use client';

import { roboto_mono } from "@/app/fonts";
import Image from "next/image";

const EvaluationInfo = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50">
                Introduction
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-sm text-amber-50 mt-5">
                To gain a better understanding of the strengths and shortcomings of what we built, as well as how I can improve my own work, I evaluate our Forestʌr web app from human-centred design, system, and market perspectives.
            </div>
            <div className="lg:text-3xl text-amber-50">
                Human-centred perspective
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Visibility + consistency
            </div>
            <div className="relative border-2 border-amber-50 h-full w-full rounded-md">
                <img
                    src="/images/vis_consistency2.svg"
                    alt="visibility + consistency"
                    className="rounded-sm h-full w-full object-cover"
                ></img>
            </div>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Constraints + mapping
            </div>
            <div className="flex flex-row lg:gap-32 gap-40 lg:mt-12 items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-1/4 w-1/4 object-cover"
                >
                    <source src="/videos/constraints.mp4" type="video/mp4"/>
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-1/4 w-1/4 object-cover"
                >
                    <source src="/videos/mapping.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="hidden lg:flex flex-row lg:gap-28 gap-10 items-center justify-center">
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Constraints: using widgets in the
                    <br />
                    chatbot to guide the user{`'`}s interaction
                </div>
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Mapping: slider indicates that moving
                    <br />
                    right increases its value
                </div>
            </div>
            <div className="flex lg:hidden flex-row gap-32 items-center justify-center">
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Chatbot constraints: 
                    <br />
                    widgets
                </div>
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Mapping: 
                    <br />
                    slider indications
                </div>
            </div>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Affordances
            </div>
            <div className="relative border-2 border-amber-50 h-full w-full rounded-md">
                <img
                    src="/images/affordances2.svg"
                    alt="affordances"
                    className="rounded-sm h-full w-full object-cover"
                ></img>
            </div>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Feedback
            </div>
            <div className="flex flex-row lg:gap-32 gap-40 lg:mt-12 items-center justify-center">
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-1/4 w-1/4 object-cover"
                >
                    <source src="/videos/feedback1.mp4" type="video/mp4"/>
                </video>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-1/4 w-1/4 object-cover"
                >
                    <source src="/videos/feedback2.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="hidden lg:flex flex-row lg:gap-28 pr-10 gap-10 items-center justify-center">
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Using focus states to indicate what
                    <br />
                    action has been taken (route selection)
                </div>
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Conditionally rendering content
                    <br />
                    based on user{`'`}s selected value
                </div>
            </div>
            <div className="flex lg:hidden flex-row gap-44 items-center justify-center">
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Focus states: 
                    <br />
                    indicate action
                </div>
                <div className={`lg:text-lg text-xs text-amber-50 tracking-tighter ${roboto_mono.className}`}>
                    Conditionally 
                    <br />
                    rendered content
                </div>
            </div>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Learnability
            </div>
            <div className="relative border-2 border-amber-50 h-full w-full rounded-md">
                <img
                    src="/images/learnability2.svg"
                    alt="learnability"
                    className="rounded-sm h-full w-full object-cover"
                ></img>
            </div>
            <div className="lg:text-3xl mt-12 text-amber-50">
                System perspective
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Functionality
            </div>
            <div className="lg:text-2xl text-amber-50">
                Given our time and experience constraints, we decided not to focus on API routes and the MongoDB database of early iterations in the final interation so that we could focus on the augmented reality aspect. 
                This is, of course, a major drawback to the functionality of the web app.
            </div>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Bugs + errors
            </div>
            <div className="lg:text-2xl text-amber-50 lg:gap-32 gap-20 flex items-center justify-center">
                <div className={`hidden lg:block`}>
                    A bug occurs when going back and forth between 
                    <br />
                    the map and trail details pages. The Google Maps API 
                    <br />
                    makes a new request each time the map component is 
                    <br />
                    loaded, and clicking the back button causes an error in
                    <br />
                    that request since that previously loaded map
                    <br />
                    component has not been terminated. Only when the router
                    <br />
                    is manually refreshed does the map load properly. 
                </div>
                <div className={`lg:hidden text-xs`}>
                    A bug occurs going between
                    <br />
                    the map and trail pages.
                    <br />
                    The Google Maps API is not
                    <br />
                    being properly requested
                    <br />
                    upon each map loading.
                </div>
                <video
                    autoPlay
                    loop
                    muted
                    className="rounded-md h-1/4 w-1/4 object-cover"
                >
                    <source src="/videos/bug.mp4" type="video/mp4"/>
                </video>
            </div>
            <div className="lg:text-3xl text-amber-50">
                Market perspective
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Market research
            </div>
            <div className="lg:text-2xl text-amber-50">
                To the best of our knowledge, there does not exist a web app that provides guidance for a forest bathing experience with certified guides. Competitors may include native apps such as NatureQuant and TreeQuility.
            </div>
            <div className="lg:text-2xl text-amber-50 mt-5">
                Value proposition
            </div>
            <div className="flex lg:flex-row flex-col gap-5 text-amber-50 mt-4 items-center justify-center">
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-3/4 w-full lg:h-80 h-40">
                    <div className="lg:text-xl">
                        Emotional drivers of use —
                        <br />
                        Reduces stress of planning
                        <br /> 
                        to go forest bathing, especially
                        <br />
                        with little prior experience.
                    </div>
                </div>
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-3/4 w-full lg:h-80 h-40">
                    <div className="lg:text-xl">
                        Rational drivers of use —
                        <br />
                        Offers best known solution for
                        <br /> 
                        knowing what to do when going
                        <br />
                        forest bathing with clear guidance.
                    </div>
                </div>
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-3/4 w-full lg:h-80 h-40">
                    <div className="lg:text-xl">
                        Risks of use —
                        <br />
                        Introduces the possibility of
                        <br /> 
                        distraction from technology;
                        <br />
                        includes some elements that
                        <br />
                        aim to retain focus on nature.
                    </div>
                </div>
            </div>
            <div className="lg:text-2xl text-amber-50 mt-12">
                SWOT analysis
            </div>
            <div className="flex lg:flex-row flex-col items-start lg:items-center lg:justify-center lg:gap-28 gap-10">
                <div className="lg:text-2xl text-amber-50">
                    Strengths —
                    <br />
                    1. Accessibility - web app
                    <br />
                    2. Rooted in research
                    <br />
                    3. Diversified - emerging media
                </div><div className="lg:text-2xl text-amber-50">
                    Weaknesses —
                    <br />
                    1. Lack of backend
                    <br />
                    2. Limited UX research
                    <br />
                    3. Minimal testing
                </div>
                <div className="lg:text-2xl text-amber-50">
                    Opportunities —
                    <br />
                    1. Niche market of
                    <br />
                    technology in nature
                    <br />
                    therapy; underdeveloped
                </div>
                <div className="lg:text-2xl text-amber-50">
                    Threats —
                    <br />
                    1. Oversaturation as more
                    <br />
                    products emerge in the
                    <br />
                    consumer health tech space
                </div>
            </div>
        </div>
    );
}

export default EvaluationInfo;