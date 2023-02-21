import React from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import Home from "./src/telas/Home"

function App(){
  return <SafeAreaView style={styles.app}>
    <Home/>
  </SafeAreaView>
  
}

export default App;

const styles = StyleSheet.create({
  app:{
    flex: 1,
    backgroundColor: "#FFFFFF"
  }
})