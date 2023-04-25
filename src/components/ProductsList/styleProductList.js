import styled from "styled-components";

export const MainContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h2 {
        text-align: left;
        font-size: var(--Title-1);
        font-weight: var(--Bold);

        color: var(--grey-100);

        span {
            color: var(--grey-50);
        }
    }

    @media only screen and (min-width: 1340px) {
        margin-right: 25px;
    }
`;

export const ListProductsMain = styled.ul`
    margin-left: 16px;
    width: 95vw;
    display: flex;
    overflow-x: scroll;
    gap: 20px;

    @media only screen and (min-width: 769px) {
        justify-content: center;
        flex-wrap: wrap;

        width: 100%;
    }
`;

// Item Lista
export const ListItemMain = styled.li`
    margin-top: 15px;

    min-width: 250px;

    border: var(--Border-Default) solid var(--grey-20);
    border-radius: var(--Radius-Default);

    display: flex;
    flex-direction: column;
    align-items: center;

    &:hover {
        transition: 0.6s;
        border: var(--Border-Default) solid var(--color-primary);
    }
`;

export const FigureProduct = styled.figure`
    width: 100%;
    max-height: 150px;

    background-color: var(--grey-0);

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    img {
        height: 100%;
    }
`;

export const DivInfosProduct = styled.div`
    padding: 20px;
    width: 100%;
    max-width: 220px;

    display: flex;
    flex-direction: column;
    align-items: baseline;
    justify-content: center;
    gap: 14px;

    h2 {
        font-size: var(--Title-3);
        font-weight: var(--Bold);

        color: var(--grey-100);
    }
    .list__divInfos--category {
        font-size: var(--Caption);
        font-weight: var(--Regular);

        color: var(--grey-50);
    }
    .list__divInfos--price {
        font-size: var(--Body);
        font-weight: var(--Semi-Bold);

        color: var(--color-primary);
    }
    button {
    }
`;
