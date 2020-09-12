import React from "react";
import { Dimensions } from "react-native";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const screenHeight = Math.round(Dimensions.get("window").height);

const Content = () => {
  return (
    <View style={styles.boxContent}>
      <View style={styles.profile} >
          <View style={styles.onlineStatus}/>
      </View>
      <View style={styles.user}>
        <View style={styles.userDetail}>
          <View style={{ flex: 3 }}>
            <Text style={{ fontWeight: "bold"}}>UserName</Text>
            <Text style={{ fontSize: 13 }}>Bangkok, Thailand</Text>
            <View style={{flexDirection: "row"}}>
                <Text style={styles.tagText}>Tag1</Text>
                <Text style={styles.tagText}>Tag2</Text>
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <Text>30</Text>
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <TouchableOpacity>
              <Text>M</Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <Text>S</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{ flex: 1, overflow: "hidden" }}>
            <Text style={{fontSize: 13}}>
                ภารตะแฟลชพรีเมียร์เจลติงต๊อง โกลด์เลดี้มาร์เก็ตเคลื่อนย้าย ลิมูซีนสตูดิโอ
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    height: 130, 
    backgroundColor: "#E5EBE7",
    margin: 5,
    borderRadius: 7,
    padding: 10,
    flexDirection: "row",
  },
  profile: {
    width: "25%",
    height: "70%",
    backgroundColor: "#CCC",
    borderRadius: 10,
    marginTop: "auto",
    marginBottom: "auto",
    marginRight: 10
  },
  user:{
      flex: 1
  },
  userDetail: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center"
  },
  onlineStatus:{
      width: 20,
      height: 20,
      borderRadius: 100,
      backgroundColor: "green",
      position: "absolute",
      right: -5,
      bottom: -5
  },
  tagText:{
      marginRight: 10,
      padding: 2,
      borderRadius: 5,
      backgroundColor: "#FF5350",
      fontSize: 12,
      marginTop: 2
  }
  
});

export default Content;
