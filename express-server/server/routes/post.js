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
    const user = req.user
    const userProfile = req.user.dataValues.profile
    //console.log(userProfile.id)
    const { friends } = await getRelationship({ id:userProfile.id, type: "friend" })
    const friendsId = friends.map((item1) => item1.id)
    const postFriend = await Profile.findAll({ where: {id: {[Op.in]: friendsId}}, include: [
        {model: User, as:"user", include: [
            {model: Post, as: "post", attributes: ["id", "title", "userId", "createdAt"], include: [
                "imagePost", "userLike"
            ]}
        ]}
    ] })
    const posts = postFriend.reduce((acc1, curr1) =>{
        const data = curr1.dataValues.user.post.map((item2) => {
            // console.log(item2.dataValues.createdAt, day, hour, minute, seconds)
            const indexUserLike = item2.dataValues.userLike.findIndex((item3) => item3.dataValues.id === user.id)
            const isLiked = true?(indexUserLike !== -1):false
            const likeCount = item2.dataValues.userLike.length
            const returnData = {...item2.dataValues,
                firstName: curr1.dataValues.firstName,
                lastName: curr1.dataValues.lastName,
                profileId: curr1.dataValues.id,
                imageProfile: curr1.dataValues.image,
                isLiked,
                likeCount
            }
            delete returnData["userLike"]
            if (item2.dataValues.imagePost !== null){
                return {...returnData, 
                    imagePost: item2.dataValues.imagePost.url,
                }
            }
            return returnData
        })
        return [...acc1, ...data]
    }, [])
    res.json(posts)
})

router.post('/create', async (req, res) =>{
    const data = req.body
    const user = req.user
    let imagePost = { url: null }

    const post = await db.sequelize.transaction((t) =>{
        return Post.create({...data, userId: user.id}, {transaction: t})
    })
    if (data.imagePost !== "" && data.imagePost !== undefined){
        imagePost = await db.sequelize.transaction((t) =>{
            return ImagePost.create({ postId: post.id, url: data.imagePost }, {transaction: t})
        })
    }

    const newPost = await Post.findOne({ where: {id : post.id}, attributes: ["id", "title", "userId", "createdAt"],include:["imagePost"] })
    const responseObj = {
        ...newPost.dataValues,
        imagePost: imagePost.url,
        firstName: user.profile.dataValues.firstName,
        lastName: user.profile.dataValues.lastName,
        profileId: user.profile.dataValues.id,
        imageProfile: user.profile.dataValues.image,
        isLiked: false,
        likeCount: 0
    }

    res.json(responseObj)
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
    const user = req.user
    const post = await Post.findOne({ where: {id : postId}, include: ["userLike"]})
    const userLike = post.dataValues.userLike.map((item1) =>item1.dataValues.id)
    const indexUserLike = userLike.findIndex(item1 => item1 === user.id)
    if (indexUserLike === -1){
        await post.setUserLike([...userLike, user.id])
        res.json({ status: "liked" })
    }
    else{
        const removeUserLike = [...userLike.slice(0, indexUserLike), ...userLike.slice(indexUserLike+1)]
        await post.setUserLike(removeUserLike)
        res.json({ status: "unliked" })
    }

    res.json(post)
})

module.exports = router;