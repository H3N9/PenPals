module.exports = (sequelize, DataTypes) =>{
    const Tag = sequelize.define('Tag', {
        name : {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        type : {
            type: DataTypes.ENUM,
            values: ['hobbies', 'favorites']
        }
    })
    Tag.associate = (models) =>{
        Tag.belongsToMany(models.Profile, {through: 'UserTag', foreignKey: 'tagId', as: 'profile'})
        Tag.hasOne(models.FavTag, {foreignKey: 'tagId', as: 'favTag', onDelete: 'CASCADE'})
    }

    return Tag
}