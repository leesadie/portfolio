'use client';

import Container from "../components/Container";
import ReachoutHead from "../components/reachout/ReachoutHead";
import ReachoutInfo from "../components/reachout/ReachoutInfo";

const ReachoutClient = () => {
    return (
        <Container>
            <ReachoutHead />
                <ReachoutInfo />
        </Container>
    );
}

export default ReachoutClient;