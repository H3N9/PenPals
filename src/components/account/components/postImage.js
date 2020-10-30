import React from "react";
import {
  Image,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";

const PostImage = ({ images, AccountDetailSection }) => {
  const seprateImage = (value, id) => {
    return { id: id.toString(), value: value };
  };

  const imageData = images.map(seprateImage);

  const rederImage = ({ item }) => {
    return <Image key={item.id} source={item.value} style={styles.image} />;
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={AccountDetailSection}
        data={imageData}
        renderItem={rederImage}
        keyExtractor={(item) => item.id}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  image: {
    width: Dimensions.get("window").width,
    height: Dimensions.get("window").width / 2,
    margin: 1,
    flex: 1,
    resizeMode: "cover",
    borderRadius: 3,
  },
  text: {
    fontSize: 20,
    paddingHorizontal: 10,
  },
});

export default PostImage;
