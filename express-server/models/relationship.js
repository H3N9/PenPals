module.exports = (sequelize, DataTypes) =>{
    const Relationship = sequelize.define("Relationship", {
        profileId : DataTypes.INTEGER,
        friendId : DataTypes.INTEGER
    })

    Relationship.associate = (models) =>{
        Relationship.belongsTo(models.Profile, {foreignKey: 'profileId'})
        Relationship.belongsTo(models.Profile, {foreignKey: 'friendId'})
    }

    return Relationship
}