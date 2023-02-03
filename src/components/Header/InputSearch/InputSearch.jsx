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
        <form onSubmit={submit}>
            <div className="form__divInput">
                <input
                    onChange={change}
                    name="inputSrc"
                    placeholder="Digitar Pesquisa"
                    value={inputSrc}
                    className="divInput__input"
                />
                <button type="submit" className="divInput__button">
                    Pesquisar
                </button>
            </div>
        </form>
    );
}
