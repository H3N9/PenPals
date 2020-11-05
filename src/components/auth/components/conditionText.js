import React from 'react'
import { View, StyleSheet } from 'react-native'
import { TextPrimary } from "../../../style/themeComponent";
import MainStyle from '../../../style/mainStyle'
import { Entypo } from '@expo/vector-icons'; 

const ConditionText = ({title}) => {

    return(
        <View style={[styles.container, MainStyle.shadow]}>
            <Entypo name="circle-with-cross" size={22} color="#FFF" />
            <TextPrimary style={styles.text}>{title}</TextPrimary>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        marginVertical: 10,
        padding: 5,
        alignItems: 'center',
        backgroundColor: "rgba(258,60,60, 0.95)",
        borderRadius: 6,
        flexDirection: "row"
    },
    text:{
        fontSize: 14,
        color: '#fff',
        fontSize: 15,
        paddingLeft: 10,
        flex: 1,
    }
})

export default ConditionText