import { View, Text } from "react-native";
import React from "react";

export default function HomeScreen({ navigation }) {
  return (
    <View>
      <Text onPress={() => alert("This is the Home Screen")}>HomeScreen</Text>
    </View>
  );
}
