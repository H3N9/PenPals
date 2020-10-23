module.exports = (sequelize, DataTypes) =>{
    const Profile = sequelize.define("Profile", {
        firstName: DataTypes.STRING,
        lastName: DataTypes.STRING,
        nation: DataTypes.STRING,
        city: DataTypes.STRING,
        intro: DataTypes.STRING,
        gender: {
            type: DataTypes.ENUM,
            values: ['male', 'female', 'other']
        },
        age: DataTypes.INTEGER,
        image: DataTypes.STRING,
        aboutMe: DataTypes.STRING
    })

    Profile.associate = (models) =>{
        Profile.belongsToMany(models.Tag, {through: 'UserTag', foreignKey: 'userId', as: 'tag'})
        Profile.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
    }

    return Profile
}