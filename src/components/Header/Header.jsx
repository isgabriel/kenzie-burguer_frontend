import React from "react";
import { Logo } from "./Logo/Logo";
import { InputSearch } from "./InputSearch/InputSearch";

export function Header({ resetAllProducts, search }) {
    return (
        <header className="header__container">
            <nav className="header__navbar">
                <Logo resetAllProducts={resetAllProducts} />
                <InputSearch search={search} />
            </nav>
        </header>
    );
}
