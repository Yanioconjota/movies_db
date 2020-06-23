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
  },
  store: async (req, res) => {
    await db.Movie.create({
      title: req.body.titulo,
      length: req.body.duracion,
      rating: req.body.rating,
      awards: req.body.premios,
      release_date: req.body.lanzamiento
    });

    res.redirect('/');
  },
  update: async (req, res) => {
    await db.Movie.update({
      title: req.body.titulo,
      length: req.body.duracion,
      rating: req.body.rating,
      awards: req.body.premios,
      release_date: req.body.lanzamiento
    }, {
      where: {
        id: req.params.id
      }
    });
    res.redirect('/detalle/' + req.params.id);
  },
  delete: async (req, res) => {
    await db.Movie.destroy({
        where: {
        id: req.params.id
      }
    });
    res.redirect('/');
  }
}

module.exports = indexController;