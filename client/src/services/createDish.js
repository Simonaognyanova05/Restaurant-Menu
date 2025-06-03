export async function createDish(name, description, category, price) {
    await fetch('http://localhost:2000/dish/create', {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify({ name, description, category, price })
    });
}