import React from "react";
import logo from "../../../assets/logo.svg";

export function Logo({ resetAllProducts }) {
    return (
        <figure>
            <img
                src={logo}
                alt="logo burguer kenzie"
                onClick={resetAllProducts}
            />
        </figure>
    );
}
