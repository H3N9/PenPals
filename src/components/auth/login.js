import React, {useState} from 'react'
import {View, TextInput, TouchableOpacity, StyleSheet, Text} from 'react-native'
import { PrimaryContainer, TextPrimary } from "../../style/themeComponent";
import { useDispatch } from 'react-redux'
import { actionAuthorize } from '../../../redux/authorize'
import schema from "../../schema"


const Login = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [status, setStatus] = useState(false)
    const dispatch = useDispatch()

    //const url = 'http://localhost:3000/auth/login'
    const url = schema.url

    const handleUsername = (value) =>{
        setUsername(value)
    }

    const handlePassword = (value) =>{
        setPassword(value)
    }

    const reDirect = async () =>{
        const response = await fetch(url+"/auth/login", {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
              })
        }).catch(err => "Mute error")
        console.log(response)
        if(response.status === 200){
            const data = await response.json()
            dispatch(actionAuthorize(data))
            navigation.navigate("HomeTab")
        }
        else if(response.status === 422){
            setStatus(!status)
        }

        
    }

    const handleUnauth = (status) =>{
        if(status){
            return <Text style={styles.redText}>Username or Password wrong!</Text>
        }
    }

    return(
        <PrimaryContainer style={styles.iboxnput}>
            <View style={styles.input}>
                <TextInput value={username} onChangeText={handleUsername} style={styles.input} placeholder={"Username"} />
            </View>
            <View style={styles.input}>
                <TextInput value={password} secureTextEntry={true} onChangeText={handlePassword} style={styles.input} placeholder={"Password"}/>
            </View>
            {handleUnauth(status)}
            <View style={styles.boxButton}>
                <TouchableOpacity onPress={reDirect}><TextPrimary>Login</TextPrimary></TouchableOpacity>
                <TouchableOpacity><TextPrimary>Register</TextPrimary></TouchableOpacity>
            </View>
            
        </PrimaryContainer>
    )
}

const styles = StyleSheet.create({
    box:{
        flexDirection: 'column',
        flex: 1,
    },
    boxButton:{
        flexDirection:'row'
    },
    boxInput:{
        padding: 10,
    },
    input:{
        borderWidth: 1,
        borderColor: 'red'
    },
    redText:{
        color:'red'
    }
})

export default Login