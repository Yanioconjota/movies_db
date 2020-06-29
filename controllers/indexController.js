const db = require('../database/models');

const indexController = {
  index: async (req, res) => {
    try {
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
        total: total
      });
    } catch (err) {
      console.log(err);
    }
  },
  detalle: async (req, res) => {
    try {
      const movie = await db.Movie.findByPk(req.params.id, {
        include: [
          //En la asociación deben ir los nombres definidos en
          //la asociación del modelo => as: 'genres' as: 'actors',
          {association: 'genres'},
          {association: 'actors'}
        ]
      });
      res.render('detalle', {
        movie: movie
      });
    } catch(err) {
      console.log(err);
    }
  },
  nuevos: async (req, res) => {
    try {
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
    } catch(err) {
      console.log(err);
    }
  },
  //Crear película
  create: async (req, res) => {
    try {
      const genres = await db.Genre.findAll();
      res.render('crearPelicula', {
        title: 'Creación de películas',
        genres: genres
      });
    } catch(err){
      console.log(err);
    }
  },
  store: async (req, res) => {
    try {
      await db.Movie.create({
        title: req.body.title,
        length: req.body.length,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        genre_id: req.body.genre
       });

      res.redirect('/');
    } catch(err) {
      console.log(err);
    }
  },
  edit: (req, res) => {
    try {
      let getMovie = db.Movie.findByPk(req.params.id);
      let getGenres = db.Genre.findAll();
      Promise.all([getMovie, getGenres])
      .then(([movie, genres]) => {
        res.render('editarPelicula', {
          title: 'Edición de película',
          movie: movie,
          genres: genres
        })
      })
    } catch (err) {
      console.log(err);
    }
  },
  update: async (req, res) => {
    try {
      await db.Movie.update({
        title: req.body.title,
        length: req.body.length,
        rating: req.body.rating,
        awards: req.body.awards,
        release_date: req.body.release_date,
        genre_id: req.body.genre
      }, {
        where: {
          id: req.params.id
        }
      });
      res.redirect('/detalle/' + req.params.id);
    } catch(err) {
      console.log(err);
    }
  },
  delete: async (req, res) => {
    try {
      await db.Movie.destroy({
        where: {
          id: req.params.id
        }
      });
      res.redirect('/');
    } catch(err) {
      console.log(err);
    }
  }
}

module.exports = indexController;