const filterUserByTag = require('./filterUserByTag')

module.exports = async (dataForm) =>{
    let query = {profileQuery: {}, otherQuery: {age: dataForm.age}}
    if (dataForm["tag"] !== undefined && dataForm["tag"].length != 0){
        query.profileQuery["id"] = await filterUserByTag(dataForm.tag)
    }
    
    return query
}