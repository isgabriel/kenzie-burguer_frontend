import React from "react";
import { ProductCard } from "./ProductCard/Product";
import { ListProductsMain, MainContainer } from "./styleProductList";

export function ProductList({
    filteredWord,
    productsList,
    filteredProducts,
    addToCart,
}) {
    return (
        <MainContainer className="main__container">
            {filteredWord && (
                <h2 className="main__container--title">
                    Resultados para:
                    <span className="title__SearchWord">{filteredWord}</span>
                </h2>
            )}
            <ListProductsMain className="list__products">
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
            </ListProductsMain>
        </MainContainer>
    );
}
