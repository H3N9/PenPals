import React, {useEffect, useState} from 'react'
import { View, TextInput, StyleSheet } from 'react-native'
import { TextPrimary } from "../../../style/themeComponent";
import MainStyle from '../../../style/mainStyle'


const InputWithLabel = ({title, state, secure, valid}) => {
    const conditionStyle = () =>{
        return valid? {backgroundColor: "#FF5350"}:{backgroundColor: 'gray'}
    }
    return(
        <View style={styles.container}>
            <View style={[styles.boxText, conditionStyle()]}>
                <TextPrimary style={[MainStyle.textWhiteBold, {fontSize: 20}]}>{title}</TextPrimary>
            </View>
            <View>
                <TextInput secureTextEntry={secure} style={styles.boxInput} onChangeText={(value) => state(value)}></TextInput>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        flexDirection:'row',
        margin: 10
    },
    boxText:{
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        flex: 1,
        paddingHorizontal: 5,
        paddingVertical: 2,
    },
    boxInput:{
        flex: 4,
        borderTopRightRadius: 5,
        borderBottomRightRadius: 5,
        backgroundColor: 'white',
        fontSize: 14,
        paddingLeft: 5
    },
    text:{
        
    }
})

export default InputWithLabel