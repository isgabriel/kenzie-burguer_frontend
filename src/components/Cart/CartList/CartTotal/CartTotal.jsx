import React from "react";

export function CartTotal({ cartTotal, clearCart }) {
    return (
        <section>
            <div>
                <h3>Total</h3>
                <p>R$ {cartTotal}</p>
            </div>
            <button onClick={clearCart}>Remover todos</button>
        </section>
    );
}
