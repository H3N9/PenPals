
import React from "react";
import Index from "./src/index";
import { LinearGradient } from "expo-linear-gradient";
import { StatusBar } from "expo-status-bar";

export default function App() {
  return (
    <React.Fragment>
      <StatusBar style="light" />
      <LinearGradient colors={["#132031", "#022b6b"]} style={{ flex: 1 }}>
        <Index />
      </LinearGradient>
    </React.Fragment>
  );
}
