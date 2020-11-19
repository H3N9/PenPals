import React from "react";
import {
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  Image,
  Dimensions,
} from "react-native";
import MainStyle from "../../style/mainStyle";
import { PrimaryContainer } from "../../style/themeComponent";
import path from '../../path'


const BoxMessage = ({ texts, userId }) => {
  const RederText = ({text, type, side}) => {
    if(type === 'text'){
      return (
        <TouchableOpacity style={side}>
          <Text style={MainStyle.textWhite}>{text}</Text>
        </TouchableOpacity>
      )
    }
    else if(type === 'image'){
      return (
        <TouchableOpacity style={side}>
            <Image style={styles.image} source={{uri:path.urlImage+text}} />
        </TouchableOpacity>
      )
    }
   
  }

  const renderMessage = ({ item }) => {
    const sender = item.userId
    if (sender === userId) {
      return <RederText text={item.reply} type={item.type} side={styles.myMess} />
    } else {
      return <RederText text={item.reply} type={item.type} side={styles.anoMess} />
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
    backgroundColor: "#779ecb",
    padding: 10,
    alignSelf: "flex-end",
    flex: 1,
    borderRadius: 5,
    margin: 5,
  },
  anoMess: {
    backgroundColor: "#FF5350",
    padding: 10,
    alignSelf: "flex-start",
    borderRadius: 5,
    margin: 5,
    flex: 1,
  },
  boxMess: {
    flex: 10,
  },
  image:{
    height: 300,
    width: 300,
    borderRadius: 5,
  }

});

export default BoxMessage;
