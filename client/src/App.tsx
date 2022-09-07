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
import { ProductInstance } from "./models/product";
import Product from "./pages/Product";
import store from "store2";
import { usePageVisibility } from 'react-page-visibility';
import ProductManagement from "./pages/admin/ProductManagement";
import UserManagement from "./pages/admin/UserManagement";

function App() {
    const [itemsInCart, setItemsInCart] = useState<ProductInstance[]>(store.get("itemsInCart") || []);
    const isVisible = usePageVisibility();

    const addToCart = (item: ProductInstance) => {
        itemsInCart.push(item);
        store.set("itemsInCart", itemsInCart);
    }

    const removeFromCart = (index: number) => {
        itemsInCart.splice(index, 1);
        store.set("itemsInCart", itemsInCart);
    }

    useEffect(() => {
        if(isVisible) {
            setItemsInCart(store.get("itemsInCart") || [])
        }
    }, [itemsInCart]);

    return (
        <Router>
            <div className="App">
                <NavBar isLoggedIn={true} itemsInCart={itemsInCart}/>
                <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route path="/forms" element={<FormPage />} />
                    <Route path="/cart" element={<Cart itemsInCart={itemsInCart}/>} />
                    <Route path="/orders" element={<Orders />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/category/:slug" element={<Category />} />
                    <Route path="/product/:id" element={<Product addToCart={addToCart} />} />
                    <Route path="*" element={<NotFound />} />

                    {/* Admin Routes */}
                    <Route path="/admin/users" element={<UserManagement/>}/>
                    <Route path="/admin/products" element={<ProductManagement />}/>
                </Routes>
            </div>
        </Router>
    );
}

export default App;
