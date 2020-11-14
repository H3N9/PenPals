module.exports = (sequelize, DataTypes) =>{
    const Notification = sequelize.define("Notification",{
        userId: DataTypes.INTEGER,
        type: {
            type: DataTypes.ENUM,
            values: [
                'friend request', 
                'profile visitors'
            ]
        },
        senderId: DataTypes.INTEGER,
        isReaded: {
            type: DataTypes.BOOLEAN,
            defaultValue: false
        }
    })

    Notification.associate = (models) =>{
        Notification.belongsTo(models.User, {foreignKey: 'userId', as: "user"})
        Notification.belongsTo(models.User, {foreignKey: 'senderId', as: "sender"})
    }

    return Notification
}