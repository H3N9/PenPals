import React from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Dimensions
} from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import { PrimaryContainer } from "../../style/themeComponent";
import path from '../../path'
const screenWidth = Math.round(Dimensions.get('window').width);

const BoxMessage = ({ texts, userId }) => {
  const RederText = ({text, type, side, user}) => {
    if(type === 'text'){
      return (
        <LinearGradient
          colors={user === "user" ? ["#56ccf2", "#2f80ed"] : ["#ff5350", "#BB213a"]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0.6, y: 0.55 }}
          style={side}
        >
          <TouchableOpacity>
            <Text style={styles.textChat}>{text}</Text>
          </TouchableOpacity>
        </LinearGradient>
      )
    }
    else if(type === 'image'){
      return (
        <LinearGradient
          colors={user === "user" ? ["#56ccf2", "#2f80ed"] : ["#ff5350", "#BB213a"]}
          start={{ x: 0, y: 0.1 }}
          end={{ x: 0.6, y: 0.55 }}
          style={[side, {padding: 0, paddingHorizontal: 0}]}
        >
            <TouchableOpacity>
              <Image style={styles.image} source={{uri:path.urlImage+text}} resizeMode="cover" />
            </TouchableOpacity>
        </LinearGradient>
      )
    }
   
  }

  const renderMessage = ({ item }) => {
    const sender = item.userId
    if (sender === userId) {
      return <RederText text={item.reply} type={item.type} side={styles.myMess} user="user"/>
    } else {
      return <RederText text={item.reply} type={item.type} side={styles.anoMess} user="opposite" />
    }
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
    marginHorizontal: 13,
    marginVertical: 5,
    maxWidth: screenWidth/1.4
  },
  anoMess: {
    padding: 10,
    paddingHorizontal: 13,
    alignSelf: "flex-start",
    flex: 1,
    borderRadius: 15,
    marginHorizontal: 13,
    marginVertical: 5,
    maxWidth: screenWidth/1.8
  },
  boxMess: {
    flex: 10,
  },
  textChat:{
    color: "#FFF",
    fontWeight: "500",
    fontSize: 15
  },
  image:{
    width: '100%',
    height: undefined,
    aspectRatio: 1.325,
    
  }
});

export default BoxMessage;
