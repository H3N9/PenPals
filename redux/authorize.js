const todo = "Change token"

const initial = {
    token:""
}

export const Authorize = (state = initial, action) => {
    switch(action.type){
        case todo:
            return {token:`Bearer ${action.token}`}
        default:
            return state
    }
}

export const actionAuthorize = (token) => {
    return (dispath) => {
        dispath({
            type:todo,
            token
        })
    }
}
