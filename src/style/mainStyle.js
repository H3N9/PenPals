import React from "react";
import { StyleSheet } from "react-native";

const mainStyle = StyleSheet.create({
  textWhite: {
    color: "#fff",
    fontSize: 13,
  },
  textWhiteBold: {
    color: "#fff",
    fontSize: 13,
    fontWeight: "bold",
  },
  textBold: {
    fontWeight: "600",
  },
  textGray: {
    color: "#999",
    fontSize: 13,
  },
  mainBackground: {
    flex: 1,
  },
  shadow: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 1.5,

    elevation: 3,
  },
  // ------------------ForModals------------------
  centeredView: {
    justifyContent: "flex-end",
    marginTop: 22,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 0.5,
    },
    shadowOpacity: 0.5,
    shadowRadius: 5,

    elevation: 1,
  },
  modalView: {
    borderRadius: 20,
    padding: 10,
    height: "100%",
  },
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  modalButton: {
    backgroundColor: "#FF5350",
    padding: 12,
    borderRadius: 5,
  },
});

export default mainStyle;
