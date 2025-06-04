export async function editDish(name, description, category, price, dishId) {
    await fetch(`http://localhost:2000/edit/${dishId}`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, description, category, price })
    });
}