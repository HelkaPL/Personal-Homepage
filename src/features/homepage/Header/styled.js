import styled from "styled-components";
import { ReactComponent as Message } from "../images/icons/message.svg"

export const StyledHeader = styled.header`
    display: grid;
    grid-template-columns: 1fr auto;
    gap: 66px;
    align-items: center;
    margin: 120px 0 72px;
    max-width: 1032px;
`;

export const HeroImage = styled.img`
    padding: 2px 4px 10px 8px;
    width: 384px;
    height: 384px;
    border-radius: 50%;
`;

export const About = styled.div`
    margin: 52px 0 73px 0;
    font-size: 36px;
    
`;

export const PreName = styled.p`
    color: ${({ theme }) => theme.colors.site.textSecondary};
    font-weight: 700;
    font-size: 12px;
    line-height: 16px;
    text-transform: uppercase;

`;

export const Name = styled.h1`
    margin-top: 0;
    font-weight: 900;
    font-size: 38px;
    line-height: 46px;
    letter-spacing: 0.05em;
    `;

export const Description = styled.p`
    color: ${({ theme }) => theme.colors.site.textSecondary};
    font-size: 20px;
    line-height: 28px;
    letter-spacing: 0.05em; 
`;

export const HireButton = styled.a`
    display: flex;
    justify-content: space-between;
    margin-top: 32px;
    padding: 12px 16px;
    max-width: 154px;
    background-color: ${({ theme }) => theme.colors.primary}; ;
    border: 1px solid rgba(209, 213, 218, 0.1);
    border-radius: 4px;
    text-decoration: none;
    color: #ffffff;
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    letter-spacing: 0.05em;
    cursor: pointer;
`;

export const Envelope = styled(Message)`
    height: 24px;
    width: 24px;
`;