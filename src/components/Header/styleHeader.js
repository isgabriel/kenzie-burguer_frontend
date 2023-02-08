import styled from "styled-components";

// Header
export const HeaderContainer = styled.header`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    background-color: var(--grey-0);

    nav {
        width: 100%;

        padding: 14px 0;

        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 14px;

        @media only screen and (min-width: 769px) {
            flex-direction: row;
            justify-content: space-between;

            width: 90%;
            max-width: 1200px;
        }
    }
`;
// Logo
export const FigureLogo = styled.figure`
    cursor: pointer;
`;

// InputSearch
export const FormLogo = styled.form`
    background-color: var(--white-color);

    border: var(--Border-Default) solid var(--grey-20);
    border-radius: var(--Radius-Input);

    padding: 10px;

    width: 85%;
    max-width: 380px;

    display: flex;
    justify-content: space-between;

    input {
        width: 250px;
        padding: 10.5px 5px 10.5px 0;

        border: none;
        &:focus {
            outline: 0;
        }
        &::placeholder {
            color: var(--grey-20);

            font-size: var(--Headline);
            font-weight: var(--Regular);
            font-family: var(--font-family);
        }
    }
    &:has(input:focus) {
        border: var(--Border-Default) solid var(--color-primary);
    }
`;
