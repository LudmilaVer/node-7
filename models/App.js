module.exports = (sequelize, DataTypes) => {
    const App = sequelize.define('App', {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      size: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
    }, {
      tableName: 'Apps',
      timestamps: false,  // отключаем createdAt и updatedAt
    });
  
    return App;
  };
  