import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Body from "../layout/Body";
import Register from "../pages/Register";
import Login from "../pages/Login";

const AppRoutes = (() => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Body />}>
                    <Route path="/" element={<Home />}/>
                </Route>
                <Route path="/register" element={<Register />}/>
                <Route path="/login" element={<Login />}/>
            </Routes>
        </BrowserRouter>
    );
})

export default AppRoutes