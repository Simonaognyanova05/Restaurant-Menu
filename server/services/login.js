const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const dbUrl = 'mongodb+srv://simonaognanova05:XldhNfzBsuGF2e8i@cluster0.k5zqm6a.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}

async function login(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const admin = await Admin.findOne({ username });
        if (!admin) {
            return res.status(400).json();
        }
        const comparedPass = await bcrypt.compare(password, admin.hashedPass);

        if (!comparedPass) {
            return res.status(401).json();
        };

        return res.status(200).json({ _id: admin._id, username: admin.username });
    } catch (e) {
        throw e;
    }
}

module.exports = { login };