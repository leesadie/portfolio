import ClientOnly from "../components/ClientOnly";
import ResearchClient from "./ResearchClient";

const ResearchPage = () => {
    return (
        <ClientOnly>
            <ResearchClient />
        </ClientOnly>
    );
}

export default ResearchPage;