import { Header, Icon, StyledArticle, SubHeader } from "./styled";
import { ReactComponent as Github } from "../images/icons/github.svg";

const Portfolio = () => (
    <>
        <StyledArticle>
            <Icon>
                <Github />
            </Icon>
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
        </StyledArticle>

    </>
);

export default Portfolio;