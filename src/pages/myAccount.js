import React, { useEffect, useState } from "react";
import Account from './account'
import {useSelector} from 'react-redux'
import {View} from 'react-native'

const MyAccount = ({navigation}) => {
    const authorize = useSelector((state) => state.Authorize.authorize)
    const {token} = authorize
    const [id, setId] = useState(false)
    const url = 'http://localhost:3000/account/my-profile'


    useEffect(() =>{
        fetch(url,{
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token,
            }
            
        })
        .then( async (res) => {
                if(res.status === 200){
                    const data = await res.json()
                    setId(data)
                }
                else if(res.status === 401){
                    navigation.navigate("Login")
                }
            }
        )   
    }, [authorize])

    if(id){
        return(
            <Account navigation={navigation} id={id} />
        ) 
    }
    else{
        return(
            <View></View>
        )
    }
    

}

export default MyAccount;
