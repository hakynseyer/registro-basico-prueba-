const express = require('express')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const cors = require('cors')

const config = require('./config/config')
const {BaseDatos} = require('./modelos')

const app = express()

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

BaseDatos.sync().then(() => {
  app.listen(config.puertoServidor)
  console.log(`Servidor corriendo en el puerto ${config.puertoServidor}`)
})
