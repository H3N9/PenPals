module.exports = (sequelize, DataTypes) => {
    const User = sequelize.define('User', {
        username: {
            type: DataTypes.STRING,
            allowNull: false,
            unique: true
        },
        password: DataTypes.STRING,
    },
    // {
    //     defaultScope: {
    //         attributes: { exclude: ['password'] }
    //     }
    // }
    )
    User.associate = (models) =>{
        User.hasOne(models.Profile, {foreignKey: 'userId', as: 'profile'})
    }

    User.getAll = () =>{
       return User.findAll({attributes: ["id", "username", "firstName", "lastName"], include:["tag"]})
    }

    return User
}