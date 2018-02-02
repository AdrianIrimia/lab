var express = require('express');
var router = express.Router();
var admin = require('../service/').admin;

router.get('/', admin.list);
router.get('/:idFilm1', admin.findById);
router.post('/', admin.create);
// router.put('/:id',user.update);
router.delete('/:idFilm1', admin.delete);

module.exports = router;