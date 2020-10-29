module.exports = (sequelize, DataTypes) =>{
    const ImagePost = sequelize.define("ImagePost",{
        postId: DataTypes.INTEGER,
        url: DataTypes.STRING
    })

    ImagePost.associate = (models) =>{
        ImagePost.belongsTo(models.Post, {foreignKey: 'postId', as: "post"})
    }

    return ImagePost
}