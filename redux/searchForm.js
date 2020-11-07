const todo = "search"

const initial = {
    age: [0, 100],
    tag: [],
}

export const Search = (state = initial, action) =>{
    switch(action.type){
        case todo:
            return {age: action.age, tag: action.tag}
        default:
            return state
    }
}

export const actionSearch = (search) =>{
    return (dispatch) =>{
        dispatch({
            type: todo,
            age: search.age,
            tag: search.tag
        })
    }
}