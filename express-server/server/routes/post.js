const express = require('express');
const router = express.Router();
const getRelationship = require('../tools/getRelationship')
const { Op } = require('sequelize')

const db = require("../../models")

const { Post, Profile, User, ImagePost, Like } = db

router.get('/all', async (req, res) =>{
    const posts = await Post.findAll({include:["imagePost"]})
    console.log(posts[0].setImagePost)
    res.json(posts)
})

router.get('/', async (req, res) =>{
    const userProfile = req.user.dataValues.profile
    //console.log(userProfile.id)
    const { friends } = await getRelationship({ id:userProfile.id, type: "friend" })
    const friendsId = friends.map((item1) => item1.id)
    const postFriend = await Profile.findAll({ where: {id: {[Op.in]: friendsId}}, include: [
        {model: User, as:"user", include: [
            {model: Post, as: "post", attributes: ["id", "title", "userId"], include: [
                "imagePost" 
            ]}
        ]}
    ] })
    const posts = postFriend.reduce((acc1, curr1) =>{
        console.log(curr1.dataValues.user.post)
        const data = curr1.dataValues.user.post.map((item2) => {
            if (item2.dataValues.imagePost !== null)
                return {...item2.dataValues, imagePost: item2.dataValues.imagePost.url}
            return {...item2.dataValues}
        })
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
    if (data.imagePost !== "" && data.imagePost !== undefined){
        console.log(11)
        const imagePost = await db.sequelize.transaction((t) =>{
            return ImagePost.create({ postId: post.id, url: data.imagePost }, {transaction: t})
        })
    }

    const newPost = await Post.findOne({ where: {id : post.id}, include:["imagePost"] })

    res.json(newPost)
})

router.delete('/delete/:id', async (req, res) =>{
    const id = req.params.id
    const user = req.user

    const post = await db.sequelize.transaction((t) =>{
        return Post.destroy({ where: {id:id, userId: user.id} })
    })

    res.redirect('/post')
})

router.put('/like', async (req, res) =>{
    const postId = req.body.postId
    const post = await Post.findOne({ where: {id : postId}, include: ["userLike"]})
    
    //await post.setUserLike([ ])

    res.json(post)
})

module.exports = router;