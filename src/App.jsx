import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout.jsx";
import Home from "./pages/home.jsx";
import About from "./pages/about.jsx";
import Products from "./pages/products.jsx";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="products" element={<Products />} />
            </Route>
        </Routes>
    );
}
