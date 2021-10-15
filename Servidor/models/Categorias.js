module.exports = (sequelize, DataTypes) => {
    const Categorias = sequelize.define(
        "Categorias",
        {
            IDCatPaquete: {
                type: DataTypes.INTEGER,
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
              },
              NombreCategoria: {
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
      
    Categorias.associate = (models) => {
        Categorias.hasMany(models.Paquetes_Turisticos, { foreignKey: 'IDCatPaquetef' }), {
          onDelete: "cascade",
        };
      };
        return Categorias;
      };
      