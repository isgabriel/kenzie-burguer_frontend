import styled from "styled-components";

export const Aside = styled.aside`
    display: flex;
    flex-direction: column;
    align-items: center;

    @media only screen and (min-width: 769px) {
        width: 80%;
    }
    @media only screen and (min-width: 769px) {
        margin-top: 15px;

        min-width: 365px;
        max-width: 365px;
    }
`;

export const AsideDivTitle = styled.div`
    border-top-right-radius: var(--Radius-Default);
    border-top-left-radius: var(--Radius-Default);

    background-color: var(--color-primary);
    color: var(--white-color);

    font-size: var(--Title-3);
    font-weight: var(--Bold);

    width: 90%;

    h2 {
        padding: 22px;
    }
`;

export const DivEmptyCart = styled.div`
    border-bottom-right-radius: var(--Radius-Default);
    border-bottom-left-radius: var(--Radius-Default);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;
    height: 25vh;

    background-color: var(--grey-0);

    h3 {
        font-size: var(--Title-3);
        font-weight: var(--Bold);
    }

    p {
        font-size: var(--Body);
        font-weight: var(--Regular);
    }
`;

export const DivCart = styled.div`
    margin-bottom: 20px;
    border-bottom-right-radius: var(--Radius-Default);
    border-bottom-left-radius: var(--Radius-Default);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    width: 90%;

    background-color: var(--grey-0);

    ul {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 20px;
        padding: 20px 0;

        @media only screen and (min-width: 769px) {
            justify-content: flex-start;

            max-height: 42vh;

            overflow-y: scroll;
        }
    }
`;

// CartCard
export const ListItemCart = styled.li`
    width: 90%;
    display: flex;
    gap: 10px;
    height: 80px;

    figure {
        background-color: var(--grey-20);

        img {
            height: 100%;
        }
    }
`;

export const SectionDivsCart = styled.section`
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

export const DivInfoCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;

    h4 {
        font-size: var(--Title-3);
        font-weight: var(--Bold);

        color: var(--grey-100);
    }

    p {
        font-size: var(--Caption);
        font-weight: var(--Regular);

        color: var(--grey-50);
    }
`;

export const DivManageItemsCart = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;

    button {
        cursor: pointer;

        color: var(--removeBtn-color);
        &:hover {
            border-bottom: 1px solid var(--negative-feedback);
            color: var(--negative-feedback);
        }
    }
    div {
        display: flex;
        justify-content: space-between;

        .lowerOneItemBtn {
            background-color: var(--color-secondary);
            color: var(--white-color);

            border-radius: 50%;
            border-bottom: none;
            &:hover {
                background-color: var(--negative-feedback);
            }
        }
        .addOneItemBtn {
            background-color: var(--color-primary-50);
            color: var(--white-color);

            border-radius: 50%;
            border-bottom: none;
            &:hover {
                background-color: var(--color-primary);
            }
        }
        p {
        }
    }
`;

// Cart Total
export const SectionCartTotal = styled.section`
    width: 90%;
    border-top: var(--Border-Default) solid var(--grey-20);

    div {
        margin-top: 20px;
        display: flex;
        justify-content: space-between;

        h3 {
            font-size: var(--Body);
            font-weight: var(--Semi-Bold);

            color: var(--grey-100);
        }
        p {
            font-size: var(--Body);
            font-weight: var(--Semi-Bold);

            color: var(--grey-50);
        }
    }
    button {
        margin-top: 20px;
        margin-bottom: 20px;
        padding: 20px;

        background-color: var(--grey-20);
        color: var(--grey-50);

        width: 100%;

        font-size: var(--Headline);
        font-weight: var(--Semi-Bold);

        border-radius: var(--Radius-Button);

        &:hover {
            background-color: var(--negative-feedback);
            color: var(--white-color);
        }
    }
`;
