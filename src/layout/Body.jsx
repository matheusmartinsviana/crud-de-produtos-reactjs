import { Outlet, useNavigate } from "react-router-dom"
import Navbar from "./Navbar"
import Footer from "./Footer"
import styles from "./Styles/Body.module.css"
import ProductsView from "../components/ProductsView";

const Body = (() => {
    const navigate = useNavigate()

    const handleLogout = (() => {
        localStorage.removeItem("token")
        navigate("/login")
    })
    return (
        <>
            <div className={styles.bodyContent}>
                <Navbar />
                <div className={styles.outletContainer}>
                    <ProductsView />
                    <Outlet />
                </div>
                <div className={styles.LogoutButton}>
                    <button onClick={handleLogout}>Logout</button>
                </div>
            </div>
            <Footer />
        </>
    );
})

export default Body