import React from 'react'
import {StyleSheet, View} from 'react-native'
import Navbar from '../components/navbar'
import Homebar from '../components/homebar'
import Content from '../components/content'

const Home = () =>{
    return (
        <View style={styles.home}>
            <Homebar />
            <Content />
            <Navbar />
            
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