import { useNavigate } from "react-router-dom";
import { createDish } from "../services/createDish";

export default function Create() {
    const navigate = useNavigate();

    const createHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, description, category, priceLv, priceEuro } = Object.fromEntries(formData);

        createDish(name, description, category, priceLv, priceEuro)
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
                    <option value="Закуски">Закуски</option>
                    <option value="Топли-предястия">Топли-предястия</option>
                    <option value="Супи">Супи</option>
                    <option value="Основни">Основни</option>
                    <option value="Скара">Скара</option>
                    <option value="Риба">Риба</option>
                    <option value="Гарнитура">Гарнитура</option>
                    <option value="Салати">Салати</option>
                    <option value="Хляб">Хляб</option>
                    <option value="Десерти">Десерти</option>
                    <option value="Мезета">Мезета</option>
                    <option value="Ядки">Ядки</option>
                    <option value="Напитки">Напитки</option>
                    <option value="Безалкохолни">Безалкохолни</option>

                </select>

                <label htmlFor="dish-price">Цена в лв.</label>
                <input type="text" id="dish-price" name="priceLv" placeholder="Въведете цена в лв." />

                <label htmlFor="dish-price">Цена в евро.</label>
                <input type="text" id="dish-price" name="priceEuro" placeholder="Въведете цена в евро." />


                <button type="submit">Създаване</button>
            </form>
        </div>
    );
}
