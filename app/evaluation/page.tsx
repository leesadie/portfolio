import ClientOnly from "../components/ClientOnly";
import EvaluationClient from "./EvaluationClient";

const EvaluationPage = () => {
    return (
        <ClientOnly>
            <EvaluationClient />
        </ClientOnly>
    );
}

export default EvaluationPage;