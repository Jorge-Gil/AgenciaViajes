module.exports = (sequelize, DataTypes) => {
  const Tipos_Habitaciones = sequelize.define(
    "Tipos_Habitaciones",
    {
      IdTipoHab: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      NombreTipoHab: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },
    },
    {
      sequelize,
      timestamps: true,
      // No crear createdAt
      createdAt: false,

      // No crear updatedAt
      updatedAt: false,
    }
  );
  Tipos_Habitaciones.associate = (models) => {
    Tipos_Habitaciones.hasMany(models.Habitaciones, { foreignKey: 'IdTipoHabf' }), {
      onDelete: "cascade",
    };
  };


  return Tipos_Habitaciones;
};
