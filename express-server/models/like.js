module.exports = (sequelize, DataTypes) =>{
    const Like = sequelize.define("Like",{
        postId: DataTypes.INTEGER,
        userId: DataTypes.INTEGER
    })

    Like.associate = (models) =>{
        Like.belongsTo(models.Post, {foreignKey: 'postId', as: "post"}),
        Like.belongsTo(models.User, {foreignKey: 'userId', as: "user"})
    }

    return Like
}