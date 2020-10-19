module.exports = (sequelize, DataTypes) =>{
    const FavTag = sequelize.define('FavTag', {
        tagId: DataTypes.INTEGER,
        categoryId: DataTypes.INTEGER
    })

    FavTag.associate = (models) =>{
        FavTag.belongsTo(models.Tag, {foreignKey: 'tagId', as: 'tag'})
        FavTag.belongsTo(models.Category, {foreignKey: 'categoryId', as: 'category'})
    }

    return FavTag

}