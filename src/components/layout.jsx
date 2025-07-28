import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function Layout() {
    return (
        <>
            <Navbar />
            <main className="container mt-4">
                <Outlet />
            </main>
            <aside>
                sidebar
            </aside>
        </>
    );
}
