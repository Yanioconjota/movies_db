var express = require('express');
var router = express.Router();
const indexController = require('../controllers/indexController');
//const { route } = require('./users');
/* GET home page. */
// router.get('/', indexController.index);
router.get('/crear', indexController.create);
router.post('/crear', indexController.store);
router.get('/editar/:id', indexController.edit);
router.post('/editar/:id', indexController.update);
router.post('/borrar/:id', indexController.delete);
router.get('/detalle/:id', indexController.detalle);
router.get('/nuevos', indexController.nuevos);
router.get('/:pag?', indexController.index);


module.exports = router;
