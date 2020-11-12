import React from "react";
import { View, Image, StyleSheet, Dimensions, Text } from "react-native";

const ImagePost = ({imageUrl}) => {
  return (
    <View>
      <Image
        style={styles.image}
        source={{uri : imageUrl}}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    height: Dimensions.get("window").width - 50,
    width: "100%",
    marginTop: 5,
  },
});

export default ImagePost;
