module.exports = (sequelize, DataTypes) => {
  const Habitaciones = sequelize.define(
    "Habitaciones",
    {
      IdHabitacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      NumeroHabitacion: {
        type: DataTypes.STRING(3),
        allowNull: false,
      },
      CantidadCamas: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
      },
      CantidadBanios: {
        type: DataTypes.INTEGER(3),
        allowNull: false,
      },
      Television: {
        type: DataTypes.STRING(3),
        allowNull: false,
      },
      idHotelf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IdTipoHabf: {
        type: DataTypes.INTEGER,
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
  Habitaciones.associate = (models) => {
    Habitaciones.belongsTo(models.Hoteles, { foreignKey: "idHotelf" }),
      {
        onDelete: "cascade",
      },
      Habitaciones.belongsTo(models.Tipos_Habitaciones, {
        foreignKey: "IdTipoHabf",
      }),
      {
        onDelete: "cascade",
      },
      Habitaciones.hasMany(models.Paquetes_Turisticos, {
        foreignKey: "idHabitacionf",
      }),
      {
        onDelete: "cascade",
      };
  };

  return Habitaciones;
};
