import React from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from "../Components/Home";
import Lists from "../Components/Lists";
import Signin from "../Components/Signin";
import Signup from "../Components/Signup";
import ProductPage from "../Components/ProductPage";
import Cart from "../Components/Cart";
import Payment from "../Components/Payment";
import Profile from "../Components/Profile";
import Orders from "../Components/Orders";
import Error from "../Components/Error";

const AppRouter = (user) => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={user ? <Navigate to="/home" /> : <Signin />} />
                <Route path="/signup" element={user ? <Navigate to="/home" /> : <Signup />} />
                {user && (
                    <>
                        <Route path="/home" element={<Home />} />
                        <Route path="/wishlists" element={<Lists />} />
                        <Route path="/cart" element={<Cart />} />
                        <Route path="/payment" element={<Payment />} />
                        <Route path="/orders" element={<Orders />} />
                        <Route path="/account" element={<Profile />} />
                        <Route path="/product/:id" element={<ProductPage />} />
                        <Route path="*" element={<Error />} />
                    </>
                )}
            </Routes>
        </BrowserRouter>
    )
}

export default AppRouter
