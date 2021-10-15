module.exports = (sequelize, DataTypes) => {
    const Hoteles = sequelize.define(
        "Hoteles",
        {
            IdHotel: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
              NombreHotel: {
                type: DataTypes.STRING(30),
                allowNull: false,
              },
              PrecioPorNoche: {
                type: DataTypes.DOUBLE,
                allowNull: false,
              },
              DireccionHotel: {
                type: DataTypes.STRING(30),
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
    Hoteles.associate = (models) => {
      Hoteles.hasMany(models.Habitaciones, { foreignKey: 'idHotelf' }), {
        onDelete: "cascade",
      };
    };

        return Hoteles;
      };
      