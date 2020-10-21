const express = require('express');
const router = express.Router();
const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('../tools/getProfile')

const { Tag, Profile } = db

router.get('/user', async (req, res) =>{
  const tagIdList = req.body.tag
  const tagProfile = await Tag.findAll({
    attributes: [],
    where:{id: {[Op.in]: tagIdList }},
    include:[
      {model: Profile, as: 'profile', attributes: ["id"], through:{ attributes: [] } }
    ]
  })

  const result = Array.from(new Set(tagProfile.reduce((acc1, curr1) =>{
    return [...acc1, ...curr1.profile.reduce((acc2, curr2) =>{
      return [...acc2, curr2.id]
    }, [])]
  }, [])))

  const idSearch = (result.length !== 0)?{id: {[Op.in]: result}}:{}

  console.log(result)

  const profile = await getProfile(
    profileQuery= (result.length !== 0)?{
      id: {[Op.in]: result},
    }:{},
  )
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