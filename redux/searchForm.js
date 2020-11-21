const todo = "search"

const initial = {
    age: [0, 100],
    tag: [],
    country: undefined,
    gender: undefined
}

export const Search = (state = initial, action) =>{
    switch(action.type){
        case todo:
            return {age: action.age, tag: action.tag, country: action.country, gender: action.gender}
        default:
            return state
    }
}

export const actionSearch = (search) =>{
    return (dispatch) =>{
        dispatch({
            type: todo,
            age: search.age,
            tag: search.tag,
            country: search.country,
            gender: search.gender
        })
    }
}