import React from "react";
import { api } from "./services/Api";
import { useEffect, useState } from "react";
import { Header } from "./components/Header/Header";
import { ProductList } from "./components/ProductsList/ProductList";
import { CartList } from "./components/Cart/CartList/CartList";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { GlobalReset } from "./styles/reset";
import { GlobalStyle } from "./styles/globalStyles";
import { PrincipalContainer } from "./styleApp";

export function App() {
    const [productsList, setProductsList] = useState([]);
    const [filteredWord, setFilteredWord] = useState(null);
    const [filteredProducts, setFilteredProducts] = useState(null);
    const [currentSale, setCurrentSale] = useState([]);

    useEffect(() => {
        async function getProducts() {
            try {
                const response = await api.get();
                setProductsList(response.data);
            } catch (err) {
                console.log(err);
            }
        }
        getProducts();
    }, []);

    function search(search) {
        setFilteredWord(search);

        const newFilter = productsList.filter(
            (e) =>
                e.name.toLowerCase().includes(search.toLowerCase()) ||
                e.category.toLowerCase().includes(search.toLowerCase())
        );

        setFilteredProducts(newFilter);
    }

    function addOneItem(id) {
        const index = currentSale.findIndex((e) => e.id === id);
        const newCurentSale = [...currentSale];
        newCurentSale[index].quantity += 1;

        setCurrentSale(newCurentSale);
    }

    function removeOneItem(id) {
        const index = currentSale.findIndex((e) => e.id === id);
        const newCurentSale = [...currentSale];

        if (newCurentSale[index].quantity > 1) {
            newCurentSale[index].quantity -= 1;
            setCurrentSale(newCurentSale);
        } else {
            removeFromCart(id);
        }
    }

    function addToCart(product) {
        const testProduct = currentSale.find((e) => e.id === product.id);

        if (!testProduct) {
            setCurrentSale(currentSale.concat([{ ...product, quantity: 1 }]));
            toast.success("Item adicionado ao carrinho!", {
                position: "top-center",
                autoClose: 1500,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "colored",
            });
        } else {
            addOneItem(product.id);
        }
    }

    function removeFromCart(id) {
        const newCurentSale = currentSale.filter((e) => e.id !== id);
        setCurrentSale(newCurentSale);

        toast.warn("Item removido do carrinho!", {
            position: "top-center",
            autoClose: 1500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "colored",
        });
    }

    function clearCart() {
        setCurrentSale([]);
    }

    function resetAllProducts() {
        setFilteredWord(null);
        setFilteredProducts(null);
    }

    const totalValue = currentSale
        .reduce((acc, current) => acc + current.quantity * current.price, 0)
        .toFixed(2);

    return (
        <div className="App">
            <GlobalReset />
            <GlobalStyle />
            <Header search={search} resetAllProducts={resetAllProducts} />
            <PrincipalContainer className="principal__container">
                <ProductList
                    filteredWord={filteredWord}
                    productsList={productsList}
                    filteredProducts={filteredProducts}
                    addToCart={addToCart}
                />
                <CartList
                    currentSale={currentSale}
                    cartTotal={totalValue}
                    removeFromCart={removeFromCart}
                    clearCart={clearCart}
                    addOneItem={addOneItem}
                    removeOneItem={removeOneItem}
                />
            </PrincipalContainer>

            <ToastContainer />
        </div>
    );
}
