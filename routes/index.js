var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { route } = require('./users');
/* GET home page. */
router.get('/', indexController.index);
router.get('/:pag?', indexController.detalle);
router.get('/detalle/:id', indexController.detalle);
router.get('/news', indexController.nuevos);

module.exports = router;
