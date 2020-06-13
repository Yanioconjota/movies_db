const db = require('../database/models');

const indexController = {
  index: async (req, res) => {
    let pagina = 0;
    const pag = req.params.pag;
    if (pag) {
      pagina = (req.params.pag - 1) * 5;
    }
    const total = await db.Movie.count('id');
    const movies = await db.Movie.findAll({
      limit: 5,
      offset: pagina
    });
    res.render('index', {
      title: 'Movies DB',
      movies: movies,
      total : total
    });
  },
  detalle: async (req, res) => {
    // db.Movie.findOne({
    //   where: { id: req.params.id }
    // }).then((movie)=> {
    //   console.log(movie);
    //   res.send('OK');
    // });
    const movie = await db.Movie.findByPk(req.params.id);
    res.render('detalle', {
      movie: movie
    });
  },
  nuevos: async (req, res) => {
    const movies = await db.Movie.findAll({
      limit: 5,
      offset: 0,
      order: [
        ['release_date', 'DESC']
      ]
    });
    res.render('nuevos', {
      title: 'Las mas nuevas',
      movies: movies
    });
  }
}

module.exports = indexController;