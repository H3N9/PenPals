const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')
const { Notification, User, Profile } = db

router.get('/', async (req, res) =>{
    const user = req.user

    const notifi = await Notification.findAll({ where: {userId: user.id}, attributes:["id", "type", "createdAt", "isReaded"], include: [
        {model: User, as: "sender", include: ["profile"]}
    ]})

    const responseObj = notifi.map((item1) =>{
        const senderProfile = item1.dataValues.sender.profile.dataValues
        const sender = {
            userId: senderProfile.userId,
            profileId: senderProfile.id,
            firstName: senderProfile.firstName,
            lastName: senderProfile.lastName,
            imageProfile: senderProfile.image
        }
        return {...item1.dataValues, sender}
    })

    res.json(responseObj)
})

module.exports = router;