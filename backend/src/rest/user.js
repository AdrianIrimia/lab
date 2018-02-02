var express = require('express');
var router = express.Router();
var user = require('../service/').user;

router.get('/', user.list);
router.get('/:idUser', user.findById);
router.post('/', user.create);
// router.put('/:id',user.update);
router.post('/createUser',user.createUser);
router.get('/userpass/:username:password',user.loginUser);
router.delete('/:idUser', user.delete);

module.exports = router;
