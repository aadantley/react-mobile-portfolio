import { View, Text, StyleSheet } from "react-native";
import React from "react";

export default function Home() {
  return (
    <View className="flex-1 justify-center items-center">
      <Text>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
