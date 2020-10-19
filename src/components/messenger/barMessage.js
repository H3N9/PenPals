import React from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Platform,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import SimpleLine from "react-native-vector-icons/SimpleLineIcons";
import Entypo from "react-native-vector-icons/Entypo";
import styled from "styled-components/native";
import {
  TextPrimary,
  SecondContainer,
  SimpleLineIcon,
  EntypoIcon,
} from "../../style/themeComponent";

const BarMessage = ({ navigation, usernameAnother }) => {
  const friendName = usernameAnother;
  return (
    <SecondContainer style={styles.box}>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 7 }}
        >
          <SimpleLineIcon name="arrow-left" size={20} />
        </TouchableOpacity>
        <TextPrimary
          style={[MainStyle.textBold, { fontSize: 19, marginHorizontal: 20 }]}
        >
          {friendName}
        </TextPrimary>
      </View>
      <View style={styles.boxText}>
        <TouchableOpacity>
          <EntypoIcon name="dots-three-horizontal" size={25} />
        </TouchableOpacity>
      </View>
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    height: 55,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    marginTop: Platform.OS == "ios" ? 0 : 25,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BarMessage;
