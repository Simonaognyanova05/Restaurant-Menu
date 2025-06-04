import { Link } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

export default function Header() {
    const { admin } = useAuth();

    const loggedAdmin = (
        <>
            <Link to="/admin/create">Създаване на ястие</Link>
            <Link to="/admin/logout">Изход</Link>
        </>
    );
    return (
        <>
            <div className="navbar">
                <Link to="/Предястия">Предястия</Link>
                <Link to="/Основни">Основни</Link>
                <Link to="/Десерти">Десерти</Link>
                <Link to="/Салати">Салати</Link>
                <Link to="/Напитки">Напитки</Link>
                {
                    admin.email ? loggedAdmin : ''
                }
            </div>
        </>
    );
}