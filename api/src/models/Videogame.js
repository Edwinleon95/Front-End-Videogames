const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV1,
      primaryKey: true,
      allowNull: false,
      },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    img:{ 
      type:DataTypes.TEXT,
    },
    rating:{
      type: DataTypes.DECIMAL,
        validate: {
            min: 0,
            max: 5,
      }
    },
    description:{
      type:DataTypes.TEXT,
      allowNull:false
    },
    releaseDate:{
      type:DataTypes.DATEONLY,
    },
    platforms:{
      type:DataTypes.ARRAY(DataTypes.TEXT),
      allowNull:false 
    } 
  },
  {
    timestamps:false
  });
};

