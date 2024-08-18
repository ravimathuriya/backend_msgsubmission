const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/messageapp"

const connectToMongo = () => {
    mongoose.connect(url)
    .then(() => console.log('mongoose Connected!'));
}

module.exports = connectToMongo