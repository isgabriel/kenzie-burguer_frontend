import React from "react";
import { Logo } from "./Logo/Logo";
import { InputSearch } from "./InputSearch/InputSearch";
import { HeaderContainer } from "./styleHeader";

export function Header({ resetAllProducts, search }) {
    return (
        <HeaderContainer className="header__container">
            <nav className="header__navbar">
                <Logo resetAllProducts={resetAllProducts} />
                <InputSearch search={search} />
            </nav>
        </HeaderContainer>
    );
}
