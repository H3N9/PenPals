const express = require('express');
const router = express.Router();
const db = require('../../models')
const getProfile = require('../tools/getProfile')
const { Op } = require('sequelize')

const { Profile, Relationship } = db

router.get('/my-profile', async (req, res) =>{
    const profile = await getProfile({profileQuery: {userId: req.user.id}, otherQuery: {user: req.user}})
    res.json(...profile)
})

router.get('/profile/:id', async (req, res) =>{
    const id = req.params.id
    const myProfile = await Profile.findOne({where: {userId: req.user.id}})

    const friendState = await Relationship.findAll({ 
        where: {[Op.or]: [
            {profileId: myProfile.id, friendId: id}, {profileId: id, friendId: myProfile.id}
        ]} 
    })
    res.json(friendState)
})

router.put('/update', async (req, res) =>{
    const data = req.body

    const profile = await db.sequelize.transaction((t) =>{
        return Profile.update(data, { where: { userId: req.user.id } }, {transaction: t})
    })

    res.json(profile)
})

router.put('/add-tag', (req, res) =>{
    const data = req.body
  
    Profile.findOne({ where: {userId: req.user.id}}).then((profile) =>{
      profile.setTag(data.tag).then((profile) =>{
        Profile.findOne({where: {userId: req.user.id}, include: ["tag"]}).then((profile) =>{
          res.json(profile)
        })
      })
    })
})

module.exports = router