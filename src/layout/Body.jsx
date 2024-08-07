import { Outlet } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"

const Body = (() => {
    return (
        <>
            <div style={{ display: "flex", width: "100%", height: "100vh"}}>
                <Navbar />
                <Outlet />
            </div>
            <Footer />
        </>
    );
})

export default Body