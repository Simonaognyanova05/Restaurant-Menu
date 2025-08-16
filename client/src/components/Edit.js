import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { editDish } from "../services/editDish";

// нова функция за взимане на данните на конкретно ястие
import { getDishById } from "../services/getDishById";

export default function Edit() {
    const navigate = useNavigate();
    const { dishId } = useParams();

    // локален state за формата
    const [formValues, setFormValues] = useState({
        name: "",
        description: "",
        category: "",
        priceLv: "",
        priceEuro: ""
    });

    // зареждане на ястието при отваряне
    useEffect(() => {
        getDishById(dishId)
            .then(dish => {
                setFormValues({
                    name: dish.name,
                    description: dish.description,
                    category: dish.category,
                    priceLv: dish.priceLv,
                    priceEuro: dish.priceEuro
                });
            })
            .catch(err => console.error("Error fetching dish:", err));
    }, [dishId]);

    const changeHandler = (e) => {
        setFormValues(state => ({
            ...state,
            [e.target.name]: e.target.value
        }));
    };

    const editHandler = (e) => {
        e.preventDefault();

        const { name, description, category, priceLv, priceEuro } = formValues;

        editDish(name, description, category, priceLv, priceEuro, dishId)
            .then(() => navigate(`/${category}`))
            .catch((error) => {
                console.error("Error editing dish:", error);
            });
    };

    return (
        <div className="admin-form">
            <h2>Редактиране на ястие</h2>

            <form onSubmit={editHandler}>
                <label htmlFor="dish-name">Име на ястието</label>
                <input
                    type="text"
                    id="dish-name"
                    name="name"
                    value={formValues.name}
                    onChange={changeHandler}
                />

                <label htmlFor="dish-description">Описание на ястието</label>
                <textarea
                    id="dish-description"
                    name="description"
                    value={formValues.description}
                    onChange={changeHandler}
                ></textarea>

                <label htmlFor="dish-category">Категория</label>
                <select
                    id="dish-category"
                    name="category"
                    value={formValues.category}
                    onChange={changeHandler}
                >
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

                <label htmlFor="dish-price-lv">Цена в лв.</label>
                <input
                    type="text"
                    id="dish-price-lv"
                    name="priceLv"
                    value={formValues.priceLv}
                    onChange={changeHandler}
                />

                <label htmlFor="dish-price-euro">Цена в евро</label>
                <input
                    type="text"
                    id="dish-price-euro"
                    name="priceEuro"
                    value={formValues.priceEuro}
                    onChange={changeHandler}
                />

                <button type="submit">Запази</button>
            </form>
        </div>
    );
}
