const mongoose = require("mongoose");
const { mongoURI } = require("../config/keys");

module.exports = () => {
    try {
        mongoose.connect(mongoURI, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        });
        console.log("# ********** Database connected successfully ********** #");
    } catch (error) {
        console.log("Database NOT connected. ERROR: ", error);
    }
};