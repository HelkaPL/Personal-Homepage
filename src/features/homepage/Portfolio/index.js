import { useSelector, useDispatch  } from "react-redux";
import { useEffect } from "react";
import { Header, Icon, StyledArticle, SubHeader } from "./styled";
import { ReactComponent as Github } from "../images/icons/github.svg";
import { Galery } from "./Galery";
import { fetchRepos, selectRepos, selectReposStatus } from "./Galery/galerySlice";



const Portfolio = () => {
    const dispatch = useDispatch();

    const reposStatus = useSelector(selectReposStatus);
    const repositories = useSelector(selectRepos);

    useEffect(() => {
        dispatch(fetchRepos());
    }, [dispatch]);

    return (
    <>
        <StyledArticle>
            <Icon>
                <Github />
            </Icon>
            <Header>Portfolio</Header>
            <SubHeader>My recent projects</SubHeader>
        </StyledArticle>
        <Galery
            status={reposStatus}
            repositories={repositories} />
    </>
)};

export default Portfolio;