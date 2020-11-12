import React from 'react'
import { View, StyleSheet, KeyboardAvoidingView, Platform } from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import InputWithLabel from './components/inputWithLabel'
import SmallBtn from './components/smallBtn'
import Logo from './components/logo'
import ConditionText from './components/conditionText'
import { Dimensions } from "react-native";

const screenWidth = Math.round(Dimensions.get('window').width);


const BoxLogin = ({username, password, handleUsename, handlePassword, handleSubmit, valid, handleRegister}) => {
    return(
        <LinearGradient
        colors={["#2082e6", "#223372"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
        style={styles.container}
        >
            <KeyboardAvoidingView behavior={Platform.OS == "ios" ? "padding" : "height"} style={{flex: 1, justifyContent: "space-between"}}>  
                    <Logo />
                    <View>
                        {valid.error && <ConditionText title={valid.text} />}
                        <InputWithLabel valid={valid.error} state={handleUsename} secure={false} value={username} title={"Username"} />
                        <InputWithLabel valid={valid.error} state={handlePassword} secure={true} value={password} title={"Password"} />
                        <SmallBtn handle={handleSubmit} title={"Login"} /> 
                    </View>
                    <SmallBtn handle={handleRegister} title={"Register"}/>
            </KeyboardAvoidingView>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        padding: 25,
    },
})

export default BoxLogin