'use client';

import Container from "../components/Container";
import CogsHead from "../components/cogs/CogsHead";
import Cogs300Info from "../components/cogs/Cogs300Info";
import Cogs200Info from "../components/cogs/Cogs200Info";

const CogsClient = () => {
    return (
        <Container>
            <CogsHead />
            <Cogs300Info />
            <Cogs200Info />
        </Container>
    );
}

export default CogsClient;