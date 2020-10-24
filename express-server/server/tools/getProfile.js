const db = require('../../models')
const { User, Profile, Tag, Category, FavTag, Relationship } = db
const { Op } = require('sequelize')

module.exports = async ({ profileQuery, otherQuery }) =>{
    const dataProfile = await Profile.findAll({
    where: profileQuery,
    attributes: {exclude: ["createdAt", "updatedAt"]},
    include: [
        {model: Tag, as: "tag", attributes:["id", "name", "type"], through: { attributes: [] }, include: [
            {model: FavTag, as: "favTag", include: ["category"]}
        ]},
        {model: User, as: "user", attributes:["username"]},
        {model: Profile, as: "friend"}
    ],
    })

    //console.log(dataProfile[0].tag.dataValues)

    let profile = dataProfile.map((item) =>{
        item.dataValues["username"] = item.user.username
        delete item.dataValues["user"]
        return item.dataValues
    })

    profile.forEach((item1, index) =>{
        item1["hobbies"] = [{name: "tag", list: dataProfile[index].tag.filter((item2) =>{
        return item2.type === 'hobbies'
        })}]

        item1.hobbies[0].list = item1.hobbies[0].list.map((item2) =>{
        delete item2.dataValues["favTag"]
        return item2
        })

        item1["favorites"] = Array.from(new Set(dataProfile[index].tag.map((item2) =>{
        if (item2.type === "favorites"){
            return item2.favTag.category.name
        }
        })))

        item1.favorites = item1.favorites.filter((item2) =>{
        return item2
        })

        item1.favorites = item1.favorites.map((item2) =>{
        return {name: item2, list: dataProfile[index].tag.filter((item3) =>{
            return item3.type === 'favorites' && item3.favTag.category.name === item2
        })}
        })

        item1.favorites = item1.favorites.map((item2) =>{
        item2.list = item2.list.map((item3) =>{
            item3.type = item3.favTag.category.name
            delete item3.dataValues["favTag"]
            return item3
        })
        return item2
        })
        const today = new Date()
        const birthdate = new Date(item1.birthdate)
        let age = today.getFullYear() - birthdate.getFullYear()
        const m = today.getMonth() - birthdate.getMonth();
        if (m < 0 || (m === 0 && today.getDate() < birthdate.getDate())) {
            age--;
        }
        item1['age'] = age
        //item1['friend'] = ["2"]
        item1['describe'] = item1.aboutMe
        delete item1["tag"]
    })
    if (otherQuery["age"] !== undefined && otherQuery["age"].length === 2){
        const ageRange = otherQuery["age"]
        profile = profile.filter((item1) =>{
            return item1.age >= ageRange[0] && item1.age <=  ageRange[1]
        })
    }
    return profile
}