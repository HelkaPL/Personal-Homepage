import { WrapperError, IconError, HeaderError, InfoError, ButtonLink } from "./styled";
import { ReactComponent as Danger } from "./Danger.svg";
import { myData } from "../../../myData";

export const ErrorPage = () => {
    return (
        <WrapperError>
            <IconError>
                <Danger />
            </IconError>
            <HeaderError>Ooops! Something went wrong... </HeaderError>
            <InfoError>Sorry, failed to load Github projects.<br /> You can check them directly on Github.</InfoError>
            <ButtonLink target="_blank" href={myData.github_link}>Go to Github</ButtonLink>
        </WrapperError>
    )
};