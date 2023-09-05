'use client';

import Container from "../components/Container";
import EvaluationHead from "../components/evaluation/EvaluationHead";
import EvaluationInfo from "../components/evaluation/EvaluationInfo";

const EvaluationClient = () => {
    return (
        <Container>
            <EvaluationHead />
            <EvaluationInfo />
        </Container>
    );
}

export default EvaluationClient;