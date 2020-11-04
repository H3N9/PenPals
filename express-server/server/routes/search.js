const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')
const filterUserByTag = require('../tools/filterUserByTag')
const createQueryProfile = require('../tools/createQueryProfile')

const { Tag, Profile } = db

router.get('/user', async (req, res) =>{
  // const tagIdList = req.body.tag
  //let queryInId = await filterUserByTag(req.body.tag)
  let query = await createQueryProfile(req)
  const profile = await getProfile(query)
  res.json(profile)
})

router.get('/user/:id', async (req, res) =>{
  const id = req.params.id
  const profile = await getProfile({profileQuery: {userId: id}, otherQuery: {user: req.user}})
  res.json(...profile)
})

router.get('/user/byid/:id', async (req, res) =>{
  const id = req.params.id
  const profile = await getProfile({profileQuery: {id: id}, otherQuery: {user: req.user}})
  res.json(...profile)
})

module.exports = router;