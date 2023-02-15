import styled from "styled-components";
import { ReactComponent as Bullet } from "../images/icons/bullet.svg";

export const StyledSection = styled.div`
    margin: 0 auto 72px auto;
    padding: 32px;
    background-color: ${({ theme }) => theme.colors.background.section};
    max-height: fit-content;
    max-width: 1216px;
    box-shadow: 0px 16px 58px 0px #090A3308, 0px -2px 50px 0px #090A3305;
    color: ${({ theme }) => theme.colors.textSecondary};
    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                padding: 16px;
                margin-bottom: 48px;
            }
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

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                padding-bottom: 12px;
                font-size: 18px;
                line-height: 22px;
            }
    
`;

export const ItemList = styled.ul`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    grid-gap: 8px 105px;
    margin: 0;
    padding: 32px 0;
    color: ${({ theme }) => theme.colors.textSecondary};
    list-style: none;
    font-size: 18px;
    letter-spacing: 0.05em;
    line-height: 140%;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
                grid-template-columns: 1fr;
                padding: 12px 0;
                font-size: 14px;
                line-height: 17px;
            }
`;

export const Item = styled.li`
    display: flex;
    align-items: baseline;
    gap: 16px;
    max-width: fit-content;
`;

export const BulletMark = styled(Bullet)`
    min-width: 9px;
    color: ${({ theme }) => theme.colors.primary};;
`;