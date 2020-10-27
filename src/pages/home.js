import React, {useEffect} from "react";
import { FlatList } from "react-native";
import Homebar from "../components/homebar";
import CreatePost from "../components/post/createPost";
import Post from "../components/post/post";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";
import {useSelector} from 'react-redux'


const Home = ({ navigation }) => {

  const token = useSelector((state) => state.Authorize.token)
  useEffect(() => {

  }, [])
  
  const initData = [
    {
      id:"1",
      user:"Username",
      type:{
        image:"image",
        text:""
      },
      date: "50m",
      like:true
    },
    {
      id: "2",
      user: "Username",
      type: {
        image: "image",
        text:
          "ครอบครัวของผมคือมาจาก กาบอง แต่ผมยังมีรากเหง้าใน กาน่า ด้วยที่ซึ่ง โธมัส มาจากที่นั่น ดังนั้นเราก็เป็นครอบครัวเดียวกันด้วย! มันเป็นเรื่องดีสำหรับนักเตะอายุน้อยบางคนของเรา ที่ได้มีนักเตะแบบเขาอยู่ในทีม, ความสามารถในการฝึกฝน, พวกเขาจะได้เรียนรู้มากมายจากเขา.ปิแอร์-เอเมอริค โอบาเมย็องกล่าวถึง โธมัส ปาร์เตย์.",
      },
      date: "50m",
      like:true
    },
    {
      id: "3",
      user: "Username",
      type: {
        image: "",
        text: '"ควย" \n ดาวิด ลุยซ์ กล่าวถึง กาเบรียล มากาลเญส',
      },
      date: "50m",
      like:false
    },
  ]

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
    if (item.id == "1") {
      return (
        <React.Fragment>
          <Homebar navigation={navigation} />
          <CreatePost />
          <Post
            key={item.id}
            id={item.id}
            type={item.type}
            like={item.like}
            date={item.date}
            user={item.user}
          />
        </React.Fragment>
      );
    } else {
      return (
        <Post
          key={item.id}
          id={item.id}
          type={item.type}
          like={item.like}
          date={item.date}
          user={item.user}
        />
      );
    }
  };

  return (
    <PrimaryContainer style={MainStyle.mainBackground}>
      <FlatList
        data={initData}
        renderItem={renderPostItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </PrimaryContainer>
  );
};


export default Home;
