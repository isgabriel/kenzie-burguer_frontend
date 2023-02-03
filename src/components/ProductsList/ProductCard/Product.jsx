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
        <li>
            <figure>
                <img src={image} alt={name} />
            </figure>
            <div>
                <h2>{name}</h2>
                <p>{category}</p>
                <p>R$ {price.toFixed(2)}</p>
                <button onClick={() => addToCart(product)}>Adicionar</button>
                <div></div>
            </div>
        </li>
    );
}
