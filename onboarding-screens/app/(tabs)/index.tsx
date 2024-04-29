import { StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";

// added
import { Link, Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";

const onboardingSteps = [
  {
    icon: "snowflake",
    title: "Welcome to Devember",
    description:
      "This is from the daily react native tutorials from notjustdev",
  },
  {
    icon: "people-arrows",
    title: "Learn and Grow Together",
    description: "This was day 2 of the 24 projects in react native",
  },
  {
    icon: "people-arrows",
    title: "Education for Children",
    description: "He put this in because of a fund raiser",
  },
];

export default function TabOneScreen() {
  const [screenIndex, setScreenIndex] = useState(0);
  const data = onboardingSteps[screenIndex];

  const onContinue = () => {
    const isLastScreen = screenIndex === onboardingSteps.length - 1;
    if (isLastScreen) {
      setScreenIndex(0);
    } else {
      setScreenIndex(screenIndex + 1);
    }
  };

  const endOnboarding = () => {
    setScreenIndex(0);
    router.back();
  };

  return (
    <SafeAreaView style={styles.page}>
      <Stack.Screen options={{ headerShown: false }} />
      <FontAwesome5
        name={data.icon}
        size={100}
        color="#FFDA11"
        style={styles.image}
      />
      <View style={styles.footer}>
        <Text style={styles.title}>{data.title}</Text>
        <Text style={styles.description}>{data.description}</Text>
      </View>
      <View style={styles.buttonsRow}>
        <Pressable style={styles.skipButton} onPress={endOnboarding}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </Pressable>
        <Pressable style={styles.continueButton} onPress={onContinue}>
          <Text style={styles.continueButtonText}>Continue</Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  page: {
    justifyContent: "center",
    flex: 1,
    backgroundColor: "#15141A",
    padding: 20,
  },
  image: {
    alignSelf: "center",
    margin: 20,
  },
  title: {
    color: "#FDFDFD",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginVertical: 20,
  },
  description: {
    color: "gray",
    fontSize: 18,
    lineHeight: 28,
  },
  footer: {
    backgroundColor: "#15141A",
    marginTop: "auto",
    marginBottom: 120,
  },
  buttonsRow: {
    backgroundColor: "#15141A",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 80,
    alignItems: "center",
    gap: 20,
  },
  skipButton: {
    backgroundColor: "#302E38",
    padding: 15,
    borderRadius: 50,
  },
  continueButton: {
    color: "#302E38",
    backgroundColor: "#FDFDFD",
    padding: 15,
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#FDFDFD",
    paddingHorizontal: 15,
  },
  continueButtonText: {},
});
