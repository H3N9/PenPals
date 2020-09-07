import React from 'react'
import {StyleSheet, View, Text, SafeAreaView, ScrollView} from 'react-native'

const Content = () =>{
    return (
        

                
                <View style={styles.boxMain}>
                    <View style={styles.boxContent}><Text>4</Text></View>
                    <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                    <View style={styles.boxContent}></View>
                </View>
                

            


        
    )
}

const styles = StyleSheet.create({
        boxMain:{
            
            flex: 35,
            flexDirection: "column"
        },
        boxContent:{
            flex: 1,
            backgroundColor: 'black',
            margin: 5,
        }
})

export default Content