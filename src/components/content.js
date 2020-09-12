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
          <View style={{ flex: 4 }}>
            <Text style={{ fontWeight: "bold" }}>UserName</Text>
            <Text>Bangkok, Thailand</Text>
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
        <View style={{ flex: 2, overflow: "hidden" }}>
            <Text>
                ภารตะแฟลชพรีเมียร์เจลติงต๊อง โกลด์เลดี้มาร์เก็ตเคลื่อนย้าย ลิมูซีนสตูดิโอ
            </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  boxContent: {
    height: screenHeight / 4.25, 
    backgroundColor: "#E5EBE7",
    margin: 10,
    borderRadius: 7,
    padding: 10,
    flexDirection: "row",
  },
  profile: {
    width: "28%",
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
  }
  
});

export default Content;
