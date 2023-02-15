import styled from "styled-components";

export const Wrapper = styled.div`
    margin: 0 auto;
    padding-top: 120px;
    max-width: 1216px;

    @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}) {
            padding: 33px 13px 30px 13px;
            max-width: 320px;
            }
`;
