module.exports = (sequelize, dataTypes) => {
  const alias = 'Genre';
  const cols = {
    id: {
      type: dataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: dataTypes.STRING
    }
  };

  const config = {
    tableName: 'Genres',
    timestamps: false
  }

  const Genre = sequelize.define(alias, cols, config);

  Genre.associate = (models) => {
    Genre.hasMany(models.Movie, {
      as: 'movies',
      foreignKey: 'genre_id'
    });
  }


  return Genre;
}