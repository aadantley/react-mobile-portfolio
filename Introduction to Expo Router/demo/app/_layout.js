import React from "react";
import { Stack, router } from "expo-router";
import { Button } from "react-native";

export default function _layout() {
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "red" },
        headerTintColor: "white",
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerTitle: "Home",
          headerRight: () => (
            <Button
              onPress={() => {
                router.push("contact");
              }}
              title="Contact"
            />
          ),
        }}
      />
      <Stack.Screen
        name="about"
        options={{
          headerTitle: "About",
          presentation: "modal",
        }}
      />
      <Stack.Screen
        name="blog/index"
        options={{ headerTitle: "All Blog Posts" }}
      />
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
    </Stack>
  );
}
