const mongoose = require('mongoose');
const Dish = require('./models/Dish');

const dbUrl = 'mongodb+srv://simonaognanova05:XldhNfzBsuGF2e8i@cluster0.k5zqm6a.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function getDishes(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { category } = req.params;

    try {
        const dishes = await Dish.find({ category });
        if (!dishes) {
            return res.status(400).json();
        }

        return dishes;
    } catch (e) {
        throw e;
    }
};

module.exports = { getDishes };