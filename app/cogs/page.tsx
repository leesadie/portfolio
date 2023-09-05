import ClientOnly from "../components/ClientOnly";
import CogsClient from "./CogsClient";

const CogsPage = () => {
    return (
        <ClientOnly>
            <CogsClient />
        </ClientOnly>
    );
}

export default CogsPage;