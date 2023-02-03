import React from "react";
import { ProductCard } from "./ProductCard/Product";

export function ProductList({
    filteredWord,
    productsList,
    filteredProducts,
    addToCart,
}) {
    return (
        <main className="main__container">
            {filteredWord && (
                <h2 className="main__container--title">
                    Resultados para:{" "}
                    <span className="title__SearchWord">{filteredWord}</span>
                </h2>
            )}
            <ul className="list__products">
                {filteredProducts
                    ? filteredProducts
                          .filter((product) => product.name)
                          .map((product) => (
                              <ProductCard
                                  product={product}
                                  key={product.id}
                                  name={product.name}
                                  category={product.category}
                                  price={product.price}
                                  image={product.img}
                                  id={product.id}
                                  addToCart={addToCart}
                              />
                          ))
                    : productsList
                          .filter((product) => product.name)
                          .map((product) => (
                              <ProductCard
                                  product={product}
                                  key={product.id}
                                  name={product.name}
                                  category={product.category}
                                  price={product.price}
                                  image={product.img}
                                  id={product.id}
                                  addToCart={addToCart}
                              />
                          ))}
            </ul>
        </main>
    );
}
