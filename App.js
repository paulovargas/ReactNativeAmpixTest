import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import Auth from "./src/screens/Auth";

export default function App() {
  return <Auth />;
}

/**
 
 const styles = StyleSheet.create({
   container: {
     flex: 1,
     backgroundColor: "#fff",
     alignItems: "center",
     justifyContent: "center",
   },
 });
 * 
 * 
 * @format
 *

import { AppRegistry } from "react-native";
import Auth from "./src/screens/Auth";
import { name as appName } from "./app.json";

AppRegistry.registerComponent(appName, () => Auth);

 * 
 */
