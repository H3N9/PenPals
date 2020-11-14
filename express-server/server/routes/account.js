const express = require('express');
const router = express.Router();
const db = require('../../models')
const getProfile = require('../tools/getProfile')
const { Op } = require('sequelize')

const { Profile, Relationship, Tag } = db

router.get('/my-profile', async (req, res) =>{
    const profile = await getProfile({profileQuery: {userId: req.user.id}, otherQuery: {user: req.user}})
    res.json(...profile)
})

router.get('/profile/:id', async (req, res) =>{
    const id = req.params.id
    const profile = await getProfile({profileQuery: { id }, otherQuery: {user: req.user}})
    res.json(...profile)
})

router.put('/update', async (req, res) =>{
    const data = req.body

    const profile = await db.sequelize.transaction((t) =>{
        return Profile.update(data, { where: { userId: req.user.id } }, {transaction: t})
    })

    res.json(profile)
})

router.put('/add-tag', async (req, res) =>{
    const data = req.body
    const newTags = data.tag

    const profile = await Profile.findOne({where:{userId: req.user.id}, include:[
        {model: Tag, as: "tag", attributes: ["id"], through: { attributes: [] }}
    ]})
    const tags = profile.dataValues.tag.map(item1 => item1.id)

    try{
        profile.setTag([...tags, ...newTags])
        res.redirect('/account/my-profile')
    }
    catch(e){
        res.json([...tags, ...newTags])
    }
})

router.put('/remove-tag', async (req, res) =>{
    const removetag = req.body.tag

    const profile = await Profile.findOne({where:{userId: req.user.id}, include:[
        {model: Tag, as: "tag", attributes: ["id"], through: { attributes: [] }}
    ]})
    const setTags = profile.dataValues.tag.map(item1 => item1.id).filter((item1) =>{
        const index = removetag.findIndex(item2 => item1 === item2)
        console.log(index, item1)
        if (index === -1)
            return true
        return false
    })

    try{
        profile.setTag(setTags)
        res.redirect('/account/my-profile')
    }
    catch(e){
        res.json(setTags)
    }

    //res.json(setTags)
})

module.exports = router