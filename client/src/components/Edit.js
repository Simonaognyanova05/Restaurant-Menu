import { useNavigate, useParams } from "react-router-dom";
import { editDish } from "../services/editDish";

export default function Edit() {
    const navigate = useNavigate();
    const { dishId } = useParams();

    const editHandler = (e) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget);
        const { name, description, category, priceLv, priceEuro } = Object.fromEntries(formData);

        editDish(name, description, category, priceLv, priceEuro, dishId)
            .then(() => {
                navigate(`/${category}`);
            })
            .catch((error) => {
                console.error("Error editing dish:", error);
            });
    }

    return (
        <div className="admin-form">
            <h2>Редактиране на ястие</h2>

            <form onSubmit={editHandler}>
                <label htmlFor="dish-name">Име на ястието</label>
                <input type="text" id="dish-name" name="name" placeholder="Въведете име" />

                <label htmlFor="dish-description">Описание на ястието</label>
                <textarea id="dish-description" name="description" placeholder="Въведете описание"></textarea>

                <label htmlFor="dish-category">Категория</label>
                <select id="dish-category" name="category">
                    <option value="Закуски">Закуски</option>
                    <option value="Топли-предястия">Топли предястия</option>
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
                </select>

                <label htmlFor="dish-price">Цена в лв.</label>
                <input type="text" id="dish-price" name="priceLv" placeholder="Въведете цена в лв." />

                <label htmlFor="dish-price">Цена в евро.</label>
                <input type="text" id="dish-price" name="priceEuro" placeholder="Въведете цена в евро." />

                <button type="submit">Запази</button>
            </form>
        </div>
    );
}
