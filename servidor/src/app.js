const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const app = express()

app.use(morgan('combine'))
app.use(bodyParser.json())
app.use(cors())


app.listen(process.env.PORT || 8081)
