import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import MainStyle from '../../../style/mainStyle'

const SmallBtn = ({title, handle}) => {

    return(
        <TouchableOpacity style={styles.btn} onPress={() => handle()}>
            <Text style={[MainStyle.textWhiteBold, {fontSize: 18}]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: "#FF5350",
        borderRadius: 5,
        margin: 5,
        alignItems: 'center',
        paddingHorizontal: 5,
        paddingVertical: 2
    }
})


export default SmallBtn