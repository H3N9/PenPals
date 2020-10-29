const filterUserByTag = require('./filterUserByTag')
const { Op } = require('sequelize')

module.exports = async (req) =>{
    const dataForm = req.body
    const user = req.user
    let query = {profileQuery: {userId: {[Op.not]: user.id}}, otherQuery: { user }}
    if (dataForm["tag"] !== undefined && dataForm["tag"].length != 0){
        query.profileQuery["id"] = await filterUserByTag(dataForm.tag)
    }
    if (dataForm["age"] !== undefined && dataForm["age"].length != 0){
        query.otherQuery["age"] = dataForm["age"]
    }
    if (dataForm["country"] !== undefined && dataForm["country"] !== ""){
        query.profileQuery["nation"] = dataForm["country"]
    }
    
    return query
}