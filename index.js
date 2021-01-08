const express = require('express');
const database = require('./src/database/connection')
const router = require('./src/routes/routes')
var cors = require('cors')
const app = express();

app.use(cors())
app.use(express.json())
app.use(router)

app.listen(process.env.port||4001, () => {
    console.log("Aplicação funcionando beleza!")
})