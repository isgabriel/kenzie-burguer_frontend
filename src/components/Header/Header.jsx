import React from "react";
import { Logo } from "./Logo/Logo";
import { InputSearch } from "./InputSearch/InputSearch";

export function Header({ resetAllProducts, search }) {
    return (
        <header>
            <nav>
                <Logo resetAllProducts={resetAllProducts} />
                <InputSearch search={search} />
            </nav>
        </header>
    );
}
