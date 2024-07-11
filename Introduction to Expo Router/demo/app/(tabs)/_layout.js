import { View, Text, Button } from "react-native";
import React from "react";
import { Tabs, router } from "expo-router";
import { Feather, AntDesign } from "@expo/vector-icons";

export default function _layout() {
  return (
    <Tabs>
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => (
            <Feather name="list" size={24} color={color} />
          ),
          tabBarLabel: "Feed",
          headerRight: () => (
            <Button
              onPress={() => router.push("feed/AddNew")}
              title="Add New Post"
            />
          ),
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => (
            <AntDesign name="user" size={24} color={color} />
          ),
          tabBarLabel: "Profile",
        }}
      />
    </Tabs>
  );
}
