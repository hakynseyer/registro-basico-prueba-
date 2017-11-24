module.exports = (Sequelize, DataTypes) => {
  const municipios = Sequelize.define('municipios', {
    municipios: {
      type: DataTypes.JSON,
      allowNull: false
    }
  })

  municipios.associate = function (modelo) {
    municipios.belongsTo(modelo.estados, {
      as: 'Estado',
      foreignKey: {name: 'estado', allowNull: false},
      onDelete: 'RESTRICT'
    })
  }

  return municipios
}
