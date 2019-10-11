const bountiesRouter = require('express').Router();
const Bounty = require('../models/bounty.js')


bountiesRouter.route('/')
    .get((req, res) => {
        Bounty.find((err, bounties) => {
            if (err){
                res.status(500)
                return (res.send('could not find all'))
            }
            return res.status(200).send(bounties)
        })
    })
    .post((req, res) => {
        const newBounty = new Bounty(req.body)
        newBounty.save((err, newBounty) => {
            if (err) {
                return res.status(500).send(`could not post: ${err}`)
            }
            return res.status(200).send(newBounty)
        })
    })

bountiesRouter.route('/:_id')
    .get((req, res) => {
        Bounty.findById(req.params._id, (err, bounty) => {
            if (err) return res.status(500).send(`could not get: ${err}`);
            return res.status(200).send(bounty);
        })
    })
    .delete((req, res) => {
        Bounty.findByIdAndRemove(req.params._id, (err, bounty) => {
            if (err) return res.status(500).send(`could not delete ${err}`);
            return res.status(200).send(`Deleted ${bounty.firstName} ${bounty.lastName}`);
        })
    })
    .put((req, res) => {
        Bounty.findByIdAndUpdate(req.params._id, req.body, {new: true},
            (err, bounty) => {
                if (err) return res.status(500).send(`could not update: ${err}`)
                return res.status(200).send(bounty)
            })
    })

module.exports = bountiesRouter;