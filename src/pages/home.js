import React, {useEffect, useState} from "react";
import { FlatList } from "react-native";
import Homebar from "../components/homebar";
import CreatePost from "../components/post/createPost";
import Post from "../components/post/post";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";
import {useSelector} from 'react-redux'
import {getLoad} from '../fetch'
import path from '../path'
import { diffTime } from '../time'

const Home = ({ navigation }) => {
  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)
  const [users, setUsers] = useState([])
  const [refresh, setRefresh] = useState(false)

  const [post, setPost] = useState([])
  const token = useSelector((state) => state.Authorize.token)
  const setData = (info) =>{
    const newInfo = info.map((item1) =>{
      const diffTimeData = diffTime(item1.createdAt)
      return {...item1, time: diffTimeData.time, diffTime: diffTimeData.diffTime}
    })
    setPost(newInfo)
    setRefresh(false)
  }
  const refreshHandle = () =>{
    setRefresh(true)
    getLoad(navigation, authorize.token, path.urlPost, setData, signal)
  }

  useEffect(() => {
    getLoad(navigation, authorize.token, path.urlPost, setData, signal)
    getLoad(navigation, authorize.token, path.urlSearchUser, setUsers, signal)
  }, [])
  
  
 

  // useEffect(() =>{
  //   fetch("http://364edd12ecf8.ngrok.io/register/student")
  //     .then((response) => response.json())
  //     .then((json) => console.log(json))
  // }, [])

  // const addPost = (title) => {
  //   const newPost = { id, title, like: 0 };
  //   setPosts([newPost, ...posts]);
  //   id += 1;
  // };

  // const likePost = (id, status) => {
  //   const likePost = posts.filter((value) => id == value.id);
  //   const allPost = posts.filter((value) => id != value.id);
  //   if (status) {
  //     likePost[0].like -= 1;
  //   } else {
  //     likePost[0].like += 1;
  //   }
  //   allPost.push(...likePost);
  //   const allPostSorted = allPost.sort((a, b) => b.id - a.id);
  //   setPosts([...allPostSorted]);
  // };

  const renderPostItem = ({ item }) => {
      const user = users.find((value) => value.userId === item.userId)
      return (
        <Post
          key={item.id.toString()}
          id={item.id}
          title={item.title}
          imagePost={item.imagePost}
          data={item}
          initLike={item.isLiked}
          likeCount={item.likeCount}
          navigation={navigation}
          userId={user} 
        />
      )
  };

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <FlatList
        ListHeaderComponent={(
          <React.Fragment>
            <Homebar navigation={navigation} title="Home"/>
            <CreatePost post={post} setPost={setPost} navigation={navigation}/>
          </React.Fragment>
        )}
        data={post}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
        refreshing={refresh}
        onRefresh={refreshHandle}
      />
    </PrimaryContainer>
  );
};


export default Home;
