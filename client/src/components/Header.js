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
            <Link to="/admin/register">Създаване на потребител</Link>
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
                    <Link to="/Закуски">Закуски</Link>
                    <Link to="/Топли-предястия">Топли предястия</Link>
                    <Link to="/Супи">Супи</Link>
                    <Link to="/Основни">Основни</Link>
                    <Link to="/Скара">Скара</Link>
                    <Link to="/Риба">Риба</Link>
                    <Link to="/Гарнитура">Гарнитура</Link>
                    <Link to="/Салати">Салати</Link>
                    <Link to="/Хляб">Хляб</Link>
                    <Link to="/Десерти">Десерти</Link>
                    <Link to="/Мезета">Мезета</Link>
                    <Link to="/Ядки">Ядки</Link>
                    <Link to="/Напитки">Напитки</Link>
                    <Link to="/Безалкохолни">Безалкохолни</Link>

                    {admin.email ? loggedAdmin : ""}
                </div>
            </div>
        </>
    );
}