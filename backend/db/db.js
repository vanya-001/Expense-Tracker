const mongoose = require('mongoose');

const Database = async () => {
    try {
        mongoose.set('strictQuery', false);
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Database connected");
    } catch (error) {
        console.log("DB connection error");
    }
}


module.exports = { Database };