const express = require('express')
const db = require('./server')
const cors = require('cors')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(cors())
app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.get('/users', db.getUsers)

app.get('/', (req, res) => {
    res.send("Hello World")
})

app.listen(port, () => {
    console.log('Server up and running!')
})