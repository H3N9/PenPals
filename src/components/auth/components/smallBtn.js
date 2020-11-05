import React from 'react'
import { StyleSheet, TouchableOpacity, Text } from 'react-native'
import MainStyle from '../../../style/mainStyle'
const SmallBtn = ({title, handle}) => {

    return(
        <TouchableOpacity style={[styles.btn, MainStyle.shadow]} onPress={() => handle()}>
            <Text style={{fontSize: 18, textAlign: "center", color: "#fff", fontWeight: "bold"}}>{" "+title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn:{
        backgroundColor: "rgba(24,24,24, 0.6)",
        borderRadius: 5,
        padding: 7,
        borderRadius: 6,
        flexDirection:"row",
        justifyContent : "center",
        marginVertical: 5
    }
})


export default SmallBtn