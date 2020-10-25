const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')
const getRelationship = require('../tools/getRelationship')

const { Relationship, Profile } = db

router.get('/', async (req, res) =>{
    const friends = await getRelationship({ profile: req.user.dataValues.profile, type: "friend" })

    res.json(friends)
})

module.exports = router