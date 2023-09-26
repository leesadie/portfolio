'use client';

import Cogs300Hero from "./Cogs300Hero";

const Cogs300Info = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50">
                Understanding + Designing Cognitive Systems (COGS 300)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Using Unity and C# to simulate principles and theories of cognition.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-8">
                1. Physical Symbol Systems - self-driving car
            </div>
            <div>
                <Cogs300Hero />
            </div>
        </div>
    );
}

export default Cogs300Info;