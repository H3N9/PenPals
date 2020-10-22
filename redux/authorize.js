const todo = "Change token"

const initial = {
    authorize:{
        id:"",
        token:""
    }
}

export const Authorize = (state = initial, action) => {
    switch(action.type){
        case todo:
            return {authorize:{id:action.id, token:`Bearer ${action.token}`}}
        default:
            return state
    }
}

export const actionAuthorize = (authorize) => {
    return (dispath) => {
        dispath({
            type:todo,
            id:authorize.id,
            token:authorize.token
        })
    }
}
