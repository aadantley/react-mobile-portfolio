import React, { useState } from "react";
import { View, Text, Button, StyleSheet } from "react-native";

// Dummy data points for the onboarding steps
const onboardingData = [
  {
    id: 1,
    title: "Welcome to the App",
    description: "This is the first step of the onboarding process.",
  },
  {
    id: 2,
    title: "Learn About Features",
    description: "Discover the key features of the app.",
  },
  {
    id: 3,
    title: "Get Started",
    description: "Let’s set things up and start using the app!",
  },
];

export default function OnboardingScreen({ navigation }) {
  const [currentStep, setCurrentStep] = useState(0);

  const nextStep = () => {
    if (currentStep < onboardingData.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      navigation.navigate("MainTabs"); // Navigate to the home screen after the last step
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{onboardingData[currentStep].title}</Text>
      <Text style={styles.description}>
        {onboardingData[currentStep].description}
      </Text>
      <Button
        title={currentStep < onboardingData.length - 1 ? "Next" : "Finish"}
        onPress={nextStep}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
  },
  description: {
    fontSize: 18,
    textAlign: "center",
    marginBottom: 30,
  },
});
