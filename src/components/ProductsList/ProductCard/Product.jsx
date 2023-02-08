import React from "react";
import { PrimaryButton } from "../../../styles/buttonPrimary";
import {
    DivInfosProduct,
    FigureProduct,
    ListItemMain,
} from "../styleProductList";

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
        <ListItemMain className="list__item">
            <FigureProduct className="figure__product">
                <img src={image} alt={name} className="image__product" />
            </FigureProduct>
            <DivInfosProduct className="list__divInfos">
                <h2 className="list__divInfos--name">{name}</h2>
                <p className="list__divInfos--category">{category}</p>
                <p className="list__divInfos--price">R$ {price.toFixed(2)}</p>
                <PrimaryButton
                    onClick={() => addToCart(product)}
                    className="primary__button addBtn"
                >
                    Adicionar
                </PrimaryButton>
            </DivInfosProduct>
        </ListItemMain>
    );
}
