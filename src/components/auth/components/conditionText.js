import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextPrimary } from "../../../style/themeComponent";
import MainStyle from '../../../style/mainStyle'

const ConditionText = ({title}) => {

    return(
        <View style={styles.container}>
            <TextPrimary style={styles.text}>{title}</TextPrimary>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        margin: 10,
        alignItems: 'center'
    },
    text:{
        fontSize: 14,
        color: 'red',
    }
})

export default ConditionText