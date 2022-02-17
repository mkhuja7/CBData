const express = require('express')
// const dotenv = require('dotenv')
const mongoose = require('mongoose')
const cors = require('cors')
const routeDate = require('./route/routeDate')

const app = express()


// app.use(dotenv('dev'))
app.use(express.json())
app.use(cors())
app.use(express.urlencoded({ extended: true }))
app.use(express.static('uploads'))


const portDB = "mongodb://localhost:27017/stf_data"

mongoose.connect(portDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: true,
    useCreateIndex: true
}).then(() => console.log('Conneted DB***********')).catch((err) => console.log("ERR******" + err))


app.use('/api/v1/datastaff', routeDate)


const port = 8000;

app.listen(port, () => {
    console.log("Data works");
})