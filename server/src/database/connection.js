// const { Client } = require('pg');

// const client = new Client({
//     host: 'localhost',
//     port: 5432,
//     user: 'postgres',
//     password: 'admin',
//     database: 'postgres',
// });

// client.connect()
//     .then(() => {
//         console.log("Database Connected!");
//     })
//     .catch((err) => {
//         console.error("Error connecting to the database:", err);
//     });

// module.exports = client


const mongoose = require("mongoose");


const db = 'mongodb+srv://reeco:reeco@cluster0.6kqp7oh.mongodb.net/reeco?retryWrites=true&w=majority'

// Connect to MongoDB using the connection string
mongoose.connect(db, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    console.log(`Connection successful`);
}).catch((e) => {
    console.log(`No connection: ${e}`);
});

// mongodb://localhost:27017


