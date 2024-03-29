import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

body {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;

    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #e0e0e0;
    --grey-0: #f5f5f5;
    --white-color: #ffffff;
    --removeBtn-color: #bdbdbd;

    --negative-feedback: #e60000;
    --warning-feedback: #ffcd07;
    --sucess-feedback: #168821;
    --information-feedback: #155bcb;

    /* Typography */

    --font-family: "Inter", sans-serif;

    --Title-1: 1.625rem;
    --Title-2: 1.375rem;
    --Title-3: 1.125rem;
    --Title-4: 0.875rem;

    --Headline: 1rem;
    --Body: 0.875rem;
    --Caption: 0.75rem;

    --Bold: 700;
    --Semi-Bold: 600;
    --Regular: 400;

    /* Button */
    --Default-Padding: 10.5px 20px;

    --Medium-padding: 20.5px 20px;

    --Radius-Button: 8px;
    --Radius-Input: 8px;

    /* Borders */
    --Border-Default: 2px;
    --Radius-Default: 5px;
}
button {
    cursor: pointer;
}
::-webkit-scrollbar {
    width: 12px;
    background: transparent;
    height: 10px;
}

::-webkit-scrollbar-thumb {
    box-shadow: inset 0 0 14px 14px var(--color-primary);
    border: solid 4px transparent;
    border-radius: 14px;
}
`;
