const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')
const getRelationship = require('../tools/getRelationship')

const { Relationship, Profile } = db

router.get('/', async (req, res) =>{
    const friends = await getRelationship({ id: req.user.dataValues.profile.id, type: "friend" })

    res.json(friends)
})

router.get('/:id', async (req, res) =>{
    const id = Number(req.params.id)
    const friends = await getRelationship({ id: id, type: "friend" })

    res.json(friends)
})

router.get('/count/:id', async (req, res) =>{
    const id = Number(req.params.id)

    const { count } = await getRelationship({ id: id , type: "friend" })

    res.json({ count })
})

module.exports = router