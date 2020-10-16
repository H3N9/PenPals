import React from "react";
import {
  View,
  StyleSheet,
  SafeAreaView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import BoxMessage from "../components/messenger/boxMessage";
import BarMessage from "../components/messenger/barMessage";
import Keyboard from "../components/messenger/keyboard";
import MainStyle from "../style/mainStyle";
import { PrimaryContainer } from "../style/themeComponent";

const ChatRoom = ({ navigation, route }) => {
  const texts = route.params.texts;
  const usernameAnother = route.params.usernameAnother;
  return (
    <PrimaryContainer style={[styles.box, MainStyle.mainBackground]}>
      <View>
        <BarMessage usernameAnother={usernameAnother} navigation={navigation} />
      </View>
      <View style={styles.boxMess}>
        <BoxMessage texts={texts} />
      </View>
      <KeyboardAvoidingView
        behavior={Platform.OS == "ios" ? "padding" : "height"}
        keyboardVerticalOffset={Platform.OS === "ios" ? 20 : 0}
        style={styles.container}
      >
        <View style={styles.keyboard}>
          <Keyboard />
        </View>
      </KeyboardAvoidingView>
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  box: {
    flex: 1,
  },
  keyboard: {
    justifyContent: "flex-end",
  },
  boxMess: {
    flex: 1,
  },
});

export default ChatRoom;
