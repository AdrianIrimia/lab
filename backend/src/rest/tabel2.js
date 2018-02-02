var express = require('express');
var router = express.Router();
var tabel2 = require('../service/').tabel2;

router.get('/', tabel2.list);
router.get('/:idFilm2', tabel2.findById);
router.post('/', tabel2.create);
// router.put('/:id',user.update);
router.delete('/:idFilm2', tabel2.delete);

module.exports = router;
