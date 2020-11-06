import React from 'react'
import { View, StyleSheet, Text } from 'react-native'
import InputWithLabel from './components/inputWithLabel'
import { LinearGradient } from 'expo-linear-gradient';
import SmallBtn from './components/smallBtn'
import Logo from './components/logo'
import ConditionText from './components/conditionText'

const BoxRegister = ({username, repassword, password, handleUsename, handlePassword, handleRePassword, handleSubmit, valid, handleLogin}) => {

    return(
        <LinearGradient
        colors={["#2082e6", "#223372"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 0.9, y: 0.5 }}
        style={styles.container}
        >   
            <View style={{flex: 1, justifyContent: "space-between"}}>
                <View>
                    <Text style={styles.registerText}>Register</Text>
                    {valid.error && <ConditionText title={valid.text} />}
                    <InputWithLabel valid={valid.error} state={handleUsename} secure={false} value={username} title={"Username"} />
                    <InputWithLabel valid={valid.error} state={handlePassword} secure={true} value={password} title={"Password"} />
                    <InputWithLabel valid={valid.error} state={handleRePassword} secure={true} value={repassword} title={"Comfrim Password"} />
                    <SmallBtn handle={handleSubmit} title={"Register"} />
                </View>
                <SmallBtn handle={handleLogin} title={"Back to Login"} />
            </View>          
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'space-around',
        padding: 25
    },
    registerText: {
        fontWeight: "700",
        fontSize: 35,
        color:"#fff",
        paddingVertical: 20
    }
})


export default BoxRegister