import { useEffect, useState } from "react";
import { useParams } from 'react-router-dom';
import { getDishes } from "../../services/getDishes";
import MenuItem from "./MenuItem";

export default function Menu() {
    const [dishes, setDishes] = useState([]);
    const { category } = useParams();

    useEffect(() => {
        getDishes(category)
            .then(res => {
                setDishes(res || []);
            })
            .catch(err => {
                console.error("Error fetching dishes:", err);
                setDishes([]);
            });
    }, [category]);

    return (
        <div className="menu-container">
            <div className="menu-header">
                <h1>Gourmet Bistro</h1>
                <p>Деликатесни ястия, приготвени с любов</p>
            </div>

            <div className="menu-section" id={category}>
                {dishes.length > 0 ? (
                    <>
                        <h2>{dishes[0]?.category}</h2>
                        {dishes.map((x) => (
                            <MenuItem key={x._id} dish={x} />
                        ))}
                    </>
                ) : (
                    <p>Няма налични ястия в категорията "{category}".</p>
                )}
            </div>
        </div>
    );
}
