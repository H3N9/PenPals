const todo = "Change token"

const initial = {
    authorize:{
        userId:"",
        token:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwidXNlcm5hbWUiOiJhZG1pbjEiLCJwYXNzd29yZCI6IiQyYiQxMCRRalBsUlF4MHl5VFVaMnNIQzkxSDkuMkQ4ZmZ0VGZML3dVS2NCb0x3cVNBLkNodDFJcjd1UyIsImNyZWF0ZWRBdCI6IjIwMjAtMTAtMTRUMTY6NDg6MTIuNDIxWiIsInVwZGF0ZWRBdCI6IjIwMjAtMTAtMTRUMTY6NDg6MTIuNDIxWiIsImlhdCI6MTYwMzEyNjYyNn0.T5xqwByR9tw7Dn2TujOORDdDNS_K_xSqUy_rAsLjY5g"
    }
}

export const Authorize = (state = initial, action) => {
    switch(action.type){
        case todo:
            return {authorize:{userId:action.id, token:`Bearer ${action.token}`}}
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
