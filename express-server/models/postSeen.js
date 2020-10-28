module.exports = (sequelize, DataTypes) =>{
    const PostSeen = sequelize.define("PostSeen", {
        postId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    })

    PostSeen.associate = (models) =>{
        PostSeen.belongsTo(models.Post, {foreignKey: 'postId'})
        PostSeen.belongsTo(models.User, {foreignKey: 'userId'})
    }

    return PostSeen
}