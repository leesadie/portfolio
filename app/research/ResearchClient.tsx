'use client';

import Container from "../components/Container";
import ResearchHead from "../components/research/ResearchHead";
import ResearchInfo from "../components/research/ResearchInfo";

const ResearchClient = () => {
    return (
        <Container>
            <ResearchHead />
            <ResearchInfo />
        </Container>
    );
}

export default ResearchClient;