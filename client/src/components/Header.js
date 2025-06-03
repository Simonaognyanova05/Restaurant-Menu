import { Link } from "react-router-dom";

export default function Header() {
    return (
        <>
            <div className="navbar">
                <Link to="/appetizers">Предястия</Link>
                <Link to="/main">Основни</Link>
                <Link to="/desserts">Десерти</Link>
                <Link to="/salads">Салати</Link>
                <Link to="/drinks">Напитки</Link>
            </div>
        </>
    );
}