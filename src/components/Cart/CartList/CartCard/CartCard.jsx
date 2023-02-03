import React from "react";

export function CartCard({
    product,
    addOneItem,
    removeOneItem,
    removeFromCart,
}) {
    return (
        <li className="list__itemCart">
            <figure className="figure__cart">
                <img
                    src={product.img}
                    alt={product.name}
                    className="image__cart"
                />
            </figure>
            <section className="section__divsCart">
                <div className="divInfo__cart">
                    <h4 className="divInfo__cart--title">{product.name}</h4>
                    <p className="divInfo__cart--category">
                        {product.category}
                    </p>
                </div>
                <div className="divManageItems__cart">
                    <button
                        onClick={() => removeFromCart(product.id)}
                        className="divManageItems__cart--removeBtn"
                    >
                        Remover
                    </button>
                    <div className="divManageItemsQuantity">
                        <button
                            onClick={() => removeOneItem(product.id)}
                            className="lowerOneItemBtn"
                        >
                            -
                        </button>
                        <p className="productQuantity">{product.quantity}</p>
                        <button
                            onClick={() => addOneItem(product.id)}
                            className="addOneItemBtn"
                        >
                            +
                        </button>
                    </div>
                </div>
            </section>
        </li>
    );
}
