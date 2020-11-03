const users = []


const userJoin = (id, user, room) =>{
    const dataPack = {id, user, room}
    const index = users.findIndex(val => val.user === dataPack.user)
    if(index === -1){
        users.push(dataPack)
    }
    else{
        users[index] = dataPack
    }
    
    return dataPack
}

const userLeave = (id) => {
    const index = users.findIndex(user => user.id === id)
    if(index !== -1){
        return users.splice(index, 1)
    }
    return false
}

const currentUser = (id) =>{
    return users.find(user => user.id === id)
}

module.exports = {
    userJoin,
    currentUser,
    userLeave
}