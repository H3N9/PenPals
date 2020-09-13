import React from 'react'
import { StyleSheet, View, Image, Text, TouchableOpacity } from 'react-native'


const BoxInfo = () =>{




    return(
        <View style={styles.main}>
            <View style={styles.boxInfo}>
                <View style={styles.boxImg}>
                    <Image style={styles.img} source={require('../../../assets/5.png')} />
                </View>
                <View style={styles.boxDataInfo}>
                    <View>
                        <Text style={styles.textHead}>TU HUA KUY</Text>
                        <Text style={styles.textWhite}>Bangkok</Text>
                        <Text style={styles.textP}>I sas na hee TU</Text>
                    </View>
                    <View style={styles.BoxBtn}>
                        <TouchableOpacity style={styles.btn}><Text style={styles.textWhite}>Edit</Text></TouchableOpacity>
                    </View>
                </View>
            </View>
            <View style={styles.boxDes}>
                <Text style={styles.textP}>O ja mai yung na</Text>
            </View>
            <View style={styles.boxTag}>
                <View style={styles.boxTextTag}>
                    <Text style={styles.textWhite}>Tag:</Text>
                </View>
                <View style={styles.boxTags}>
                    <Text></Text>
                </View>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    main:{
        flex:1,
        flexDirection:'column'
    },
    boxDataInfo:{
        flex:4,
    },
    boxImg:{
        flex:3,
        justifyContent:'center',
        alignItems: 'center'
    },
    boxInfo:{
        flex:4,
        flexDirection:'row'
    },
    boxTag:{
        flex:1,
        flexDirection: 'row',
    },
    boxDes:{
        flex:1,
        padding: 8
    },
    img:{
        width:128,
        height:128,
        borderRadius:70,
    },
    BoxBtn:{
        flex: 1,
        justifyContent:'flex-end',
        padding: 8
    },
    btn:{
        alignItems: 'center',
        borderWidth: 2,
        borderColor: 'red'
    },
    textWhite:{
        color: 'white',
        fontSize: 14
    },
    textHead:{
        color: 'white',
        fontSize: 18
    },
    textP:{
        color: 'gray',
        fontSize: 14
    },
    boxTextTag:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    boxTags:{
        flex: 5,
    }
})


export default BoxInfo