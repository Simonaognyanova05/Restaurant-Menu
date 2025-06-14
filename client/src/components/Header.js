import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Header() {
    const { admin } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const loggedAdmin = (
        <>
            <Link to="/admin/create">Създаване на ястие</Link>
            <Link to="/admin/logout">Изход</Link>
        </>
    );

    return (
        <>
            <div className="navbar">
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                    <Link to="/Предястия">Предястия</Link>
                    <Link to="/Основни">Основни</Link>
                    <Link to="/Десерти">Десерти</Link>
                    <Link to="/Салати">Салати</Link>
                    <Link to="/Напитки">Напитки</Link>
                    {admin.email ? loggedAdmin : ""}
                </div>
            </div>
        </>
    );
}
