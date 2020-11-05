import React, { useEffect, useState } from "react";
import BoxProfile from '../components/account/boxProfile'
import {useSelector} from 'react-redux'
import {ActivityIndicator} from 'react-native'
import path from '../path'
import { getLoad } from '../fetch'
import { useIsFocused } from '@react-navigation/native';

const MyAccount = ({navigation}) => {
    const authorize = useSelector((state) => state.Authorize.authorize)
    const {token} = authorize
    const url = path.urlMyprofile
    const [user, setUser] = useState()
    const isFocused = useIsFocused()

    
    const controller = new AbortController
    const signal = controller.signal
    useEffect(() => {
        getLoad(navigation, token, url, setUser, signal)
      }, [isFocused])


    return (
        <React.Fragment>
            {user? <BoxProfile user={user} navigation={navigation} />:<ActivityIndicator/>}
        </React.Fragment>
    )
    
    

}

export default MyAccount;
