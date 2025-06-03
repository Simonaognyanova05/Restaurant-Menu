export default function Create() {
    return (
        <div class="admin-form">
            <h2>Създаване на ястие</h2>

            <form>
                <label for="dish-name">Име на ястието</label>
                <input type="text" id="dish-name" name="name" placeholder="Въведете име" />

                <label for="dish-description">Описание на ястието</label>
                <textarea id="dish-description" name="description" placeholder="Въведете описание"></textarea>

                <label for="dish-category">Категория</label>
                <select id="dish-category" name="category">
                    <option value="starters">Starters</option>
                    <option value="mains">Main Courses</option>
                    <option value="desserts">Desserts</option>
                    <option value="salads">Salads</option>
                    <option value="drinks">Drinks</option>
                </select>

                <label for="dish-price">Цена</label>
                <input type="text" id="dish-price" name="price" placeholder="Въведете цена" />

                <button type="submit">Създаване</button>
            </form>
        </div>
    );
}