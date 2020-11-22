import React from "react";
import {
  Image,
  FlatList,
  View,
  StyleSheet,
  Dimensions,
  SafeAreaView,
} from "react-native";
import path from '../../../path'
import Post from '../../post/post'
import {useSelector} from 'react-redux'

const RenderProfile = ({ posts, AccountDetailSection, state, refreshAfterDelete }) => {
  const authorize = useSelector((state) => state.Authorize.authorize)
  const urlImage = path.urlImage
  const column = state === 'photo'? 2:1
  const renderPost = ({ item }) => {
    if(item.imagePost !== null && state === 'photo'){
      return <Image key={item.id.toString()} source={{uri:urlImage+item.imagePost}} style={styles.image} />;
    }
    else if(state === 'all'){
      return <Post id={item.id} title={item.title} imagePost={item.imagePost} data={item} initLike={item.isLiked} likeCount={item.likeCount} isUser={item.userId === authorize.userId} refreshAfterDelete={refreshAfterDelete} />
    }
    return null
    
  };
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <FlatList
        ListHeaderComponent={AccountDetailSection}
        data={posts}
        renderItem={renderPost}
        keyExtractor={(item) => item.id.toString()}
        numColumns={1}
        showsVerticalScrollIndicator={false}
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

export default RenderProfile;
