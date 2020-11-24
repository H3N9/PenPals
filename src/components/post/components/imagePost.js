import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";
import path from '../../../path'
const ImagePost = ({imageUrl}) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri : path.urlImage+imageUrl}}
        resizeMode="cover"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: '100%',
    height: undefined,
    aspectRatio: 1.35,
    
  },
});

export default ImagePost;
