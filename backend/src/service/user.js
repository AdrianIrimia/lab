"use strict";

const user = require('../models').user;

exports.list = function (req, res) {
  user.findAll().then(user => {
    res.jsonp(user);
  }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
  res.jsonp(user.create(req.body));
};

exports.findById = function (req, res) {
  let idUser = req.params.id;
  user.findById(idUser).then(user => {
    if (!user) {
      return res.status(400).send({
        message: 'User Not Found',
      });
    }
    res.jsonp(user);
  });
};

exports.delete = function (req, res) {
  let idUser = req.params.idUser;
  user.findById(req.params.idUser)
    .then(user => {
      if (!user) {
        return res.status(400).send({
          message: 'User Not Found',
        });
      }
      return user
        .destroy()
        .then(() => res.status(204).send())
        .catch(error => res.status(400).send(error));
    })
    .catch(error => res.status(400).send(error));
};


/* Pentru a crea user */
exports.createUser = function (req, res) {
    let username = req.body.username;
    let password = req.body.password;
    console.log(req.body);

    user.create({
        attributes:[ 'username', 'password'],username: username, password: password}).then(user => {
        console.log(user);

        res.jsonp(user);
    });
};


exports.loginUser = function(req,res){
    let username = req.params.username;
    let password = req.params.password;

    user.findOne({
        attributes: ['idUser','username','password'],
        where: {username: username,password: password}}).then(user => {
        if (!user) {
            return res.status(400).send({
                message: 'User Not Found',
            });
        }
        res.jsonp(user);
    });

};
