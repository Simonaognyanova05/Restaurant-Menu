export async function getDishes(category) {
    let dish = await fetch(`http://localhost:2000/dish/${category}`);

    return await dish.json();
}