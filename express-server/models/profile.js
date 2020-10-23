const moment = require('moment')

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
        image: DataTypes.STRING,
        aboutMe: DataTypes.STRING,
        birthdate: {
            type: DataTypes.DATEONLY,
            get: function(){
              return moment.utc(this.getDataValue('birthdate')).format('YYYY-MM-DD');
            }
        }
    })

    Profile.associate = (models) =>{
        Profile.belongsToMany(models.Tag, {through: 'UserTag', foreignKey: 'userId', as: 'tag'})
        Profile.belongsTo(models.User, {foreignKey: 'userId', as: 'user'})
        Profile.belongsToMany(models.Profile, {through: 'Relationship',foreignKey: 'profileId', as: "friend"})
    }

    return Profile
}