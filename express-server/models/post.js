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
        Post.hasMany(models.Comment, {as: 'comments'})
        Post.hasOne(models.ImagePost, {as: 'imagePost'})
    };

    return Post
}