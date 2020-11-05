module.exports = (sequelize, DataTypes) =>{
    const PostSeen = sequelize.define("PostSeen", {
        postId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    })

    PostSeen.associate = (models) =>{
        PostSeen.belongsTo(models.Post, {foreignKey: 'postId', as: "post"})
        PostSeen.belongsTo(models.User, {foreignKey: 'userId', as: "user"})
    }

    return PostSeen
}