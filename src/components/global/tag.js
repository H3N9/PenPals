import React from 'react'
import {StyleSheet, Text, TouchableOpacity} from 'react-native'

const Tag = ({tagName}) => {
    const tag = tagName
    return (
        <TouchableOpacity><Text style={styles.tagText}>{tag}</Text></TouchableOpacity>
    )
}
const styles = StyleSheet.create({
    tagText: {
        marginRight: 10,
        marginTop: 2,
        padding: 2,
        borderRadius: 5,
        backgroundColor: "#FF5350",
        fontSize: 12,
      },
})
export default Tag