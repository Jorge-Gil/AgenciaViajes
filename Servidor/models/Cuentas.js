module.exports = (sequelize, DataTypes) => {
  const Cuentas = sequelize.define(
    "Cuentas",
    {
      IdCuenta: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },

      NombreUsuario: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      Contrasenia: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      Nombre1Cuenta: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      Nombre2Cuenta: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },

      Apellido1Cuenta: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      Apellido2Cuenta: {
        type: DataTypes.STRING(20),
        allowNull: true,
      },

      Genero: {
        type: DataTypes.STRING(15),
        allowNull: false,
      },

      Cedula: {
        type: DataTypes.STRING(20),
        allowNull: false,
      },

      DireccionCuenta: {
        type: DataTypes.STRING(40),
        allowNull: false,
      },

      TelefonoCuenta: {
        type: DataTypes.STRING(12),
        allowNull: false,
      },

      CelularCuenta: {
        type: DataTypes.STRING(10),
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
  Cuentas.associate = (models) => {
    Cuentas.hasMany(models.Reservas, { foreignKey: "IdCuentafRv" }),
      {
        onDelete: "cascade",
      };
    Cuentas.hasMany(models.Resenias, { foreignKey: "IdCuentafRn" }),
      {
        onDelete: "cascade",
      };
    Cuentas.hasMany(models.Calificaciones, { foreignKey: "idCuentap" }),
      {
        onDelete: "cascade",
      };
  };

  return Cuentas;
};
