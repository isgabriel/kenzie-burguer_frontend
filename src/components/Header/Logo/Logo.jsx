import React from "react";
import logo from "../../../assets/logo.svg";
import { FigureLogo } from "../styleHeader";

export function Logo({ resetAllProducts }) {
    return (
        <FigureLogo className="figure__logo">
            <img
                src={logo}
                alt="logo burguer kenzie"
                onClick={resetAllProducts}
                className="figure__image"
            />
        </FigureLogo>
    );
}
