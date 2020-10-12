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
    color: "#666",
    fontSize: 13,
  },
  mainBackground: {
    flex: 1,
  },
  boxContent: {},
  // ------------------ForModals------------------
  centeredView: {
    justifyContent: "flex-end",
    marginTop: 22,
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
