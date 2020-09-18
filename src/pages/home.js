import React, { useState } from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import CreatePost from "../components/friend/createPost";
import Post from "../components/friend/post";
import MainStyle from "../style/mainStyle";

let id = 1;

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([]);

  const addPost = (title) => {
    const newPost = { id, title, like: 0 };
    setPosts([newPost, ...posts]);
    id += 1;
  };

  const likePost = (id, status) => {
    const likePost = posts.filter((value) => id == value.id);
    const allPost = posts.filter((value) => id != value.id);
    if (status) {
      likePost[0].like += 1;
    } else {
      likePost[0].like -= 1;
    }
    allPost.push(...likePost);
    const allPostSorted = allPost.sort((a, b) => b.id - a.id);
    setPosts([...allPostSorted]);
  };

  return (
    <View style={MainStyle.mainBackground}>
      <Homebar navigation={navigation} />
      <ScrollView style={{ flex: 1 }}>
        <CreatePost addPost={addPost} />
        {posts.map((post) => (
          <Post
            key={post.id}
            id={post.id}
            title={post.title}
            like={post.like}
            likePost={likePost}
          />
        ))}
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Home;
