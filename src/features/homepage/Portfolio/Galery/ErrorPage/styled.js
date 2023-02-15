import styled from "styled-components";

export const WrapperError = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 71px;
`;

export const IconError = styled.div`
    width: 37px;
    margin-bottom: 23px;
`;

export const HeaderError = styled.header`
    font-weight: 700;
    font-size: 24px;
    line-height: 29px;
    letter-spacing: 0.05em;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 32px;
`;

export const InfoError = styled.span`
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;
    letter-spacing: 0.05em;
    max-width: 426px;
    color: ${({ theme }) => theme.colors.textPrimary};
    margin-bottom: 32px;
    text-align: center;
`;

export const ButtonLink = styled.a`
    display: flex;
    align-items: center;
    gap: 16px;
    padding: 12px 16px;
    width: fit-content;
    height: 49px;
    border: 1px solid rgba(209, 213, 218, 0.3);
    border-radius: 4px;
    color: #FFFFFF;
    background-color: ${({ theme }) => theme.colors.primary};
    text-decoration: none;
    font-weight: 600;
    font-size: 20.0584px;
    line-height: 24px;
    letter-spacing: 0.05em;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        box-shadow: 2px -2px 0px #8CC2FF, -2px 2px 0px #8CC2FF, 2px 2px 0px #8CC2FF, -2px -2px 0px #8CC2FF;
    }

    &:active {
        box-shadow: inset 0px 2px 0px rgba(20, 70, 32, 0.2);
    }
`;