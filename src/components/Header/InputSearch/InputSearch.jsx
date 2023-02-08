import React from "react";
import { useState } from "react";
import { PrimaryButton } from "../../../styles/buttonPrimary";
import { FormLogo } from "../styleHeader";

export function InputSearch({ search }) {
    const [inputSrc, setInputSrc] = useState("");

    function submit(event) {
        event.preventDefault();
        search(inputSrc);
        setInputSrc("");
    }

    const change = (event) => setInputSrc(event.target.value);
    return (
        <FormLogo onSubmit={submit} className="form__container">
            <input
                onChange={change}
                name="inputSrc"
                placeholder="Digitar Pesquisa"
                value={inputSrc}
                className="form__input"
            />
            <PrimaryButton type="submit" className="primary__button">
                Pesquisar
            </PrimaryButton>
        </FormLogo>
    );
}
