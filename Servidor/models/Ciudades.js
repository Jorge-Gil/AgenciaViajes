module.exports = (sequelize, DataTypes) => {
    const Ciudades = sequelize.define(
        "Ciudades",
        {
            IdCiudad: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
              NombreCiudad: {
                type: DataTypes.STRING(20),
                allowNull: false,
              }
        },
        {
          sequelize,
          timestamps: true,
          // No crear createdAt
          createdAt: false,
    
          // No crear updatedAt
          updatedAt: false,
        }
    )
    Ciudades.associate = (models) => {
        Ciudades.hasMany(models.Paquetes_Turisticos, { foreignKey: 'idCiudadf' }), {
          onDelete: "cascade",
        };
      };

        return Ciudades;
      };
      