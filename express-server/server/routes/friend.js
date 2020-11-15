const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')
const getRelationship = require('../tools/getRelationship')
const { createNotification } = require('../tools/notificationTool')

const { Relationship, Profile, Notification } = db

router.get('/', async (req, res) =>{
    const friends = await getRelationship({ id: req.user.dataValues.profile.id, type: "friend" })

    res.json(friends.friends)
})

router.get('/:id', async (req, res) =>{
    const id = req.params.id
    const friends = await getRelationship({ id: id, type: "friend" })
    const profileIdForm = friends.friends.map((item1) => item1.id)
    const users = await getProfile({ profileQuery: {id: {[Op.in]: profileIdForm}}, otherQuery: {user: req.user} })
    //console.log(userIdForm)

    res.json(users)
})

router.put('/set-relationship', async (req, res) =>{
    const user = req.user
    const friendId = req.body.friendId
    const myProfile = req.user.profile
    const parties = await Profile.findByPk(friendId)
    let relationshipState = "not friend"

    let list = await getRelationship({ id: myProfile.id, type: "" })
    const myFriend = list.friends.map((item1) =>{
        if (item1.id === friendId ){
            relationshipState = item1.relationshipState
            return item1.id
        }
        else if (item1.relationshipState === "friend")
            return item1.id
    }).filter((item1) =>{
        if (item1 !== undefined)
            return true
    })

    list = await getRelationship({ id: friendId, type: "" })
    const partiesFriend = list.friends.map((item1) => item1.id)

    if (relationshipState === "not friend"){
        await createNotification(user.id, parties.userId, "friend request")
        await myProfile.setFriend([...myFriend, friendId])
    }
    else if (relationshipState === "friend request"){
        await myProfile.setFriend(myFriend)
    }
    else if (relationshipState === "request sent"){
        let friendFilter = myFriend.filter((item1) =>{
            return item1 !== friendId
        })
        await myProfile.setFriend(friendFilter)
    }
    else if (relationshipState === "friend"){
        let friendFilter = myFriend.filter((item1) =>{
            return item1 !== friendId
        })
        await myProfile.setFriend(friendFilter)
        friendFilter = partiesFriend.filter((item1) =>{
            return item1 !==  myProfile.id
        })
        await parties.setFriend(friendFilter)
    }


    const response = await getProfile({ profileQuery: {id: friendId }, otherQuery: { user } })
    
    res.json(...response)
})

router.get('/count/:id', async (req, res) =>{
    const id = req.params.id

    const { count } = await getRelationship({ id: id , type: "friend" })

    res.json({ count })
})

module.exports = router