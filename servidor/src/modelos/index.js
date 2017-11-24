const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const config = require('../config/config')
const bd = {}

const conexion = new Sequelize(
  config.mariaDB.baseDatos,
  config.mariaDB.usuario,
  config.mariaDB.contrasena,
  config.mariaDB.opciones
)

fs
  .readdirSync(__dirname)
  .filter(archivo => archivo !== 'index.js')
  .forEach(modelos => {
    const modelo = conexion.import(path.join(__dirname, modelos))
    bd[modelo.name] = modelo
  })

Object.keys(bd).forEach(Modelo => {
  if ('associate' in bd[Modelo]) {
    bd[Modelo].associate(bd)
  }
})

bd.BaseDatos = conexion
bd.Sequelize = Sequelize

module.exports = bd
