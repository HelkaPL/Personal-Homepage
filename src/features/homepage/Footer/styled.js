import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 120px;
    max-width: 670px;
`;

export const Caption = styled.h2`
    margin: 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-size: 12px;
    font-weight: 700;
    line-height: 1.3;
    text-transform: uppercase;
`;

export const Header = styled.a`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 900;
    font-size: clamp(18px, 6vw, 32px);
    line-height: 39px;
    letter-spacing: 0.05em;
    text-decoration: none;
`;

export const Info = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: clamp(14px, 4.5vw, 18px);
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.05em;
`;

export const SocialsLinks = styled.div`
    margin-top: 56px;
`;

export const Link = styled.a`
    display: inline-block;
    margin-right: 24px;
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;
`;