const express = require('express');
const router = express.Router();
const getRelationship = require('../tools/getRelationship')
const { Op } = require('sequelize')

const db = require("../../models")

const { Post, Profile, User } = db

router.get('/all', async (req, res) =>{
    const posts = await Post.findAll()
    res.json(posts)
})

router.get('/', async (req, res) =>{
    const userProfile = req.user.dataValues.profile
    //console.log(userProfile.id)
    const { friends } = await getRelationship({ id:userProfile.id, type: "friend" })
    const friendsId = friends.map((item1) => item1.id)
    const postFriend = await Profile.findAll({ where: {id: {[Op.in]: friendsId}}, include: [
        {model: User, as:"user", include: [
            {model: Post, as: "post", attributes: ["id", "title", "userId"]}
        ]}
    ] })
    const posts = postFriend.reduce((acc1, curr1) =>{
        const data = curr1.dataValues.user.post.map((item2) => item2.dataValues)
        console.log(data)
        return [...acc1, ...data]
    }, [])
    res.json(posts)
})

router.post('/create', async (req, res) =>{
    const data = req.body
    const user = req.user

    const post = await db.sequelize.transaction((t) =>{
        return Post.create({...data, userId: user.id}, {transaction: t})
    })

    res.json(post)
})

router.delete('/delete/:id', async (req, res) =>{
    const id = req.params.id
    const user = req.user

    const post = await db.sequelize.transaction((t) =>{
        return Post.destroy({ where: {id:id, userId: user.id} })
    })

    res.redirect('/post')
})

module.exports = router;