module.exports = (sequelize, DataTypes) => {
  const Paquetes_Turisticos = sequelize.define(
    "Paquetes_Turisticos",
    {
      IDPaquete: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      NombrePaquete: {
        type: DataTypes.STRING(30),
        allowNull: false,
      },
      DescripcionPaquete: {
        type: DataTypes.STRING(80),
        allowNull: false,
      },
      PrecioPaquete: {
        type: DataTypes.DOUBLE,
        allowNull: false,
      },
      FechaInicio: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      FechaFin: {
        type: DataTypes.DATE,
        allowNull: false,
      },
      idHabitacionf: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      IDCatPaquetef: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
      idCiudadf: {
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
  Paquetes_Turisticos.associate = (models) => {
    Paquetes_Turisticos.belongsTo(models.Habitaciones, {
      foreignKey: "idHabitacionf",
    }),
      {
        onDelete: "cascade",
      },
      Paquetes_Turisticos.belongsTo(models.Categorias, {
        foreignKey: "IDCatPaquetef",
      }),
      {
        onDelete: "cascade",
      };
    Paquetes_Turisticos.belongsTo(models.Ciudades, {
      foreignKey: "idCiudadf",
    }),
      {
        onDelete: "cascade",
      };
    Paquetes_Turisticos.hasMany(models.Reservas, {
      foreignKey: "IDPaquetefRv",
    }),
      {
        onDelete: "cascade",
      };
    Paquetes_Turisticos.hasMany(models.Resenias, {
      foreignKey: "IDPaquetefRn",
    }),
      {
        onDelete: "cascade",
      };
    Paquetes_Turisticos.hasMany(models.Fotos_Paquetes, {
      foreignKey: "IDPaquetefFP",
    }),
      {
        onDelete: "cascade",
      };
      Paquetes_Turisticos.hasMany(models.Calificaciones, {
        foreignKey: "idPaquetep",
      }),
        {
          onDelete: "cascade",
        };
  };

  return Paquetes_Turisticos;
};
