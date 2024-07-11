import { View, Text, Button } from "react-native";
import React from "react";
import { useLocalSearchParams, router, Stack } from "expo-router";

export default function Blog() {
  const { id, author } = useLocalSearchParams();
  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />
      <View>
        <Text>Blog Post Details: {id}</Text>
        {author ? <Text> Written By: {author}</Text> : null}
        <Button onPress={() => router.back()} title="Go back" />
      </View>
    </>
  );
}
