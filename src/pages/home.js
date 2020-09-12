import React from 'react'
import {StyleSheet, View, ScrollView } from 'react-native'
import Navbar from '../components/navbar'
import Homebar from '../components/homebar'
import Content from '../components/content'

const Home = () =>{
    return (
        <View style={styles.home}>
            <Homebar />
            <ScrollView style={{flex: 1}}>
                <Content />
                <Content />
            </ScrollView>
            <Navbar />       
        </View>
    )
}
const styles = StyleSheet.create({
    home:{
        flex: 1,
        flexDirection: 'column'
    },
})
export default Home