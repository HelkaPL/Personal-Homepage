import styled from "styled-components";
import { ReactComponent as Github } from "../images/icons/github.svg";

export const StyledArticle = styled.article`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 8px;
    margin-bottom: 24px;
    color: ${({ theme }) => theme.colors.textSecondary};
`;

export const Icon = styled(Github)`
    width: 40px;
    height: 39.01px;
    color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.h2`
    margin: 5px 0 0 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 900;
    font-size: 30px;
    letter-spacing: 0.05em;
    line-height: 36px;
`;

export const SubHeader = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 400;
    font-size: 20px;
    line-height: 140%;
    letter-spacing: 0.05em;
`;