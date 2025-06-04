const express = require('express');
const cors = require('cors');
const { adminRegister } = require('./services/adminRegister');
const { login } = require('./services/login');
const { createDish } = require('./services/createDish');
const { getDishes } = require('./services/getDishes');
const { deleteDish } = require('./services/deleteDish');
const { editDish } = require('./services/editDish');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/admin/register', async (req, res) => {
    await adminRegister(req, res);
});

app.post('/admin/login', async (req, res) => {
    await login(req, res);
});

app.post('/dish/create', async (req, res) => {
    await createDish(req, res);
});

app.get('/dish/:category', async (req, res) => {
    let result = await getDishes(req, res);
    res.json(result);
});

app.delete('/delete/:dishId', async (req, res) => {
    await deleteDish(req, res);
});

app.put('/edit/:dishId', async (req, res) => {
    await editDish(req, res);
})
app.listen(2000);
