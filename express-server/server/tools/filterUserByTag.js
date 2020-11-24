const db = require('../../models')
const { User, Profile, Tag, Category, FavTag } = db
const { Op } = require('sequelize')

module.exports = async (listTag) =>{
    let query
    if (listTag.length == 0)
        return {}
    else if ((typeof listTag[0]) == "number")
        query = {id: listTag}
    else
        query = {name: listTag}
    const tagProfile = await Tag.findAll({
        attributes: [],
        where: query,
        include:[
          {model: Profile, as: 'profile', attributes: ["id"], through:{ attributes: [] } }
        ]
      })
    const result = Array.from(new Set(tagProfile.reduce((acc1, curr1) =>{
    return [...acc1, ...curr1.profile.reduce((acc2, curr2) =>{
        return [...acc2, curr2.id]
    }, [])]
    }, [])))

    return {[Op.in]: result}
}