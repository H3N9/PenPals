import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const BoxInfo = () => {
  return (
    <View style={{ flex: 1, backgroundColor: "#1a1a1a" }}>
          <View style={styles.userInfo}>
            <View style={styles.imgProfile} />
            <View style={{flex: 1}}>
              <Text style={styles.userInfoText, styles.userName}>Username</Text>
              <Text style={styles.userInfoText}>Bacgkok, Thailand</Text>
              <Text style={styles.userInfoText, styles.userContent}>Lorem Ipsum is simply dummy text of the printing </Text>
              <TouchableOpacity style={styles.editProfile}>
                <Text style={{color: "#fff", textAlign : "center"}}>Edit Profile</Text>
              </TouchableOpacity>
            </View>
          </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgProfile:{
    width: 90,
    height: 90,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10
  },
  userInfo:{
    flexDirection: "row",
  },
  userInfoText:{
    color: "#fff"
  },
  userName:{
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff"
  },
  userContent:{
    color: "#AAA"
  },
  editProfile:{
    borderWidth: 2, 
    borderColor: "#FF5350", 
    marginVertical: 10, 
    padding: 2
  }
})
export default BoxInfo;
