const express = require('express');
const User = require('../models/user.js');
const authRouter = express.Router();
const jwt = require('jsonwebtoken');

authRouter.post('/signup', (req, res, next) => {
    User.findOne({userName: req.body.userName.toLowerCase()}, (err, existingUser) => {
        if (err) {
            res.status(500);
            return next(err)
        }

        if (existingUser !== null) {
            res.status(400)
            return next(new Error('Username already exists'))
        }

        const newUser = new User(req.body);
        newUser.save((err, createdUser) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            const token = jwt.sign(createdUser.toObject(), process.env.SECRET)
            return res.status(201).send({user: createdUser.toObject(), token})
        })
    })
})

authRouter.post('/login', (req, res, next) => {
    User.findOne({userName: req.body.userName.toLowerCase()}, (err, matchedUser) => {
        if (err) {
            res.status(500);
            return next(err)
        }
        if (!matchedUser || matchedUser.password !== req.body.password) {
            res.status(401);
            return next(new Error('Login info not found'));
        }

        const token = jwt.sign(matchedUser.toObject(), process.env.SECRET)
        return res.status(201).send({user: matchedUser, token})
    })
})

module.exports = authRouter;