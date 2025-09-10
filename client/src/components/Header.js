import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useState } from "react";

export default function Header() {
    const { admin } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const loggedAdmin = (
        <>
            <Link to="/admin/create" onClick={closeMenu}>Създаване на ястие</Link>
            <Link to="/admin/register" onClick={closeMenu}>Създаване на потребител</Link>
            <Link to="/admin/logout" onClick={closeMenu}>Изход</Link>
        </>
    );

    return (
        <div className="navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <div className={`menu-links ${menuOpen ? "open" : ""}`}>
                <Link to="/Закуски" onClick={closeMenu}>Закуски</Link>
                <Link to="/Топли-предястия" onClick={closeMenu}>Топли предястия</Link>
                <Link to="/Супи" onClick={closeMenu}>Супи</Link>
                <Link to="/Основни" onClick={closeMenu}>Основни</Link>
                <Link to="/Скара" onClick={closeMenu}>Скара</Link>
                <Link to="/Риба" onClick={closeMenu}>Риба</Link>
                <Link to="/Гарнитура" onClick={closeMenu}>Гарнитура</Link>
                <Link to="/Салати" onClick={closeMenu}>Салати</Link>
                <Link to="/Хляб" onClick={closeMenu}>Хляб</Link>
                <Link to="/Десерти" onClick={closeMenu}>Десерти</Link>
                <Link to="/Мезета" onClick={closeMenu}>Мезета</Link>
                <Link to="/Ядки" onClick={closeMenu}>Ядки</Link>
                <Link to="/Напитки" onClick={closeMenu}>Напитки</Link>
                <Link to="/Безалкохолни" onClick={closeMenu}>Безалкохолни</Link>

                {admin.email ? loggedAdmin : ""}
            </div>
        </div>
    );
}
