import React from "react";
import { View, Text, StyleSheet, TouchableOpacity, Image } from "react-native";
import MainStyle from "../../style/mainStyle";

const BoxInfo = () => {
  return (
    <View style={styles.userInfo}>
      <Image
        style={styles.imgProfile}
        source={require("../../../assets/man.png")}
      />
      <View style={{ flex: 1 }}>
        <Text style={MainStyle.textBold}>Username</Text>
        <Text style={MainStyle.textWhite}>Bacgkok, Thailand</Text>
        <Text style={MainStyle.textGray}>
          Lorem Ipsum is simply dummy text of the printing
        </Text>
        <TouchableOpacity style={styles.editProfile}>
          <Text style={{ color: "#fff", textAlign: "center" }}>
            Edit Profile
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  imgProfile: {
    width: 90,
    height: 90,
    backgroundColor: "#CCC",
    borderRadius: 100,
    marginRight: 10,
  },
  userInfo: {
    flexDirection: "row",
    paddingHorizontal: 10
  },
  editProfile: {
    borderWidth: 2,
    borderColor: "#FF5350",
    marginVertical: 10,
    padding: 2,
    borderRadius: 3,
  },
});
export default BoxInfo;
