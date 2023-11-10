const mongoose = require("mongoose");
require('dotenv').config()

async function dbConnect() {
    // use mongoose to connect this app
    mongoose.connect(process.env.DB_URL, {
        // options to ensure that the connection is done properly
        useNewUrlParser:true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log("Successfully connected to MongoDB Atlas");
    })
    .catch((error) => {
        console.log("Unable to connect to MongoDB");
        console.error(error);
    })
}

module.exports = dbConnect;