"use strict";

const tabel3 = require('../models').tabel3;

exports.list = function (req, res) {
    tabel3.findAll().then(tabel3 => {
        res.jsonp(tabel3);
    }).catch((error) => res.status(400).send(error));
};

exports.create = function (req, res) {
    res.jsonp(tabel3.create(req.body));
};

exports.findById = function (req, res) {
    let idBilet = req.params.idBilet;
    tabel3.findById(idBilet).then(tabel3 => {
        if (!tabel3) {
            return res.status(400).send({
                message: 'Tabel3 Not Found',
            });
        }
        res.jsonp(tabel3);
    });
};

exports.delete = function (req, res) {
    let idBilet = req.params.idBilet;
    tabel3.findById(req.params.idBilet)
        .then(tabel3 => {
            if (!tabel3) {
                return res.status(400).send({
                    message: 'Tabel3 Not Found',
                });
            }
            return tabel3
                .destroy()
                .then(() => res.status(204).send())
                .catch(error => res.status(400).send(error));
        })
        .catch(error => res.status(400).send(error));
};
