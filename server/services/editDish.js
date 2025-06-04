const mongoose = require('mongoose');
const Dish = require('./models/Dish');

const dbUrl = 'mongodb+srv://simonaognanova05:XldhNfzBsuGF2e8i@cluster0.k5zqm6a.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
};

async function editDish(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { dishId } = req.params;
    const { name, description, category, price } = req.body;

    try {
        await Dish.findByIdAndUpdate({ _id: dishId }, { $set: { name, description, category, price } });

        return res.status(200).json();
    } catch (e) {
        throw e;
    }
}

module.exports = { editDish };