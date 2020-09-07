import React from 'react'
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native'


const Navbar = () =>{
    return (
        <View style={styles.navbar}>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text>1</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text>2</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text>3</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.boxContent}>
                <TouchableOpacity style={styles.button}>
                    <Text>4</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    navbar:{
        backgroundColor: "#1a396e",
        flex: 4,
        flexDirection: 'row',
    },
    boxContent:{
        backgroundColor: '#1a396e',
        flex: 1,
        
    },
    button:{
        alignItems: 'center',
        flex:1,
        justifyContent: 'center',
    }
})

export default Navbar