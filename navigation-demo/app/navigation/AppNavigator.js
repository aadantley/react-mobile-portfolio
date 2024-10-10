import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import OnboardingScreen from "../screens/OnboardingScreen";
import MainTabNavigator from "./MainTabNavigator";

const Stack = createStackNavigator();

export default function AppNavigator() {
  return (
    <Stack.Navigator initialRouteName="Onboarding">
      {/* Single Onboarding Screen */}
      <Stack.Screen
        name="Onboarding"
        component={OnboardingScreen}
        options={{ headerShown: false }}
      />

      {/* Main App with Tabs */}
      <Stack.Screen
        name="MainTabs"
        component={MainTabNavigator}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
}
