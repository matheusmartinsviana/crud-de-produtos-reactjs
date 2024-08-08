import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductsView from "../components/ProductsView";
import { useEffect } from "react";

const Body = (() => {
    const navigate = useNavigate()

    useEffect(() => {
        if (localStorage.getItem("token")) {
            navigate("/")
        } else {
            navigate("/login")
        }
    })

    return (
        <>
            <div style={{ display: "flex", width: "100%", minHeight: "100%" }}>
                <Navbar />
                <div style={{ padding: "40px", height: "100vh" }}>
                    <ProductsView />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
})

export default Body