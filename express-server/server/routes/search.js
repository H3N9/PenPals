const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')
const filterUserByTag = require('../tools/filterUserByTag')
const createQueryProfile = require('../tools/createQueryProfile')

const { Tag, Profile, FavTag, Category } = db

router.get('/user', async (req, res) =>{
  let query = await createQueryProfile(req)
  const profile = await getProfile(query)
  res.json(profile)
})

router.post('/user', async (req, res) =>{
  let query = await createQueryProfile(req)
  const profile = await getProfile(query)
  res.json(profile)
})

router.get('/user/:id', async (req, res) =>{
  const id = req.params.id
  const profile = await getProfile({profileQuery: {userId: id}, otherQuery: {user: req.user}})
  res.json(...profile)
})

router.get('/tag', async (req, res) =>{
  const tags = await Tag.findAll({ attributes: ["id", "name", "type"], include: [
    {model: FavTag, as: "favTag", include: [
      {model: Category, as: "category", attributes: ["id", "name"]}
    ]}
  ]})

  const tagResponse = tags.map((item1) =>{
    const favTag = item1.dataValues.favTag
    let category = favTag
    if (favTag !== null)
      category = favTag.category.name
    const returnData = item1.dataValues
    delete returnData["favTag"]
    return {...returnData, category}
  })

  res.json(tagResponse)
})

router.post('/hobb-tag', async (req, res) =>{
  const nameQuery = req.body.name
  const hobbTags = await Tag.findAll({
    attributes: ["id", "name", "type"], 
    where:{name: {[Op.like]:"%"+nameQuery+"%"}, type:"hobbies"}
  })
  res.json(hobbTags)
})

router.post('/fav-tag', async (req, res) =>{
  const nameQuery = req.body.name
  const favTags = await Tag.findAll({
    attributes: ["id", "name", "type"], 
    where:{name: {[Op.like]:"%"+nameQuery+"%"}, type:"favorites"}, include: [
      {model: FavTag, as: "favTag", include: [
        {model: Category, as: "category", attributes: ["id", "name"]}
      ]}
    ]
  })

  const favTagResponse = favTags.map((item1) =>{
    const category = item1.dataValues.favTag.category.name
    const returnData = item1.dataValues
    delete returnData["favTag"]
    return {...returnData, category}
  })

  res.json(favTagResponse)
})

router.get('/user/byid/:id', async (req, res) =>{
  const id = req.params.id
  const profile = await getProfile({profileQuery: {id: id}, otherQuery: {user: req.user}})
  res.json(...profile)
})

module.exports = router;