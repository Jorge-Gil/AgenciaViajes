module.exports = (sequelize, DataTypes) => {
  const Reservas = sequelize.define(
    "Reservas",
    {
      IDReserva: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      FechaReserva: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      EstadoReserva: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      IDPaquetefRv: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IdCuentafRv: {
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
  Reservas.associate = (models) => {
    Reservas.belongsTo(models.Paquetes_Turisticos, {
      foreignKey: "IDPaquetefRv",
    }),
      {
        onDelete: "cascade",
      },
      Reservas.belongsTo(models.Cuentas, {
        foreignKey: "IdCuentafRv",
      }),
      {
        onDelete: "cascade",
      };
  };

  return Reservas;
};
