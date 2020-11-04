import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputWithLabel from './components/inputWithLabel'
import SmallBtn from './components/smallBtn'
import Logo from './components/logo'
import ConditionText from './components/conditionText'

const BoxRegister = ({username, repassword, password, handleUsename, handlePassword, handleRePassword, handleSubmit, valid, handleLogin}) => {

    return(
        <View style={styles.contanier}>
            <View>
                <Logo />
                <InputWithLabel valid={valid.error} state={handleUsename} secure={false} value={username} title={"Username"} />
                <InputWithLabel valid={valid.error} state={handlePassword} secure={true} value={password} title={"Password"} />
                <InputWithLabel valid={valid.error} state={handleRePassword} secure={true} value={repassword} title={"Re-Agian"} />
                {valid.error && <ConditionText title={valid.text} />}
                <View style={styles.boxBtn}>
                    <View>
                        <SmallBtn handle={handleLogin} title={"Login"} />
                    </View>
                    <View>
                        <SmallBtn handle={handleSubmit} title={"Register"} />
                    </View>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    contanier:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    boxBtn:{
        flex: 1,
        flexDirection: 'row',
        alignSelf: 'flex-end'
    }
})


export default BoxRegister