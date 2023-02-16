import styled from "styled-components";
import { ReactComponent as svgSpinner } from "./spinner.svg";

export const WrapperLoading = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 64px;
    gap: 48px;
`;

export const TextLoading = styled.span`
    color: ${({ theme }) => theme.colors.textPrimary};
    font-weight: 400;
    font-size: 20px;
    line-height: 1.4;  
    letter-spacing: 0.05em;
`;

export const Spinner = styled(svgSpinner)`
    color: ${({ theme }) => theme.colors.primary};
    animation: rotation 5s linear infinite;
    @keyframes rotation {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }
`;