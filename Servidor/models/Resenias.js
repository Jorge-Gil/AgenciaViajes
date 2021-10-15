const { Sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
  const Resenias = sequelize.define(
    "Resenias",
    {
      IDResenIa: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      ComentarioResenIa: {
        type: DataTypes.STRING(350),
        allowNull: false,
      },
      FechaResenia: {
        type: DataTypes.DATE,
        // defaultValue: literal('CURRENT_TIMESTAMP'),
        allowNull: false,
      },
      EstadoResenia: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
      },
      IDPaquetefRn: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IdCuentafRn: {
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
  Resenias.associate = (models) => {
    Resenias.belongsTo(models.Paquetes_Turisticos, {
      foreignKey: "IDPaquetefRn",
    }),
      {
        onDelete: "cascade",
      },
      Resenias.belongsTo(models.Cuentas, {
        foreignKey: "IdCuentafRn",
      }),
      {
        onDelete: "cascade",
      };
  };

  return Resenias;
};
