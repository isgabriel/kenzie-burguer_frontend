import React from "react";
import { Aside, AsideDivTitle, DivCart, DivEmptyCart } from "./styleCart";
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
        <Aside>
            <AsideDivTitle>
                <h2>Carrinho de compras</h2>
            </AsideDivTitle>
            {currentSale.length === 0 ? (
                <DivEmptyCart>
                    <h3 className="descEmptyCart">Sua sacola está vazia</h3>
                    <p className="descAddItems">Adicione itens</p>
                </DivEmptyCart>
            ) : (
                <DivCart>
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
                </DivCart>
            )}
        </Aside>
    );
}
