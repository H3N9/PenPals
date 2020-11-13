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

const Home = ({ navigation }) => {
  const controller = new AbortController
  const signal = controller.signal
  const authorize = useSelector((state) => state.Authorize.authorize)

  // const initData = [
  //   {
  //     id:"1",
  //     user:"Username",
  //     type:{
  //       image: "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/be/ee/3c/beee3cc9-d88b-a7db-a4fe-decf09f00908/source/600x600bb.jpg",
  //       text:""
  //     },
  //     date: "50m",
  //     like:true
  //   },
  //   {
  //     id: "2",
  //     user: "Username",
  //     type: {
  //       image: "https://is4-ssl.mzstatic.com/image/thumb/Music/v4/be/ee/3c/beee3cc9-d88b-a7db-a4fe-decf09f00908/source/600x600bb.jpg",
  //       text:
  //         "ครอบครัวของผมคือมาจาก กาบอง แต่ผมยังมีรากเหง้าใน กาน่า ด้วยที่ซึ่ง โธมัส มาจากที่นั่น ดังนั้นเราก็เป็นครอบครัวเดียวกันด้วย! มันเป็นเรื่องดีสำหรับนักเตะอายุน้อยบางคนของเรา ที่ได้มีนักเตะแบบเขาอยู่ในทีม, ความสามารถในการฝึกฝน, พวกเขาจะได้เรียนรู้มากมายจากเขา.ปิแอร์-เอเมอริค โอบาเมย็องกล่าวถึง โธมัส ปาร์เตย์.",
  //     },
  //     date: "50m",
  //     like:true
  //   },
  //   {
  //     id: "3",
  //     user: "Username",
  //     type: {
  //       image: "",
  //       text: '"ควย" \n ดาวิด ลุยซ์ กล่าวถึง กาเบรียล มากาลเญส',
  //     },
  //     date: "50m",
  //     like:false
  //   },
  // ]
  const [post, setPost] = useState([])
  const token = useSelector((state) => state.Authorize.token)
  const setData = (info) =>{
    setPost([...info])
    console.log(info)
  }

  useEffect(() => {
    getLoad(navigation, authorize.token, path.urlPost, setData, signal)
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
      return (
        <Post
          key={item.id.toString()}
          id={item.id}
          title={item.title}
          imagePost={item.imagePost}
          // date={item.date}
          user={item.userId}
          like={true}
        />
      )
  };

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <FlatList
        ListHeaderComponent={(
          <React.Fragment>
            <Homebar navigation={navigation} />
            <CreatePost post={post} setPost={setPost} navigation={navigation}/>
          </React.Fragment>
        )}
        data={post}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
        showsVerticalScrollIndicator={false}
      />
    </PrimaryContainer>
  );
};


export default Home;
