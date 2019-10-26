const express = require('express');
const photoRouter = express.Router();
const Photo = require('../models/photo.js');

//get all

photoRouter.route('/user')
    .get((req, res, next) => {
        Photo.find({user: req.user._id}, (err, userPhotos) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            return res.status(200).send(userPhotos)
        })
    })
    .post((req, res, next) => {
        const newPhoto = new Photo(req.body);
        newPhoto.user = req.user._id;

        newPhoto.save((err, savedPhoto) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            return res.status(201).send(savedPhoto)
        })
    })

module.exports = photoRouter;