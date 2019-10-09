const express = require('express')
const uuid = require('uuid/v4')
const app = express()
const PORT = 7890

const bounties = [
    {
        firstName: "Eric", 
        lastName: "Jones",
        isLiving: true,
        bountyAmount: 5,
        type: "Sith",
        _id: uuid()
    },
    {
        firstName: "Jeff", 
        lastName: "Seneff",
        isLiving: true,
        bountyAmount: 58,
        type: "Jedi",
        _id: uuid()
    },
    {
        firstName: "Dan", 
        lastName: "Clayton",
        isLiving: false,
        bountyAmount: 99999999,
        type: "Jedi",
        _id: uuid()
    },
]

app.use(express.json())

app.get('/bounties', (req, res) => {
    res.send(bounties)
})

app.get('/bounties/:_id', (req, res) => {
    const bountyToGet = bounties.find(bounty => {
        return bounty._id === req.params._id
    })
    res.send(bountyToGet)
})

app.post('/bounties', (req, res) => {
    bounties.push({...req.body, _id: uuid()})
    res.send(req.body)
})

app.delete('/bounties/:_id', (req, res) => {
    const indexToDelete = bounties.findIndex(bounty => {
        return bounty._id === req.params._id
    })
    const bountyToDelete = bounties[indexToDelete]
    bounties.splice(indexToDelete, 1)
    res.send(`Bounty for ${bountyToDelete.firstName} ${bountyToDelete.lastName} has been removed`)
})

app.put('/bounties/:_id', (req, res) => {

    const bountyToChange = bounties.find(bounty => {
        return bounty._id === req.params._id;
    })

    Object.assign(bountyToChange, req.body)

    res.send(bountyToChange)
})

app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))