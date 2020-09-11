import React from 'react'
import {StyleSheet, View} from 'react-native'
import Navbar from '../components/navbar'
import Homebar from '../components/homebar'
import Content from '../components/content'

const Home = () =>{
    return (
        <View style={styles.home}>
            <View style={{flex:1}}>
                <Homebar />
            </View>
            <View style={{flex:12}}>
                <Content />
            </View>
            <View style={{flex:1}}>
                <Navbar />
            </View>
            
        </View>
    )
}
const styles = StyleSheet.create({
    home:{
        flex:36,
        flexDirection: 'column'
    },
})
export default Home