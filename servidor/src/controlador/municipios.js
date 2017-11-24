const {municipios} = require('../modelos')

module.exports = {
  crearMunicipio (req, res) {
    try {
      municipios.create(req.body)
        .then(_municipios => {
          res.send(_municipios.toJSON())
        })
    } catch (error) {
      console.error(error)
    }
  },
  cargarLista ({body}, res) {
    try {
      municipios.findOne({
        where: {
          estado: body.estado
        },
        order: [['estado']]
      })
        .then(_municipios => {
          res.send(_municipios)
        })
    } catch (error) {
      console.error(error)
    }
  }
}
