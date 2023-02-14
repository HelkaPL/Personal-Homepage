import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    max-width: 670px;
    margin-top: 120px;
`;

export const Caption = styled.h2`
    font-weight: 700;
    font-size: 12px;
    line-height: 1.3;
    text-transform: uppercase;
    margin: 0;
`;

export const Header = styled.a`
    font-weight: 900;
    font-size: clamp(18px, 6vw, 32px);
    line-height: 39px;
    letter-spacing: 0.05em;
`;

export const Info = styled.p`
    font-weight: 400;
    font-size: clamp(14px, 4.5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
    margin: 0;
`;

export const SocialsLinks = styled.div`
    margin-top: 56px;
`;

export const Link = styled.a`
    display: inline-block;
    width: 48px;
    height: 48px;
    margin-right: 24px;
    cursor: pointer;
`;