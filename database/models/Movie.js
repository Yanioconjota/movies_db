module.exports = (sequelize, dataTypes) => {
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    title: {
      type: dataTypes.STRING
    },
    length: {
      type: dataTypes.INTEGER
    },
    rating: {
      type: dataTypes.INTEGER
    },
    awards: {
      type: dataTypes.INTEGER
    },
    release_date: {
      type: dataTypes.DATE
    }
  };

  const config = {
    tableName: 'Movies',
    timestamps: false
  }

  const Movie = sequelize.define('Movie', cols, config);

  Movie.associate = (models) => {
    Movie.belongsToMany(models.Actor, {
      as: 'actors',
      through: 'actor_movie',
      foreignKey: 'movie_id',
      otherKey: 'actor_id',
      timestamps: false
    });
    Movie.belongsTo(models.Genre, {
      as: 'genres',
      foreignKey: 'genre_id'
    });
  }

  return Movie;
}