import { ErrorPage } from "./ErrorPage";
import { Loading } from "./Loading";
import { Repositories } from "./Repositories";

export const Repository = ({ status, repositories }) => {
    switch (status) {
        case "loading":
            return <Loading />;
        case "error":
            return <ErrorPage />;
        case "success":
            return <Repositories repositories={repositories} />;

        default:
            throw new Error(`incorrect status: ${status}`);
    };
};