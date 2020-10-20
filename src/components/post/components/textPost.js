import React from 'react'
import {View, StyleSheet} from 'react-native'
import { TextPrimary } from "../../../style/themeComponent";

const TextPost = ({text}) =>{
    return(
        <View>
          <TextPrimary style={styles.postTitle}>{text}</TextPrimary>
        </View>
    )
}

const styles = StyleSheet.create({
  postTitle: {
    fontSize: 20,
    fontWeight: "100",
    paddingVertical: 5,
    paddingLeft: 5
  },
})

export default TextPost