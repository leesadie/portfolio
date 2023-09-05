'use client';

const ResearchInfo = () => {
    return (
        <div className="flex flex-col lg:gap-5 gap-3 mt-12 lg:ml-20 mx-8">
            <div className="lg:text-3xl text-amber-50">
                Human-robot interaction (Sept. 2023 - Present)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Currently investigating human-robot interaction for reinforcement learning based neurorobotics. More info soon.
            </div>
            <div className="lg:text-3xl text-amber-50 mt-12">
                Deep learning (Mar. 2023 - Present)
            </div>
            <hr className="border-amber-50"/>
            <div className="lg:text-3xl text-amber-50">
                Building convolutional neural networks to classify brain 
                tumor data. Learned how to build simple neural networks from scratch with Python and NumPy. More info soon.
            </div>
        </div>
    );
}

export default ResearchInfo;