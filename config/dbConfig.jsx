const mongoose = require('mongoose');

url = process.env.mongo_url;

mongoose.connect(url);

const connection = mongoose.connection;


connection.on("error", () => {
    console.log("Error connecting to database");
});

connection.on("connected", () => {
    console.log("MongoDB Connection Successful");
});

module.exports = connection;

