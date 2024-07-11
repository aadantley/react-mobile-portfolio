import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function About() {
  const router = useRouter();
  return (
    <View>
      <Text>About page</Text>
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
}
