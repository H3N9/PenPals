import React from 'react'
import {StyleSheet, View, Text} from 'react-native'
import Navbar from '../components/navbar'
import Homebar from '../components/homebar'
import {LinearGradient} from 'expo-linear-gradient'

const Account = ({navigation}) =>{
    return (
        <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
        <View style={styles.home}>
            <View style={{flex:1}}>
                <Homebar />
            </View>
            <View style={{flex:12}}>
                <Text>Hellow</Text>
            </View>
            <View style={{flex:1}}>
                <Navbar navigation={navigation}/>
            </View>
            
        </View>
        </LinearGradient>
    )
}
const styles = StyleSheet.create({
    home:{
        flex:1,
        flexDirection: 'column'
    },
})
export default Account