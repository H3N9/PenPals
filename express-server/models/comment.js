module.exports = (sequelize, DataTypes) =>{
    const Comment = sequelize.define("Comment", {
        description: {
            type: DataTypes.STRING,
            allowNull: false
        },
        postId: {type: DataTypes.INTEGER}
    }, {})

    Comment.associate = (models) => {
         Comment.belongsTo(models.Post, {foreignKey: 'postId', as: 'post'})
    }

    return Comment
}