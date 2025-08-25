import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import { getDishes } from "../../services/getDishes";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [dishes, setDishes] = useState([]);
    const { category } = useParams();
    const { admin } = useAuth();

    useEffect(() => {
        getDishes(category)
            .then((res) => {
                if (res && Array.isArray(res)) {
                    const sorted = [...res].sort((a, b) => {
                        // ако и двете имат createdAt -> сортираме по дата
                        if (a.createdAt && b.createdAt) {
                            return new Date(a.createdAt) - new Date(b.createdAt);
                        }
                        // ако само едното има -> то е по-ново
                        if (a.createdAt && !b.createdAt) return -1;
                        if (!a.createdAt && b.createdAt) return 1;

                        // fallback: сортиране по _id (Mongo _id съдържа timestamp)
                        return a._id.localeCompare(b._id);
                    });

                    setDishes(sorted);
                } else {
                    setDishes([]);
                }
            })
            .catch((err) => {
                console.error("Error fetching dishes:", err);
                setDishes([]);
            });
    }, [category]);

    return (
        <div className="menu-container">
            <div className="menu-header">
                <Link to="/">
                    <h1>Под старата круша</h1>
                </Link>
                <p>Традиционни ястия, приготвени с любов.</p>
            </div>

            <div className="menu-section" id={category}>
                {dishes.length > 0 ? (
                    <>
                        <h2>{dishes[0]?.category}</h2>
                        {dishes.map((x) => (
                            <MenuItem key={x._id} dish={x} admin={admin} />
                        ))}
                    </>
                ) : (
                    <p>Няма налични ястия в категорията "{category}".</p>
                )}
            </div>
        </div>
    );
}
