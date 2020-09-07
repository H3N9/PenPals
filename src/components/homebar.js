import React from 'react'
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'

const Homebar = () => {
    return (
        <View style={styles.homebarWraper}>
            <View style={styles.homebar}>
                <View style={styles.boxContent, {flex: 3}}>
                    <Text style={styles.textButton}>PenPals</Text>
                </View>
                <View style={styles.boxContent}>
                    <TouchableOpacity style={styles.button}>
                        <Text style={styles.textButton}>Search</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homebarWraper:{
        backgroundColor: "transparent",
        justifyContent: "center",
        marginTop: 25 ,
        paddingTop: 10,
        paddingBottom: 10
    },
    homebar: {
        margin: 0,
        flexDirection: 'row',
        justifyContent: "space-around",
    },
    boxContent: {
        backgroundColor: 'transparent',
        flex: 1,
    },
    button: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'center',

    },
    textButton: {
        color: "#FFF",
        textAlign: "center",
        fontSize: 25
    }
})

export default Homebar