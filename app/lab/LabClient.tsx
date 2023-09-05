'use client';

import Container from "../components/Container";
import LabInfo from "../components/lab/LabInfo";

const LabClient = () => {
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
                    (  Lab  )
                </div>
                <div
                    className="
                        lg:text-3xl
                        text-amber-50
                    "
                >
                    Early iterations, unfinished frameworks, and
                    <br /> 
                    experimentation for fun and for projects.
                </div>
            </div>
            <LabInfo />
        </Container>
    );
}

export default LabClient;