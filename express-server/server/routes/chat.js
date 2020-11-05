const express = require('express')
const router = express.Router()
const {getAllMessage, getOneMessage} = require('../tools/getMessage')
const db = require('../../models')
const getProfile = require('../tools/getProfile')
const {Chat} = db


router.get('/', async (req, res)=>{
    const chats = await getAllMessage(req.user.id)
    res.json(chats)
})

router.get('/:friendId', async (req, res) => {
    const userId = req.user.id
    const friendId = parseInt(req.params.friendId)
    const chat = await getOneMessage(userId, friendId)
    res.json(...chat)

})

router.post('/chat', async (req, res) => {
    const friendId = req.body.userTwo
    const userId = req.user.id
    const chat = await getOneMessage(userId, friendId)
    console.log(chat)
    if(chat.length === 0){
        const exit = await getProfile({profileQuery:{userId:friendId}, otherQuery: {user: req.user}})
        if(exit.length !== 0){
            await db.sequelize.transaction((t) => {
                return Chat.create({userTwo:friendId, userOne:userId}, {transaction:t})
            })
            const newChat = await getOneMessage(userId, friendId)
            res.json(...newChat)
        }
        else{
            res.json([])
        }
    }
    res.json(...chat)
} )


module.exports = router