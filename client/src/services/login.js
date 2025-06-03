export async function login(username, password) {
    let user = await fetch('http://localhost:2000/admin/login', {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
        },
        body: JSON.stringify({username, password})
    });

    return await user.json();
}