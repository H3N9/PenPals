import React from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Dimensions
} from "react-native";
import MainStyle from "../../style/mainStyle";
import { PrimaryContainer } from "../../style/themeComponent";
import { LinearGradient } from 'expo-linear-gradient';

const screenWidth = Math.round(Dimensions.get('window').width);

const BoxMessage = ({ texts, userId }) => {

  const RederText = (text) => {
    return (
      <TouchableOpacity style={styles.myMess}>
        <Text style={MainStyle.textWhite}>{text}</Text>
      </TouchableOpacity>
    );
  }

  const EachMessage = ({ text, sender }) => {
    if (sender === userId) {
      return (
        <LinearGradient
          colors={["#56ccf2", "#2f80ed"]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0.6, y: 0.55 }}
          style={styles.myMess}
        >
        <TouchableOpacity>
          <Text style={styles.textChat}>{text}</Text>
        </TouchableOpacity>
        </LinearGradient>
      );
    } else {
      return (
              <LinearGradient
                colors={["#ff5350", "#BB213a"]}
                start={{ x: 0, y: 0.1 }}
                end={{ x: 0.6, y: 0.55 }}
                style={styles.anoMess}
              >
                <TouchableOpacity>
                  <Text style={styles.textChat}>{text}</Text>
                </TouchableOpacity>
              </LinearGradient>      
      );
      }
    //   return <RederText text={text} />
    // } else {
    //   return <RederText text={text} />
    // }
  };

  const renderMessage = ({ item }) => {
    return <EachMessage text={item.reply} sender={item.userId} />;
  };

  return (
    <PrimaryContainer style={styles.boxMess}>
      <FlatList
        data={texts}
        renderItem={renderMessage}
        inverted={-1}
        keyExtractor={(texts) => texts.id.toString()}
      />
    </PrimaryContainer>
  );
};

const styles = StyleSheet.create({
  myMess: {
    padding: 10,
    paddingHorizontal: 13,
    alignSelf: "flex-end",
    flex: 1,
    borderRadius: 15,
    marginHorizontal: 15,
    marginVertical: 5,
    maxWidth: screenWidth/2
  },
  anoMess: {
    padding: 10,
    paddingHorizontal: 13,
    alignSelf: "flex-start",
    borderRadius: 15,
    marginVertical: 5,
    marginHorizontal: 15,
    flex: 1,
    maxWidth: screenWidth/1.5
  },
  boxMess: {
    flex: 10,
  },
  textChat:{
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15
  }
});

export default BoxMessage;
