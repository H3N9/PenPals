import React from "react";
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import Navbar from "../components/navbar";
import Homebar from "../components/homebar";
import { LinearGradient } from "expo-linear-gradient";

const Account = ({ navigation }) => {
  return (
    <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
      <Homebar />
      
      <ScrollView style={{flex: 1, marginHorizontal: 10, marginTop: 5}}>
        <View>
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

          <View>
            <Text>Tag :</Text>
          </View>

          <View style={styles.infoContainer}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5}}>
              <Text style={{fontWeight: "bold"}}>Friend :</Text>
              <TouchableOpacity><Text style={{color: "#FF5350"}}>ViewMore ></Text></TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around",}}>
              <View style={styles.infoImgProfile} />
              <View style={styles.infoImgProfile} />
              <View style={styles.infoImgProfile} />
              <View style={styles.infoImgProfile} />
            </View>
          </View>

          <View style={styles.infoContainer}>
            <View style={{flexDirection: "row", justifyContent: "space-between", marginBottom: 5}}>
              <Text style={{fontWeight: "bold"}}>Following :</Text>
              <TouchableOpacity><Text style={{color: "#FF5350"}}>ViewMore ></Text></TouchableOpacity>
            </View>
            <View style={{flexDirection: "row", justifyContent: "space-around",}}>
              <View style={styles.infoImgProfile} />
              <View style={styles.infoImgProfile} />
              <View style={styles.infoImgProfile} />
              <View style={styles.infoImgProfile} />
            </View>
          </View>
        </View>
      </ScrollView>

      <Navbar navigation={navigation} />
    </LinearGradient>
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
  },
  infoContainer:{
    backgroundColor: "#FFF",
    borderRadius: 5,
    padding: 10,
    marginVertical: 10
  },
  infoImgProfile:{
    width: 60,
    height: 60,
    backgroundColor: "#CCC",
    borderRadius: 100,
  }
})
export default Account;
