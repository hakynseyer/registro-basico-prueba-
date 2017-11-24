const estado = require('./controlador/estado')
const municipios = require('./controlador/municipios')
const registro = require('./controlador/registro')

module.exports = (app) => {
  app.post('/estados', estado.crearEstado)

  app.get('/estados/lista', estado.cargarLista)

  app.post('/municipios', municipios.crearMunicipio)

  app.post('/municipios/lista', municipios.cargarLista)

  app.post('/registro', registro.crearRegistro)

  app.get('/registro/lista', registro.cargarLista)
}
