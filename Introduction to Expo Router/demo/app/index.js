import { View, Text, Button } from "react-native";
import React from "react";
import { Link } from "expo-router";

export default function Home() {
  return (
    <View>
      <Text>Home</Text>
      <Link href={"/about"}>
        <Text>Go to About Page</Text>
      </Link>
      <Link href={"/blog"}>
        <Text>Go to Blog Page</Text>
      </Link>
      <Link href={"/feed"} asChild>
        <Button title="Go To Tabs" />
      </Link>
    </View>
  );
}
