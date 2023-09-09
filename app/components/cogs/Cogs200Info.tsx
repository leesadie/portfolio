'use client';

import Cogs200Hero from "./Cogs200Hero";

const Cogs200Info = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-5 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50 mt-12">
               Introduction to Cognitive Systems (COGS 200)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Assignment: Outline a research project that contributes to at least two COGS disciplines (Computer Science, Philosophy, Linguistics, Psychology). 
            </div>
            <div className="lg:text-3xl text-amber-50">
                The project should be a) an experiment or survey, b) a software or hardware innovation, or c) a new conceptual approach to an existing issue.
            </div>
            <div>
                <Cogs200Hero />
            </div>
            <div className="flex lg:flex-row flex-col gap-2 text-amber-50 mt-4 items-center justify-center">
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl text-sm px-5">
                        Current research suggests a relationship between stress states and affective states, namely, that each prompts similar physiological responses of the autonomic nervous system (ANS).
                    </div>
                </div>
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl text-sm px-5">
                        This relationship is of interest when looking to stress detection, essentially a classification problem, and a challenging one as stress is an ill-defined internal state.
                    </div>
                </div>
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl text-sm px-5">
                        The inclusion of affective states as one input within a multimodal stress detection system thus has the potential to improve detection for monitoring stress levels.
                    </div>
                </div>
                <div className="flex items-center justify-center border-2 border-amber-50 rounded-md lg:w-1/3 w-full lg:h-60 h-32">
                    <div className="lg:text-xl text-sm px-5">
                        Monitoring stress may be valuable to many groups, particularly those who are at-risk of high stress levels for prolonged periods of time.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Cogs200Info;