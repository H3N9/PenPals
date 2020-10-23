const express = require('express');
const router = express.Router();
const db = require('../../models')
const getProfile = require('../tools/getProfile')

router.get('/my-profile', async (req, res) =>{
    const profile = await getProfile({ profileQuery: {userId: req.user.id} })
    const {id} = profile[0]
    res.json(id)
})

module.exports = router