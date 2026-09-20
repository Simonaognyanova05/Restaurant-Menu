import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getDishes } from "../../services/getDishes";
import { categories } from "../../config/categories";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [result, setResult] = useState({ category: null, dishes: [], error: false });
    const [attempt, setAttempt] = useState(0);
    const { category } = useParams();
    const { admin } = useAuth();
    const currentIndex = categories.findIndex((item) => item.path === category);
    const label = categories[currentIndex]?.label || category;
    const loading = result.category !== category;

    useEffect(() => {
        let active = true;
        getDishes(category).then((res) => {
            if (!active) return;
            const dishes = Array.isArray(res) ? [...res].sort((a, b) => {
                const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
                const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;
                return dateB - dateA || String(b._id || b.id).localeCompare(String(a._id || a.id));
            }) : [];
            setResult({ category, dishes, error: false });
        }).catch(() => { if (active) setResult({ category, dishes: [], error: true }); });
        return () => { active = false; };
    }, [category, attempt]);

    return (
        <div className="menu-container">
            <Link to="/#our-menu" className="back-link">← Всички категории</Link>
            <div className="menu-header">
                <p className="eyebrow">Под старата круша · Меню</p>
                <h1>{label}</h1>
                <p>Традиционни ястия, приготвени с внимание.</p>
                <span className="menu-ornament" aria-hidden="true">✳</span>
            </div>
            <section className="menu-section" aria-label={label} aria-busy={loading}>
                <div className="menu-column-head"><span>От нашата кухня</span><span>EUR / BGN</span></div>
                {loading ? <p className="menu-state" role="status">Подготвяме менюто…</p>
                    : result.error ? <div className="menu-state" role="alert"><p>Менюто не можа да се зареди. Моля, опитайте отново.</p><button className="text-link" onClick={() => { setResult({ category: null, dishes: [], error: false }); setAttempt(attempt + 1); }}>Опитайте отново ↗</button></div>
                    : result.dishes.length ? result.dishes.map((dish) => <MenuItem key={dish._id || dish.id} dish={dish} admin={admin} />)
                        : <p className="menu-state">В момента няма налични ястия в тази категория.</p>}
            </section>
            <div className="menu-endnote"><p>Цените са за един брой, в евро и лева.</p><Link className="text-link" to={`/${categories[(currentIndex + 1) % categories.length].path}`}>Следваща категория <span aria-hidden="true">→</span></Link></div>
        </div>
    );
}
