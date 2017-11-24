const {estados} = require('../modelos')

module.exports = {
  crearEstado (req, res) {
    try {
      estados.create(req.body)
        .then(_estado => {
          res.send(_estado.toJSON())
        })
    } catch (error) {
      console.error(error)
    }
  },
  cargarLista (req, res) {
    try {
      estados.findAll({
        order: [['estado']]
      })
        .then(_estados => {
          res.send(_estados)
        })
    } catch (error) {
      console.error(error)
    }
  }
}
