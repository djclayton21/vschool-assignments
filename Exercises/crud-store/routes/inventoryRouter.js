const inventoryRouter = require('express').Router();
const Item = require('../models/item.js')


//all
inventoryRouter.route('/')
    .get((req, res, next) => {
        if (Object.keys(req.query).length === 0) {
            Item.find((err, inventory) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                return res.status(200).send(inventory)
            });
        } else {
            Item.find({...req.query}, (err, inventory) => {
                if (err) {
                    res.status(500);
                    return next(err);
                }
                return res.status(200).send(inventory);
            })
        }
    })
    .post((req, res, next) => {
        const newItem = new Item(req.body);
        newItem.save((err, newItem) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(newItem);
        });
    });

//all by category
inventoryRouter.route('/categories')
    .get((req, res, next) => {
        Item.find({categories: req.params.category}, (err, items) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(items);
        });
    });

//by _id
inventoryRouter.route('/:_id')
    .get((req, res, next) => {
        Item.findById(req.params._id, (err, item) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(item);
        });
    })
    .delete((req, res, next) => {
        Item.findByIdAndRemove(req.params._id, (err, item) => {
            if (err) {
                res.status(500);
                return next(err)
            }
            return res.status(200).send(item);
        });
    })
    .put((req, res, next) => {
        Item.findByIdAndUpdate(req.params._id, req.body, {new: true}, (err, item) => {
            if (err) {
                res.status(500);
                return next(err);
            }
            return res.status(200).send(item);
        });
    });

module.exports = inventoryRouter;