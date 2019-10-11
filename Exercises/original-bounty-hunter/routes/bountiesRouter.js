const bountiesRouter = require('express').Router();
const Bounty = require('../models/bounty.js')


bountiesRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err){
                res.status(500)
                return (res.send(err))
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
    })

bountiesRouter.route('/:_id')
    .get((req, res) => {
    })
    .delete((req, res) => {
    })
    .put((req, res) => {
    })

module.exports = bountiesRouter;