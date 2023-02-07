import styled from "styled-components";

export const PrincipalContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 30px;

    @media only screen and (min-width: 769px) {
        align-items: center;
    }
    @media only screen and (min-width: 940px) {
        flex-direction: row;
        align-items: flex-start;
        justify-content: space-between;

        margin: 0 auto;

        max-width: 1230px;
    }
`;
