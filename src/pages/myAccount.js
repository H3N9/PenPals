import React, { useEffect, useState } from "react";
import BoxProfile from '../components/account/boxProfile'
import {useSelector} from 'react-redux'
import {ActivityIndicator} from 'react-native'
import path from '../path'

const MyAccount = ({navigation}) => {
    const authorize = useSelector((state) => state.Authorize.authorize)
    const {token} = authorize
    const url = path.urlMyprofile
    const [isLoading, setLoading] = useState(true);
    const [user, setUser] = useState({})

    useEffect(() => {
        fetch(url, {
            method: 'GET',
            headers:{
                Accept: 'application/json',
                'Content-Type': 'application/json',
                Authorization: token,
            }     
        })
          .then((response) => {
              return response.json()
            })
          .then((json) => {
              setUser(json[0])
              setLoading(false)
            })
          .catch((error) => {
              navigation.navigate("Login")
            })
      }, [authorize]);

    return (
        <React.Fragment>
            {isLoading ? <ActivityIndicator/>:(
                <BoxProfile user={user} navigation={navigation} />
            )}
        </React.Fragment>
    )

    // useEffect(() =>{
    //     fetch(url,{
    //         method: 'GET',
    //         headers:{
    //             Accept: 'application/json',
    //             'Content-Type': 'application/json',
    //             Authorization: token,
    //         }
            
    //     })
    //     .then( async (res) => {
    //         if(res.status === 200){
    //             const data = await res.json()
    //             setUser(data)
    //         }
    //         else if(res.status === 401){
    //             navigation.navigate("Login")
    //         }
    //     }
    //     )   
    // }, [authorize])

    // if(user){
    //     return(
    //         <BoxProfile user={user} navigation={navigation} />
    //     )
    // }
    // else{
    //     return(
    //         <ActivityIndicator />
    //     )
    // }
    
    

}

export default MyAccount;
