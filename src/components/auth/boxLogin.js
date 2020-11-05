import React from 'react'
import { View, StyleSheet } from 'react-native'
import InputWithLabel from './components/inputWithLabel'
import SmallBtn from './components/smallBtn'
import Logo from './components/logo'
import ConditionText from './components/conditionText'


const BoxLogin = ({username, password, handleUsename, handlePassword, handleSubmit, valid, handleRegister}) => {
    return(
        <View style={styles.contanier}>
            <View>
                <Logo />
                <InputWithLabel valid={valid.error} state={handleUsename} secure={false} value={username} title={"Username"} />
                <InputWithLabel valid={valid.error} state={handlePassword} secure={true} value={password} title={"Password"} />
                {valid.error && <ConditionText title={valid.text} />}
                <View style={styles.boxBtn}>
                    <View>
                        <SmallBtn handle={handleRegister} title={"Register"} />
                    </View>
                    <View>
                        <SmallBtn handle={handleSubmit} title={"Login"} />
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

export default BoxLogin