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
  const profile = await getProfile({profileQuery: {id: id}})
  res.json(profile)
})

// router.get('/tag-profile', async (req, res) =>{

//   console.log(result)

//   res.json(tagProfile)
// })

module.exports = router;