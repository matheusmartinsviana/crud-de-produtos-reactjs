import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Body from "../layout/Body";
import Register from "../pages/Register";
import Login from "../pages/Login";
import Forms from "../components/Forms";
import ProductsView from "../components/ProductsView";

const AppRoutes = (() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />}>
                    <Route path="/" element={<Home />} />
                    <Route path="/add" element={<Forms action="add" />} />
                    <Route path="/delete" element={<Forms action="delete" />} />
                    <Route path="/update" element={<Forms action="update" />} />
                </Route>
                <Route path="/register" element={<Register />} />
                <Route path="/login" element={<Login />} />
            </Routes>
        </BrowserRouter>
    );
})

export default AppRoutes