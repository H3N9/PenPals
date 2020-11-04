

export const getLoad = (navigation, token, url, state) => {
    fetch(url, {
        method: 'GET',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        }     
    })
    .then( async (response) => {
        if(response.status === 200){
            const json = await response.json()
            state(json)
            
        }
        else if(response.status === 401){
            navigation.navigate("Login")
        }
    })
    .catch((error) => {
        console.log(error)
    })
}

export const postLoad = (navigation, token, url, body, state) => {
    fetch(url, {
        method: 'POST',
        headers:{
            Accept: 'application/json',
            'Content-Type': 'application/json',
            Authorization: token,
        },
        body: JSON.stringify(body)
    })
    .then( async (response) => {
        if(response.status === 200){
            const json = await response.json()
            state(json)
        }
        else if(response.status === 401){
            navigation.navigate("Login")
        }
    })
    .catch((error) => {
        console.log(error)
    })
}
