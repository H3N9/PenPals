module.exports = (posts, user) =>{
    return posts.reduce((acc1, curr1) =>{
        const data = curr1.dataValues.user.post.map((item2) => {
            // console.log(item2.dataValues.createdAt, day, hour, minute, seconds)
            const indexUserLike = item2.dataValues.userLike.findIndex((item3) => item3.dataValues.id === user.id)
            const isLiked = true?(indexUserLike !== -1):false
            const likeCount = item2.dataValues.userLike.length
            const returnData = {...item2.dataValues,
                firstName: curr1.dataValues.firstName,
                lastName: curr1.dataValues.lastName,
                profileId: curr1.dataValues.id,
                imageProfile: curr1.dataValues.image,
                isLiked,
                likeCount
            }
            delete returnData["userLike"]
            if (item2.dataValues.imagePost !== null){
                return {...returnData, 
                    imagePost: item2.dataValues.imagePost.url,
                }
            }
            return returnData
        })
        const returnData = [...acc1, ...data]
        returnData.sort((a, b) => b.id-a.id)

        return returnData
    }, [])
}