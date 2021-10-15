module.exports = (sequelize, DataTypes) => {
  const Calificaciones = sequelize.define(
    "Calificaciones",
    {
      IdCalificacion: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      NumeroCalificacion: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      idCuentap: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idPaquetep: {
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
  Calificaciones.associate = (models) => {
    Calificaciones.belongsTo(models.Cuentas, { foreignKey: "idCuentap" }),
      {
        onDelete: "cascade",
      },
      Calificaciones.belongsTo(models.Paquetes_Turisticos, {
        foreignKey: "idPaquetep",
      }),
      {
        onDelete: "cascade",
      };
  };

  return Calificaciones;
};
