const filterUserByTag = require('./filterUserByTag')

module.exports = async (req) =>{
    const dataForm = req.body
    const user = req.user
    let query = {profileQuery: {}, otherQuery: { user }}
    if (dataForm["tag"] !== undefined && dataForm["tag"].length != 0){
        query.profileQuery["id"] = await filterUserByTag(dataForm.tag)
    }
    if (dataForm["age"] !== undefined && dataForm["age"].length != 0){
        query.otherQuery["age"] = dataForm["age"]
    }
    
    return query
}