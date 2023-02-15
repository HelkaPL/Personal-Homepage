import styled from "styled-components";

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    margin-top: 120px;
    max-width: 670px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        gap: 12px;
        margin-top: 48px;
    }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                font-size: 18px;
                line-height: 22px;  
            }
`;

export const Info = styled.p`
    margin: 0;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: clamp(14px, 4.5vw, 18px);
    font-weight: 400;
    line-height: 1.4;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                font-size: 14px;
                line-height: 17px;  
            }
`;

export const SocialsLinks = styled.div`
    margin-top: 56px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
        margin-top: 40px;
    }
`;

export const Link = styled.a`
    display: inline-block;
    margin-right: 24px;
    width: 48px;
    height: 48px;
    color: ${({ theme }) => theme.colors.textPrimary};
    cursor: pointer;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                margin-right: 16px;
                width: 32px;
                height: 32px;
            }
`;