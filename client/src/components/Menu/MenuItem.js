import { Link } from "react-router-dom";

const formatPrice = (value) => typeof value === 'number' && Number.isFinite(value)
    ? value.toLocaleString('bg-BG', { minimumFractionDigits: 2, maximumFractionDigits: 2 }) : '—';

export default function MenuItem({ dish, admin }) {
    return (
        <article className="menu-item">
            <div className="menu-item-copy">
                <h3 className="menu-item-name">{dish.name}</h3>
                {dish.description && <p className="menu-item-description">{dish.description}</p>}
            </div>
            <div className="menu-item-price"><span>{formatPrice(dish.priceEuro)} <small>€</small></span><span className="secondary-price">{formatPrice(dish.priceLv)} лв.</span></div>
            {admin.email && <div className="menu-item-actions">
                <Link className="edit-button" to={`/edit/${dish._id || dish.id}`}>Редактиране</Link>
                <Link className="delete-button" to={`/delete/${dish._id || dish.id}`}>Изтриване</Link>
            </div>}
        </article>
    );
}
