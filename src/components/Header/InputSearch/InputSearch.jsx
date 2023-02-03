import React from "react";
import { useState } from "react";

export function InputSearch({ search }) {
    const [inputSrc, setInputSrc] = useState("");

    function submit(event) {
        event.preventDefault();
        search(inputSrc);
        setInputSrc("");
    }

    const change = (event) => setInputSrc(event.target.value);
    return (
        <form onSubmit={submit} className="form__container">
            <input
                onChange={change}
                name="inputSrc"
                placeholder="Digitar Pesquisa"
                value={inputSrc}
                className="form__input"
            />
            <button type="submit" className="primary__button">
                Pesquisar
            </button>
        </form>
    );
}
