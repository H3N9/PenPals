import React from "react";
import Index from "./src/index";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";
import Chat from "./src/pages/chatRoom";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <Index />
    </React.Fragment>
  );
}
