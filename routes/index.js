var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
const { route } = require('./users');
/* GET home page. */
// router.get('/', indexController.index);
router.get('/detalle/:id', indexController.detalle);
router.get('/nuevos', indexController.nuevos);
router.get('/:pag?', indexController.index);

module.exports = router;
