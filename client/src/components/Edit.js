import { useNavigate, useParams } from "react-router-dom";
import { editDish } from "../services/editDish";

export default function Edit() {
    const navigate = useNavigate();
    const {dishId} = useParams();

    const editHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, description, category, price } = Object.fromEntries(formData);

        editDish(name, description, category, price, dishId)
            .then(() => {
                navigate(`/${category}`);
            })
    }
    return (
        <div class="admin-form">
            <h2>Създаване на ястие</h2>

            <form onSubmit={editHandler}>
                <label for="dish-name">Име на ястието</label>
                <input type="text" id="dish-name" name="name" placeholder="Въведете име" />

                <label for="dish-description">Описание на ястието</label>
                <textarea id="dish-description" name="description" placeholder="Въведете описание"></textarea>

                <label for="dish-category">Категория</label>
                <select id="dish-category" name="category">
                    <option value="Предястия">Предястия</option>
                    <option value="Основни">Основни</option>
                    <option value="Десерти">Десерти</option>
                    <option value="Салати">Салати</option>
                    <option value="Напитки">Напитки</option>
                </select>

                <label for="dish-price">Цена</label>
                <input type="text" id="dish-price" name="price" placeholder="Въведете цена" />

                <button type="submit">Създаване</button>
            </form>
        </div>
    );
}