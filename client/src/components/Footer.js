import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="menu-footer">
            <p>Come visit us for an unforgettable dining experience! <Link to="/admin/login">Администратор</Link>.</p>
        </div>
    );
}