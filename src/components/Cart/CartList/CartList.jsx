import React from "react";
import { CartCard } from "./CartCard/CartCard";
import { CartTotal } from "./CartTotal/CartTotal";

export function CartList({
    currentSale,
    cartTotal,
    removeFromCart,
    clearCart,
    addOneItem,
    removeOneItem,
}) {
    return (
        <aside className="aside__container">
            <div className="aside__divTitle">
                <h2 className="aside__divTitle--title">Carrinho de compras</h2>
            </div>
            {currentSale.length === 0 ? (
                <div className="div__emptyCart">
                    <h3 className="descEmptyCart">Sua sacola está vazia</h3>
                    <p className="descAddItems">Adicione itens</p>
                </div>
            ) : (
                <div className="div__cart">
                    <ul className="cart__list">
                        {currentSale.map((product) => (
                            <CartCard
                                product={product}
                                key={product.id}
                                addOneItem={addOneItem}
                                removeOneItem={removeOneItem}
                                removeFromCart={removeFromCart}
                            />
                        ))}
                    </ul>
                    <CartTotal cartTotal={cartTotal} clearCart={clearCart} />
                </div>
            )}
        </aside>
    );
}
