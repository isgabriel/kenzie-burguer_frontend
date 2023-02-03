import React from "react";

export function CartCard({
    product,
    addOneItem,
    removeOneItem,
    removeFromCart,
}) {
    return (
        <li>
            <figure>
                <img src={product.img} alt={product.name} />
            </figure>
            <section>
                <div>
                    <h4>{product.name}</h4>
                    <p>{product.category}</p>
                </div>
                <div>
                    <button onClick={() => removeFromCart(product.id)}>
                        Remover
                    </button>
                    <div>
                        <button onClick={() => removeOneItem(product.id)}>
                            -
                        </button>
                        <p>{product.quantity}</p>
                        <button onClick={() => addOneItem(product.id)}>
                            +
                        </button>
                    </div>
                </div>
            </section>
        </li>
    );
}
