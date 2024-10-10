import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import AppNavigator from "./navigation/AppNavigator";

import { AppRegistry } from "react-native";
import { name as appName } from "../app.json"; // Make sure app.json is at the root level
import 'react-native-url-polyfill/auto';

AppRegistry.registerComponent(appName, () => App);

export default function App() {
  return (
    <NavigationContainer>
      <AppNavigator />
    </NavigationContainer>
  );
}
