module.exports = (sequelize, DataTypes) =>{
    const Post = sequelize.define("Post", {
        title: {
            type: DataTypes.STRING,
            allowNull: false
        },
        userId: DataTypes.INTEGER
    })
    Post.associate = (models) => {
        Post.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
        Post.hasMany(models.Comment, {foreignKey: 'postId', as: 'comments'})
        Post.hasOne(models.ImagePost, {foreignKey: 'postId', as: 'imagePost'})
        //Post.hasMany(models.Like, {foreignKey: 'postId', as: 'like'})
        Post.belongsToMany(models.User, {through: "Like", foreignKey: "postId", as: "userLike"})
    };

    return Post
}