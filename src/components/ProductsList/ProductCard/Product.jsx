import React from "react";

export function ProductCard({
    name,
    category,
    price,
    image,
    id,
    addToCart,
    product,
}) {
    return (
        <li className="list__item">
            <figure className="figure__product">
                <img src={image} alt={name} className="image__product" />
            </figure>
            <div className="list__divInfos">
                <h2 className="list__divInfos--name">{name}</h2>
                <p className="list__divInfos--category">{category}</p>
                <p className="list__divInfos--price">R$ {price.toFixed(2)}</p>
                <button
                    onClick={() => addToCart(product)}
                    className="primary__button addBtn"
                >
                    Adicionar
                </button>
            </div>
        </li>
    );
}
