import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <div className="menu-footer">
            <p>Created By Smart Point. <Link to="/admin/login">Администратор</Link>.</p>
        </div>
    );
}