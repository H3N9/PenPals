import React, { useEffect } from "react";
import Account from './account'
import {useSelector} from 'react-redux'
import {View, ActivityIndicator} from 'react-native'

const MyAccount = ({navigation}) => {
    const authorize = useSelector((state) => state.Authorize.authorize)
    const {token} = authorize
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
                    navigation.navigate("Account", {user:data[0]})
                }
                else if(res.status === 401){
                    navigation.navigate("Login")
                }
            }
        )   
    }, [authorize])

    return(
        <ActivityIndicator />
    )
    

}

export default MyAccount;
