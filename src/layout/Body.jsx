import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import ProductsView from "../components/ProductsView";

const Body = (() => {
    return (
        <>
            <div style={{ display: "flex", width: "100%", minHeight: "100%"}}>
                <Navbar />
                <div style={{ padding: "40px", minHeight: "100vh"}}>
                    <ProductsView />
                    <Outlet />
                </div>
            </div>
            <Footer />
        </>
    );
})

export default Body