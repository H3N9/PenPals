const db = require('../../models')
const { Op } = require('sequelize')
const getProfile = require('./getProfile')

const { Relationship, Profile } = db
module.exports = async ({ profile, type }) =>{
    const myProfile = profile.dataValues
    // let friends = await Profile.findOne({attributes: ["id"], where: {id: myProfile.id},include: [
    //     {model: Profile, as: "friend", attributes: ["id"], through: {attributes: []}}
    // ]})
    const involved = await Relationship.findAll({attributes: ["profileId", "friendId"], where: {[Op.or]: [
        {profileId: myProfile.id},
        {friendId: myProfile.id}
    ]}})

    let friends = Array.from(new Set(involved.map((item1) =>{
        const newitem1 = item1.dataValues
        if (newitem1.profileId === myProfile.id)
            return newitem1.friendId
        if (newitem1.friendId === myProfile.id)
            return newitem1.profileId
    })))

    friends = friends.map((item1) =>{
        const relationship = involved.filter((item2) =>{
            if(item2.profileId === myProfile.id && item2.friendId === item1)
                return true
            else if(item2.profileId === item1 && item2.friendId === myProfile.id)
                return true
            else
                return false
        })
        const result = { id: item1 }

        if (relationship.length === 2)
            result["relationshipState"] = "friend"
        else if (relationship.length === 1 && relationship[0].dataValues.profileId === myProfile.id)
            result["relationshipState"] = "request sent"
        else if (relationship.length === 1 && relationship[0].dataValues.profileId === item1)
            result["relationshipState"] = "friend request"
        else
            result["relationshipState"] = "not friend"

        return result
    })
    
    friends = friends.filter((item1) =>{
        if (type === "")
            return true
        return item1.relationshipState == type
    })

    const count = friends.length

    return { friends, count }
}