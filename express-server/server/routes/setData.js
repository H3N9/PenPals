const express = require('express');
const router = express.Router();
const db = require('../../models')

const { User, Profile, Tag, Category, FavTag } = db

router.get('/', (req, res) =>{
    res.send("Hello")
})

router.put('/add-tag', (req, res) =>{
    const data = req.body
  
    Profile.findOne({ where: {userId: req.user.id}}).then((profile) =>{
      profile.setTag(data.tag).then((profile) =>{
        Profile.findOne({where: {userId: 8}, include: ["tag"]}).then((profile) =>{
          res.json(profile)
        })
      })
    })
})

router.put('/add-friend', async (req, res) =>{
  const data = req.body
  let profile = await Profile.findOne({ where: {userId: req.user.id}})
  await profile.setFriend(data.friend)
  profile = await Profile.findOne({ where: {userId: req.user.id}, include: ["friend"]})

  res.json(profile)
})

//ทำไว้ mock ข้อมูล อย่าลืมลบออก
router.put('/add-friend/:id', async (req, res) =>{
  const id = req.params.id
  const data = req.body
  let profile = await Profile.findOne({ where: { id }})
  await profile.setFriend(data.friend)
  profile = await Profile.findOne({ where: { id }, include: ["friend"]})

  res.json(profile)
})

router.post('/add-profile', async (req, res) =>{
    const data = req.body
    const userProfile = await db.sequelize.transaction((t) =>{
        return Profile.create(data, {transaction: t})
    })

    res.json(userProfile)
})

router.post('/tag', async (req, res) =>{
  const data = req.body
  let tag = await Tag.findOne({where: {name: data.name}})
  if (!tag){
    tag = await db.sequelize.transaction((t) =>{
        return Tag.create(data, {transaction: t})
      })
  }
  if (data.category){

    let category = await Category.findOne({where: { name: data.category }})
    if (!category){
      category = await db.sequelize.transaction((t) =>{
        return Category.create({ name: data.category }, {transaction: t})
      })
    }
    const favTag = await db.sequelize.transaction((t) =>{
      return FavTag.create({ tagId: tag.dataValues.id, categoryId: category.dataValues.id }, {transaction: t})
    })
    res.json(favTag)
  }
  res.json(tag)
})

module.exports = router;