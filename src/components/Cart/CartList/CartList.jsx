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
        <aside>
            <div>
                <h2>Carrinho de compras</h2>
            </div>
            {currentSale.length === 0 ? (
                <div>
                    <h3>Sua sacola está vazia</h3>
                    <p>Adicione itens</p>
                </div>
            ) : (
                <div>
                    <ul>
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
