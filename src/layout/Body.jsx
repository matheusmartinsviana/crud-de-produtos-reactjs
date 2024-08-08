import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductsView from "../components/ProductsView";

const Body = (() => {
    return (
        <>
            <div style={{ display: "flex", width: "100%", height: "100vh" }}>
                <Navbar />
                <div>
                    <ProductsView />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
})

export default Body