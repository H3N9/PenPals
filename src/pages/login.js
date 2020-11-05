import React, {useState} from 'react'
import BoxLogin from '../components/auth/boxLogin'
import { useDispatch } from 'react-redux'
import { actionAuthorize } from '../../redux/authorize'
import path from '../path'


const Login = ({navigation}) => {
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [valid, setValid] = useState({text:"", error:false})
    const dispatch = useDispatch()
    const url = path.urlLogin
    const handleUsername = (value) =>{
        setUsername(value)
    }

    const handlePassword = (value) =>{
        setPassword(value)
    }

    const handleRegister = () =>{
        navigation.navigate("Register")
    }

    const reDirect = async () =>{
        const controller = new AbortController
        const signal = controller.signal
        const response = await fetch(url, {
            method: 'POST',
            signal,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
              })
        }).catch(err => "Mute error")
        if(response.status === 200){
            const data = await response.json()
            dispatch(actionAuthorize(data))
            setValid({text:"", error:false})
            setUsername("")
            setPassword("")
            navigation.navigate("HomeTab")
        }
        else if(response.status === 422){
            setValid({text:"Username or password is wrong.", error:true})
        }

        
    }

    return(
        <BoxLogin
            username={username} 
            password={password} 
            handleUsename={handleUsername} 
            handlePassword={handlePassword}
            handleSubmit={reDirect}
            handleRegister={handleRegister}
            valid={valid} />
    )
}

export default Login