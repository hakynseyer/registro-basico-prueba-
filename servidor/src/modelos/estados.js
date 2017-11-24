module.exports = (Sequelize, DataTypes) => {
  const estados = Sequelize.define('estados', {
    estado: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  })

  return estados
}
