import { WrapperLoading, TextLoading, Spinner } from "./styled";

export const Loading = () => (
    <WrapperLoading>
        <TextLoading>Please wait, projects are being loaded...</TextLoading>
        <Spinner />
    </WrapperLoading>
);