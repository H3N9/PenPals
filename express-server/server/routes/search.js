const express = require('express');
const router = express.Router();
const db = require('../../models')
const getProfile = require('../tools/getProfile')

router.get('/user', async (req, res) =>{
    const profile = await getProfile({profileQuery: {}})
    res.json(profile)
})

router.get('/user/:id', async (req, res) =>{
  const id = req.params.id

  const profile = await getProfile({profileQuery: {id: id}})
  res.json(profile)
})

module.exports = router;