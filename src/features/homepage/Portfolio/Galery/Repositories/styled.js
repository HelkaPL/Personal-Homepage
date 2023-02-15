import styled from "styled-components";

export const Wrapper = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
    padding: 0;
    background: ${({theme}) => theme.colors.boxBackground};
`;

export const Container = styled.li`
    padding: 56px;
    width: 100%;
    height: 322px;
    color: transparent;
    border: 6px solid rgba(209, 213, 218, 0.3);
    box-shadow: 0px -2px 50px rgba(9, 10, 51, 0.02), 0px 16px 58px rgba(9, 10, 51, 0.03);
    border-radius: 4px;

    &:hover {
        border: 6px solid rgba(3, 102, 214, 0.2);
    }
`;

export const Title = styled.h3`
    margin-top: 0;
    color: ${({ theme }) => theme.colors.primary};
    font-weight: 700;
    font-size: clamp(16px, 5vw, 24px);
    line-height: 29px;
    letter-spacing: 0.05em;
`;

export const Description = styled.p`
    margin: 0 0 24px 0;
    height: fit-content;
    /* height: 75px; */
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    font-size: clamp(14px, 4vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
`;

export const LinkContainer = styled.div`
    display: flex;
    margin-bottom: 8px;
`;

export const Text = styled.span`
    min-width: 65px;
    color: ${({ theme }) => theme.colors.textSecondary};
    font-weight: 400;
    font-size: clamp(14px, 5vw, 18px);
    line-height: 1.4;
    letter-spacing: 0.05em;
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
`;