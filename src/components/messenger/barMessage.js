import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import Icons from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";

const BarMessage = ({ navigation, usernameAnother }) => {
  const friendName = usernameAnother;
  return (
    <View style={styles.box}>
      <View style={styles.btn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Icons name="arrow-left" color="#fff" size={20} />
        </TouchableOpacity>
        <Text
          style={[MainStyle.textBold, { fontSize: 19, marginHorizontal: 20 }]}
        >
          {friendName}
        </Text>
      </View>
      <View style={styles.boxText}>
        <TouchableOpacity>
          <Entypo name="dots-three-horizontal" color="#fff" size={25} />
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    backgroundColor: "#323232",
    marginTop: Platform.OS == "ios" ? 0 : 25,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BarMessage;
