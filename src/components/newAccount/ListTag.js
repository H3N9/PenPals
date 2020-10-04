import React from "react";
import { View, StyleSheet, Text} from "react-native";
import MainStyle from "../../style/mainStyle"
import Tag from "./tag";

const ListTag = ({ tag, title }) =>{
    const callTag = (value, index) => {
        return <Tag key={index} tagName={value.name} id={value.id} />;
    };
    
    const callListTag = (value, index) => {
        return (
            <View style={styles.boxTag} key={index}>
                <Text style={styles.tagText}>{value.name} :</Text>
                <View style={styles.boxTagList}>{value.list.map(callTag)}</View>
            </View>
        );
    };

    return(
        <View style={{ marginHorizontal: 10 }}>
            <Text style={[MainStyle.textWhiteBold, { fontSize: 18 }]}>
                {title}
            </Text>
            {tag.map(callListTag)}
        </View>
    )
}

const styles = StyleSheet.create({
    boxTag: {
        flex: 1,
        flexDirection: "row",
        marginVertical: 5,
    },
    boxTagList: {
        flex: 3,
        flexDirection: "row",
        flexWrap: "wrap",
    },
    boxIntro: {
        flex: 1,
        paddingHorizontal: 10,
        padding: 5,
    },
    tagText: {
        color: "white",
        marginHorizontal: 10,
    },
})

export default ListTag