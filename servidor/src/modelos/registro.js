module.exports = (Sequelize, DataTypes) => {
  const registro = Sequelize.define('registro', {
    nombre: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    edad: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    municipio: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  })

  registro.associate = function (modelo) {
    registro.belongsTo(modelo.estados, {
      as: 'Estado',
      foreignKey: {name: 'estado', allowNull: false},
      onDelete: 'RESTRICT'
    })
  }

  return registro
}
