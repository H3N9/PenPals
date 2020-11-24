import React, { useState } from 'react'
import BoxRegister from '../components/auth/boxRegister'
import path from '../path'

const Register = ({navigation}) => {
    const url = path.urlRegister
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [rePassword, setRePassword] = useState("")
    const [valid, setValid] = useState({text:"", error:false})

    const handleUsername = (text) =>{
        setUsername(text)
    }

    const handlePassword = (text) =>{
        setPassword(text)
    }

    const handleRePassword = (text) =>{
        setRePassword(text)
    }

    const validatePassword = () =>{
        if(username.length < 4){
            setValid({text:"Username must have 4 characters at least.", error:true})
        }
        else if(password !== rePassword){
            setValid({text:"Password is not match.", error:true})
        }
        else if(password.length < 8 || password.length > 20){
            setValid({text:"Password must have characters between 8 and 20.", error:true})
        }
        else{
            setValid({text:"", error:false})
            submit()
        }
    }

    const handleLogin = () =>{
        navigation.navigate("Login")
    }

    const submit = async () => {
        const controller = new AbortController
        const signal = controller.signal
        const initProfile = {
            username: username,
            firstName: "",
            lastName: "",
            nation: "",
            city: "",
            intro: "Edit your profile for introduce yourself.",
            gender: "other",
            image: "man.png",
            aboutMe: "Edit your profile for introduce yourself.",
            birthdate: ""

        }

        const response = await fetch(url, {
            method: "POST",
            signal,
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password,
                profile:initProfile
            })
        })
        if(response.status === 200){
            setUsername("")
            setPassword("")
            setRePassword("")
            navigation.navigate("Login")
        }
        else if(response.status === 400){
            setValid({text:"Username has already exited.", error:true})
        }
    }


    return(
        <BoxRegister 
            username={username} 
            repassword={rePassword} 
            password={password} 
            handleUsename={handleUsername} 
            handlePassword={handlePassword}
            handleRePassword={handleRePassword} 
            handleSubmit={validatePassword}
            valid={valid}
            handleLogin={handleLogin} />   
    )
}

export default Register