import React from "react";
import logo from "../../../assets/logo.svg";

export function Logo({ resetAllProducts }) {
    return (
        <figure className="figure__logo">
            <img
                src={logo}
                alt="logo burguer kenzie"
                onClick={resetAllProducts}
                className="figure__image"
            />
        </figure>
    );
}
