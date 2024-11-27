const express = require('express');
const { connection } = require('./db/dbconnection');
const app = express();
const port = 5000;
const cors = require('cors')
app.use(express.json());
app.use(
    cors({
        origin:"http://localhost:3000",
        credentials:true
    })
)


connection();
app.listen(port,()=> {
    console.log(`Server is running on the Port ${port}`)
})