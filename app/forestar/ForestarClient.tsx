'use client';

import Container from "../components/Container";
import ForestarHead from "../components/forestar/ForestarHead";
import ForestarInfo from "../components/forestar/ForestarInfo";

const ForestarClient = () => {
    return (
        <Container>
            <ForestarHead />
            <div className="mt-12">
                <ForestarInfo />
            </div>
        </Container>
    );
}

export default ForestarClient;