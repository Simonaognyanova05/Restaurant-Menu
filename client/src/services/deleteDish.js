export async function deleteDish(dishId) {
    await fetch(`http://localhost:2000/delete/${dishId}`, {
        method: 'DELETE',
        headers: {
            'content-type': 'application/json'
        }
    })
}