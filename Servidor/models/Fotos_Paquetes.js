module.exports = (sequelize, DataTypes) => {
  const Fotos_Paquetes = sequelize.define(
    "Fotos_Paquetes",
    {
      IDFotoPaquete: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      FotoPaquete: {
        type: DataTypes.BLOB('long'),
        allowNull: false,
      },

      IDPaquetefFP: {
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
  Fotos_Paquetes.associate = (models) => {
    Fotos_Paquetes.belongsTo(models.Paquetes_Turisticos, {
      foreignKey: "IDPaquetefFP",
    }),
      {
        onDelete: "cascade",
      };
  };

  return Fotos_Paquetes;
};
