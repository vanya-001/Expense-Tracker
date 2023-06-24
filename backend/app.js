const express = require('express');
const cors = require('cors');
const { Database } = require('./db/db');
const {readdirSync} = require('fs');
const app = express();


require('dotenv').config()

// middLewares 
app.use(express.json())
app.use(cors())

// routes
readdirSync('./routes').map((R1) => app.use('/api/v1', require('./routes/' + R1)));
// app.get('/', (req, res) => {
//     res.send("Hello World");
// })

const PORT = process.env.PORT
const server =() => {
    Database()
    app.listen(PORT, () => {
        console.log("listening to port: ", PORT);
    })
}

server()