import { View, Text, Button } from "react-native";
import React from "react";
import { router } from "expo-router";

export default function AddNew() {
  return (
    <View>
      <Text>AddNew</Text>
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
}
