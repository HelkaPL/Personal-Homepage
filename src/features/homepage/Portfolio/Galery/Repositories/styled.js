import styled from "styled-components";

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    padding: 0;
    background: ${({theme}) => theme.colors.boxBackground};

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                grid-template-columns: 1fr;
                grid-gap: 16px;
            }
`;

export const Container = styled.li`
    padding: 56px;
    max-height: fit-content;
    color: transparent;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;
    transition: border 0.3s;

    &:hover {
        border: 6px solid rgba(3, 102, 214, 0.2);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                padding: 24px;
            }
`;

export const Title = styled.h3`
    margin: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: clamp(16px, 5vw, 24px);
    line-height: 29px;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                font-size: 16px;
                line-height: 19px;
            }
`;

export const Description = styled.p`
    margin: 24px 0;
    height: fit-content;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    font-size: clamp(14px, 4vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                margin: 16px 0;
                font-size: 14px;
                line-height: 17px;
            }
`;

export const LinkContainer = styled.div`
    display: flex;
    margin-bottom: 8px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                margin-bottom: 4px;
            }
`;

export const Text = styled.span`
    min-width: 65px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                font-size: 14px;
                line-height: 17px;
            }
`;

export const StyledLink = styled.a`
    display: flex;
    align-items: center;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;

    &:hover {
        filter: brightness(125%);
    }

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                font-size: 14px;
                line-height: 17px;
            }
`;