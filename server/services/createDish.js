const mongoose = require('mongoose');
const Dish = require('./models/Dish');

const dbUrl = 'mongodb+srv://simonaognanova05:XldhNfzBsuGF2e8i@cluster0.k5zqm6a.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function createDish(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { name, description, category } = req.body;

    try {
        const dish = new Dish({
            name, description, category,
        });

        await dish.save();
        return res.status(200).json();
    } catch (e) {
        throw e;
    }
};

module.exports = { createDish };