import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'

const Homebar = () =>{
    return (
            <View style={styles.homebar}>
                <View style={styles.boxContent}>
                    <Text style={styles.textButton}>PenPals</Text>
                </View>
                <View style={styles.boxContent}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
    )
}

const styles = StyleSheet.create({

    homebar: {
        margin: 0,
        flexDirection: 'row',
        flex:1,
    },
    boxContent: {
        flex: 1,
        justifyContent: 'center',
    },
    button:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
    },
    textButton: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 25
    }
})

export default Homebar