var express = require('express');
var router = express.Router();
var tabel3 = require('../service/').tabel3;

router.get('/', tabel3.list);
router.get('/:idBilet', tabel3.findById);
router.post('/', tabel3.create);
// router.put('/:id',user.update);
router.delete('/:idBilet', tabel3.delete);

module.exports = router;
