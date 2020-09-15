import React, {useState} from "react";
import { StyleSheet, View, ScrollView, Text } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import CreatePost from '../components/friend/createPost'
import Post from '../components/friend/post'

let id = 1

const Home = ({ navigation }) => {
  const [posts, setPosts] = useState([])

  const addPost = (title) => {
    const newPost = {id, title};
    setPosts([newPost, ...posts]);
    id += 1;
  }

  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
      <Homebar navigation={navigation} />
      <ScrollView style={{flex: 1}}>
        <CreatePost addPost={addPost} />
        {posts.map((post) => <Post key={post.id} id={post.id} title={post.title}/>)}
      </ScrollView>
      <Navbar navigation={navigation} />
    </View>
  );
};

export default Home;
