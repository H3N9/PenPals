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
    // User.associate = (models) =>{
    //     User.belongsToMany(models.Tag, {through: 'UserTag', foreignKey: 'userId', as: 'tag'})
    // }

    User.getAll = () =>{
       return User.findAll({attributes: ["id", "username", "firstName", "lastName"], include:["tag"]})
    }

    return User
}