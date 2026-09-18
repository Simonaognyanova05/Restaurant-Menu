import { Link, NavLink, useLocation } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";
import { useEffect, useState } from "react";
import { categories } from "../config/categories";

export default function Header() {
    const { admin } = useAuth();
    const [menuOpen, setMenuOpen] = useState(false);
    const { pathname } = useLocation();
    useEffect(() => { setMenuOpen(false); }, [pathname]);
    return (
        <header className="site-header">
            <a className="skip-link" href="#main-content">Към съдържанието</a>
            <div className="masthead">
                <span className="masthead-note">Традиционна българска кухня</span>
                <Link className="wordmark" to="/" aria-label="Под старата круша — начало">
                    <span>Под старата круша</span><small>Копривщица</small>
                </Link>
                <button className="menu-toggle" aria-expanded={menuOpen} aria-controls="category-navigation" onClick={() => setMenuOpen(!menuOpen)}>
                    {menuOpen ? 'Затвори' : 'Меню'} <span aria-hidden="true">{menuOpen ? '×' : '☰'}</span>
                </button>
                <Link className="masthead-link" to="/#our-menu">Разгледайте менюто <span aria-hidden="true">↗</span></Link>
            </div>
            <nav id="category-navigation" className={`category-navigation ${menuOpen ? 'is-open' : ''}`} aria-label="Категории на менюто"
                onKeyDown={(event) => { if (event.key === 'Escape') { setMenuOpen(false); document.querySelector('.menu-toggle')?.focus(); } }}>
                <div className="menu-links">{categories.map(({ label, path }) => <NavLink key={path} to={`/${path}`}>{label}</NavLink>)}</div>
                {admin.email && <div className="admin-navigation">
                    <Link to="/admin/create">Създаване на ястие</Link>
                    <Link to="/admin/register">Създаване на потребител</Link>
                    <Link to="/admin/logout">Изход</Link>
                </div>}
            </nav>
        </header>
    );
}
