import { View, Text, Button } from "react-native";
import React from "react";
import { useRouter } from "expo-router";

export default function Blog() {
  const router = useRouter();
  return (
    <View>
      <Text>Blog page</Text>
      <Button onPress={() => router.push("/blog/1")} title="Go blog 1" />
      <Button onPress={() => router.push("/blog/2")} title="Go blog 2" />
      <Button onPress={() => router.push("/blog/3")} title="Go blog 3" />
      <Button
        onPress={() => router.push("/blog/3?author=john")}
        title="Go blog 3 author search"
      />
      <Button onPress={() => router.back()} title="Go back" />
    </View>
  );
}
