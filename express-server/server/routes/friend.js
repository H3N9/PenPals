const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')

const { Relationship, Profile } = db

router.get('/', async (req, res) =>{
    const myProfile = req.user.dataValues.profile.dataValues
    let friends = await Profile.findAll({attributes: ["id"], where: {id: myProfile.id},include: [
        {model: Profile, as: "friend", attributes: ["id"]}
    ]}) 

    res.json(friends)
})

module.exports = router