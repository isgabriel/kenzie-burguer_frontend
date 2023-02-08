import styled from "styled-components";

export const PrimaryButton = styled.button`
    background-color: var(--color-primary);
    color: var(--white-color);

    padding: 12px 20px;

    border-radius: var(--Radius-Button);

    &:hover {
        transition: 0.6s;

        background-color: var(--color-primary-50);
    }
`;
