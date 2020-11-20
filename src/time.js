export const diffTime = (createdAt) =>{
    const date = new Date(createdAt)
    const dateNow = Date.now()
    const milliseconds = date.getTime();
    let diffTime = dateNow - milliseconds
    const day = (Math.floor(diffTime / 86400000))
    diffTime = diffTime%86400000
    const hour = (Math.floor(diffTime / 3600000))
    diffTime = diffTime%3600000
    const minute = (Math.floor(diffTime / 60000))
    diffTime = diffTime%60000
    const seconds = (Math.floor(diffTime / 1000))

    let returnObj = {}
    if (day > 0)
        returnObj["time"] = day+" day"
    else if(hour > 0)
        returnObj["time"] = hour+"h"
    else if(minute > 0)
        returnObj["time"] = minute+"m"
    else if(seconds > 0)
        returnObj["time"] = seconds+"s"
    
    return {...returnObj, diffTime: {
        day, hour, minute, seconds
    }}
}