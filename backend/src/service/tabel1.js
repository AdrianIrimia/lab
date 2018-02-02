"use strict";

const tabel1 = require('../models').tabel1;

exports.list = function (req, res) {
    tabel1.findAll().then(tabel1 => {
        res.jsonp(tabel1);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(tabel1.create(req.body));
};

exports.findById = function (req, res) {
    let idFilm1 = req.params.id;
    tabel1.findById(idFilm1).then(tabel1 => {
        if (!tabel1) {
            return res.status(400).send({
                message: 'User Not Found',
            });
        }
        res.jsonp(tabel1);
    });
};

exports.delete = function (req, res) {
    let idFilm1 = req.params.idFilm1;
    tabel1.findById(req.params.idFilm1)
        .then(tabel1 => {
            if (!tabel1) {
                return res.status(400).send({
                    message: 'Tabel1 Not Found',
                });
            }
            return tabel1
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};


