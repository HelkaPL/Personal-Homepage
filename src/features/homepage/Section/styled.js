import styled from "styled-components";

export const StyledSection = styled.div`
    margin: 0 auto 72px auto;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.section.background};
    max-height: fit-content;
    max-width: 1216px;
    box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;
    color: ${({ theme }) => theme.colors.site.textSecondary};
`;
export const Title = styled.h2`
    margin: 0;
    padding-bottom: 15px;
    border-bottom: 1px solid #E5E5E5;
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 900;
    font-size: 30px;
    line-height: 36px;
    letter-spacing: 0.05em;
`;

export const ItemList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 95px;
    padding: 32px 0 0 0;
    list-style: none;
    font-size: 18px;
    letter-spacing: 0.05em;
    line-height: 140%;
`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    gap: 16px;
`;