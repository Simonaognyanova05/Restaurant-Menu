import { useNavigate } from "react-router-dom";
import { createDish } from "../services/createDish";

export default function Create() {
    const navigate = useNavigate();

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, description, category, price } = Object.fromEntries(formData);

        createDish(name, description, category, price)
            .then((id) => {
                console.log("Dish created with ID:", id);
                navigate('/');
            })
            .catch((error) => {
                console.error("Error creating dish:", error);
            });
    }

    return (
        <div className="admin-form">
            <h2>Създаване на ястие</h2>
            <form onSubmit={createHandler}>
                <label htmlFor="dish-name">Име на ястието</label>
                <input type="text" id="dish-name" name="name" placeholder="Въведете име" />

                <label htmlFor="dish-description">Описание на ястието</label>
                <textarea id="dish-description" name="description" placeholder="Въведете описание"></textarea>

                <label htmlFor="dish-category">Категория</label>
                <select id="dish-category" name="category">
                    <option value="Предястия">Предястия</option>
                    <option value="Основни">Основни</option>
                    <option value="Десерти">Десерти</option>
                    <option value="Салати">Салати</option>
                    <option value="Напитки">Напитки</option>
                </select>

                <label htmlFor="dish-price">Цена</label>
                <input type="text" id="dish-price" name="price" placeholder="Въведете цена" />

                <button type="submit">Създаване</button>
            </form>
        </div>
    );
}
