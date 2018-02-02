"use strict";

const admin = require('../models').admin;

exports.list = function (req, res) {
    admin.findAll().then(admin => {
        res.jsonp(admin);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(admin.create(req.body));
};

exports.findById = function (req, res) {
    let idFilm1 = req.params.id;
    admin.findById(idFilm1).then(admin => {
        if (!tabel1) {
            return res.status(400).send({
                message: 'Admin Not Found',
            });
        }
        res.jsonp(admin);
    });
};

exports.delete = function (req, res) {
    let idFilm1 = req.params.idFilm1;
    admin.findById(req.params.idFilm1)
        .then(admin => {
            if (!admin) {
                return res.status(400).send({
                    message: 'Admin Not Found',
                });
            }
            return admin
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};

