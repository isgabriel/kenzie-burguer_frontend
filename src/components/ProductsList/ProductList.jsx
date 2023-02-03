import React from "react";
import { ProductCard } from "./ProductCard/Product";

export function ProductList({
    filteredWord,
    productsList,
    filteredProducts,
    addToCart,
}) {
    return (
        <main>
            {filteredWord && (
                <h2>
                    Resultados para: <span>{filteredWord}</span>
                </h2>
            )}
            <ul>
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
