"use strict";

const tabel2 = require('../models').tabel2;

exports.list = function (req, res) {
    tabel2.findAll().then(tabel2 => {
        res.jsonp(tabel2);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(tabel2.create(req.body));
};

exports.findById = function (req, res) {
    let idFilm2 = req.params.idFilm2;
    tabel2.findById(idFilm2).then(tabel2 => {
        if (!tabel2) {
            return res.status(400).send({
                message: 'Tabel2 Not Found',
            });
        }
        res.jsonp(tabel2);
    });
};

exports.delete = function (req, res) {
    let idFilm2 = req.params.idFilm2;
    tabel2.findById(req.params.idFilm2)
        .then(tabel2 => {
            if (!tabel2) {
                return res.status(400).send({
                    message: 'Tabel2 Not Found',
                });
            }
            return tabel2
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
