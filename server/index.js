const express = require('express');
const cors = require('cors');
const { adminRegister } = require('./services/adminRegister');
const { login } = require('./services/login');

const app = express();

app.use(express.json());
app.use(cors());

app.post('/admin/register', async (req, res) => {
    await adminRegister(req, res);
});

app.post('/admin/login', async (req, res) => {
    await login(req, res);
});
app.listen(2000);
