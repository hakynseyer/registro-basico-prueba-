const {registro, estados} = require('../modelos')

module.exports = {
  crearRegistro (req, res) {
    console.log(req.body)
    try {
      registro.create(req.body)
        .then(_registro => {
          res.send(_registro.toJSON())
        })
    } catch (error) {
      console.error(error)
    }
  },
  cargarLista ({body}, res) {
    try {
      registro.findAll({
        include: [
          {model: estados, as: 'Estado', attributes: ['id', 'estado'], required: true}
        ],
        order: [['nombre']]
      })
        .then(_registros => {
          res.send(_registros)
        })
    } catch (error) {
      console.error(error)
    }
  }
}
