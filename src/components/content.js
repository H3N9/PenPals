import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  TouchableOpacity,
} from "react-native";

const Content = () => {
  return (
    <View style={styles.boxContent}>
      {/* UserImageProfile */}
      <View style={styles.profile} >
          {/* OnlineStatus */}
          <View style={styles.onlineStatus}/>
      </View>

      {/* UserImageProfile */}
      <View style={{flex: 1}}>
        <View style={styles.userDetail}>
          <View style={{ flex: 3 }}>
            {/* Username */}
            <Text style={{ fontWeight: "bold" }}>UserName</Text>

            {/* location */}
            <Text style={{ fontSize: 13, marginVertical: 2 }}>Bangkok, Thailand</Text>
            
            {/* Tag */}
            <View style={{flexDirection: "row"}}>
                <Text style={styles.tagText}>Sport</Text>
                <Text style={styles.tagText}>Music</Text>
            </View>
          </View>
          
          {/* Follower */}
          <View style={{ flex: 1 }}>
            <Text>30</Text>
          </View>

          {/* Menu */}
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

        {/* UserContent */}
        <View style={{ flex: 1, overflow: "hidden", marginTop: 10 }}>
            <Text style={{fontSize: 13, color: "#777"}}>
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
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
  },
  profile: {
    width: 70,
    height: 70,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10
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
      right: -1,
      bottom: -1
  },
  tagText:{
      marginRight: 10,
      marginTop: 2,
      padding: 2,
      borderRadius: 5,
      backgroundColor: "#FF5350",
      fontSize: 12,
  }
});

export default Content;
