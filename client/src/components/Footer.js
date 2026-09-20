import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <footer className="menu-footer">
            <div className="footer-top"><Link className="footer-brand" to="/">Под старата круша</Link><p>Традиционна българска кухня · Копривщица</p></div>
            <div className="footer-bottom">
                <p>Цените са в евро и лева, за един брой.<br /><span lang="en">Prices are in EUR and BGN, per item.</span></p>
                <p className="footer-credits">Created by Smart Point <span aria-hidden="true">/</span> <Link to="/admin/login">Администратор</Link></p>
            </div>
        </footer>
    );
}
