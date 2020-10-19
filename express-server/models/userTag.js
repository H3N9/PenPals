module.exports = (sequelize, DataTypes) => {
    const UserTag = sequelize.define('UserTag', {
        userId : DataTypes.INTEGER,
        tagId : DataTypes.INTEGER
    })
    UserTag.associate = (models) =>{
        UserTag.belongsTo(models.Profile, {foreignKey: 'userId'})
        UserTag.belongsTo(models.Tag, {foreignKey: 'tagId'})
    }

    return UserTag
}