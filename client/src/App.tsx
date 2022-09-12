import React, { useEffect, useState } from "react";
import "./App.css";
import { Routes, BrowserRouter as Router, Route } from "react-router-dom";
import {
    Home,
    FormPage,
    Cart,
    Orders,
    Account,
    Category,
    NotFound,
} from "./pages/index";
import { NavBar } from "./components";
import Product from "./pages/Product";
import store from "store2";
import ProductManagement from "./pages/admin/ProductManagement";
import UserManagement from "./pages/admin/UserManagement";
import { ProductType } from "./types/product.model";
import { UserType } from "./types/users.model";
import Auth from "./pages/Auth";
import { getAuth } from "./api/auth";

function App() {
    const localStorage = store.get("itemsInCart");
    const [itemsInCart, setItemsInCart] = useState<ProductType[]>(
        localStorage ? localStorage : []
    );
    const [user, setUser] = useState<UserType>();
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

    const authorizeUser = async () => {
        const result = await getAuth();
        if (result) {
            //TODO get actual user info
            setUser({
                _id: "1234",
                email: "email@gmail.com",
                username: "jojo",
                role: "admin",
            });
            setIsLoggedIn(true);
        }
    };

    const addToCart = (item: ProductType) => {
        const newItems = [...itemsInCart];
        newItems.push(item);
        store.set("itemsInCart", newItems, true);
        setItemsInCart(newItems);
    };

    const removeFromCart = (index: number) => {
        const newItems = [...itemsInCart];
        newItems.splice(index, 1);
        store.set("itemsInCart", newItems);
        setItemsInCart(newItems);
    };

    const emptyCart = () => {
        setItemsInCart([]);
        store.set('itemsInCart', []);
      };

    useEffect(() => {
        authorizeUser();
    }, [user]);

    return (
        <Router>
            <div className="App">
                <NavBar
                    isLoggedIn={user ? true : false}
                    counter={itemsInCart ? itemsInCart.length : 0}
                />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/auth/:token" element={<Auth />} />
                    <Route path="/forms" element={<FormPage />} />
                    <Route
                        path="/cart"
                        element={
                            <Cart
                                itemsInCart={itemsInCart}
                                removeFromCart={removeFromCart}
                                emptyCart={emptyCart}
                            />
                        }
                    />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/category/:slug" element={<Category />} />
                    <Route
                        path="/product/:id"
                        element={<Product addToCart={addToCart} />}
                    />
                    <Route path="*" element={<NotFound />} />

                    {/* Admin Routes */}
                    {isLoggedIn && user?.role === "admin" && (
                        <>
                            <Route
                                path="/admin/users"
                                element={<UserManagement />}
                            />
                            <Route
                                path="/admin/products"
                                element={<ProductManagement />}
                            />
                        </>
                    )}
                </Routes>
            </div>
        </Router>
    );
}

export default App;
