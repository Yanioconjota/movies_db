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

  return sequelize.define('Movie', cols, config);
}