const mongoose = require('mongoose'); 
const bcrypt = require('bcrypt');
const Admin = require('./models/Admin');

const dbUrl = 'mongodb+srv://simonaognanova05:XldhNfzBsuGF2e8i@cluster0.k5zqm6a.mongodb.net/';

const connectionParams = {
    useUnifiedTopology: true,
    useNewUrlParser: true
}
async function adminRegister(req, res) {
    await mongoose.connect(dbUrl, connectionParams);

    const { username, password } = req.body;

    try {
        const hashedPass = await bcrypt.hash(password, 10);
        const admin = new Admin({ username, hashedPass });

        await admin.save();

        return res.status(200).json({ _id: admin._id, username: admin.username });
    } catch (e) {
        throw e;
    }
};

module.exports = { adminRegister };