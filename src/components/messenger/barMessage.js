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

const BarMessage = ({ navigation, interlocutor }) => {
  const friendName = interlocutor.username;
  return (
    <SecondContainer style={styles.box}>
      <View style={styles.btn}>
        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{ padding: 9 }}
        >
          <SimpleLineIcon name="arrow-left" size={20} />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate("Account", {user:interlocutor})}>
          <TextPrimary style={[MainStyle.textBold, { fontSize: 19, marginHorizontal: 20 }]}>
            {friendName}
          </TextPrimary>
        </TouchableOpacity>
      </View>
    </SecondContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    flexDirection: "row",
    padding: 10,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
  },
  btn: {
    flexDirection: "row",
    alignItems: "center",
  },
});

export default BarMessage;
