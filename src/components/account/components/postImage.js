import React from "react";
import { Image, FlatList, View, StyleSheet, Dimensions } from "react-native";
import { TextPrimary } from "../../../style/themeComponent";
import MainStyle from "../../../style/mainStyle";

const PostImage = ({ images }) => {
  const seprateImage = (value, id) => {
    return { id: id.toString(), value: value };
  };

  const imageData = images.map(seprateImage);

  const rederImage = ({ item }) => {
    return <Image key={item.id} source={item.value} style={styles.image} />;
  };
  return (
    <View>
      <TextPrimary style={[MainStyle.textBold, styles.text]}>Photo</TextPrimary>
      <FlatList
        data={imageData}
        renderItem={rederImage}
        keyExtractor={(item) => item.id}
        numColumns={3}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width / 3,
    height: Dimensions.get("window").width / 3,
    margin: 2,
    flex: 0.335,
    resizeMode: "cover",
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

export default PostImage;
