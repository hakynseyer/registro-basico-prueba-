module.exports = {
  puertoCliente: 'http://localhost:8080',
  puertoServidor: process.env.PORT || 8081,
  mariaDB: {
    baseDatos: 'formularios',
    usuario: 'root',
    contrasena: 'hakyn',
    opciones: {
      host: process.env.HOST || '127.0.0.1',
      dialect: 'mysql'
    }
  }
}
