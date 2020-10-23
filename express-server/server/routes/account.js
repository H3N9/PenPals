const express = require('express');
const router = express.Router();
const db = require('../../models')
const getProfile = require('../tools/getProfile')

const { Profile } = db

router.get('/my-profile', async (req, res) =>{
    const profile = await getProfile(profileQuery= {userId: req.user.id})
    res.json(profile)
})

router.put('/update', async (req, res) =>{
    const id = req.params.id
    const data = req.body

    const profile = await db.sequelize.transaction((t) =>{
        return Profile.update(data, { where: { userId: req.user.id } }, {transaction: t})
    })

    res.json(profile)
})

module.exports = router