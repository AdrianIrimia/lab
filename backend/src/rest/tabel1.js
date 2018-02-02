var express = require('express');
var router = express.Router();
var tabel1 = require('../service/').tabel1;

router.get('/', tabel1.list);
router.get('/:idFilm1', tabel1.findById);
router.post('/', tabel1.create);
// router.put('/:id',user.update);
router.delete('/:idFilm1', tabel1.delete);

module.exports = router;
