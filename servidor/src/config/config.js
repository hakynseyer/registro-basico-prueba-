module.exports = {
  puertoCliente: 'http://localhost:8080',
  puertoServidor: process.env.PORT || 8081,
  mariaDB: {
    baseDatos: 'formularios', // Antes de Arrancarlo, crea la base de datos llamada formularios en Mysql o Mariadb, sin tablas ni nada extra, tan solo crea la base de datos
    usuario: 'root',
    contrasena: '',
    opciones: {
      host: process.env.HOST || '127.0.0.1',
      dialect: 'mysql'
    }
  }
}
