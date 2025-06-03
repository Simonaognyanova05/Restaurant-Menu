import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="navbar">
                <Link to="/Предястия">Предястия</Link>
                <Link to="/Основни">Основни</Link>
                <Link to="/Десерти">Десерти</Link>
                <Link to="/Салати">Салати</Link>
                <Link to="/Напитки">Напитки</Link>
            </div>
        </>
    );
}