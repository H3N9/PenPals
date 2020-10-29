const express = require('express')
const router = express.Router()
const getMessage = require('../tools/getMessage')

router.get('/', async (req, res)=>{
    const chats = await getMessage(req.user.id)
    res.json(chats)
})


module.exports = router