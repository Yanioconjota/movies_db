module.exports = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    first_name: {
      type: dataTypes.STRING
    },
    last_name: {
      type: dataTypes.STRING
    }
  };

  const config = {
    tableName: 'Actors',
    timestamps: false
  }
  const Actor = sequelize.define('Actor', cols, config);

  Actor.associate = (models) => {
    Actor.belongsToMany(models.Movie, {
      as: 'movies',
      through: 'actor_movie',
      foreignKey: 'actor_id',
      otherKey: 'movie_id',
      timestamps: false
    });
  }
  
  return Actor;
  
};