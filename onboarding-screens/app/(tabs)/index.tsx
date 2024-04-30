import { StyleSheet, SafeAreaView, Pressable } from "react-native";
import { Text, View } from "@/components/Themed";

// added
import { Link, Stack, router } from "expo-router";
import { FontAwesome5 } from "@expo/vector-icons";
import { useState } from "react";
import { StatusBar } from "expo-status-bar";

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
      <StatusBar style="dark" />
      <Stack.Screen options={{ headerShown: false }} />
      <View style={styles.stepIndicatorContainer}>
        {onboardingSteps.map((step, index) => (
          <View
            key={index}
            style={[
              styles.stepIndicator,
              {
                backgroundColor: index === screenIndex ? "#FFC300" : "#A40A3C",
              },
            ]}
          />
        ))}
      </View>
      <FontAwesome5
        name={data.icon}
        size={150}
        color="#FFC300"
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
    backgroundColor: "#FFF8E7",
    padding: 20,
  },
  image: {
    alignSelf: "center",
    margin: 20,
    marginTop: 50,
  },
  title: {
    color: "#A40A3C",
    fontSize: 50,
    fontWeight: "bold",
    letterSpacing: 1.5,
    marginVertical: 20,
    marginHorizontal: 25,
  },
  description: {
    color: "#02030A",
    fontSize: 18,
    lineHeight: 28,
    marginHorizontal: 40,
  },
  footer: {
    backgroundColor: "#FFF8E7",
    marginTop: "auto",
    marginBottom: 120,
  },
  buttonsRow: {
    backgroundColor: "#FFF8E7",
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginBottom: 80,
    alignItems: "center",
    gap: 20,
    marginHorizontal: 25,
  },
  skipButton: {
    backgroundColor: "#6B0848",
    padding: 15,
    borderRadius: 50,
  },
  continueButton: {
    backgroundColor: "#EC610A",
    padding: 15,
    borderRadius: 50,
    flex: 1,
    alignItems: "center",
  },
  skipButtonText: {
    color: "#EC610A",
    paddingHorizontal: 15,
  },
  continueButtonText: {
    color: "#FDFDFD",
  },
  stepIndicator: {
    flex: 1,
    height: 3,
    margin: 5,
    borderRadius: 10,
    backgroundColor: "gray",
  },
  stepIndicatorContainer: {
    flexDirection: "row",
    backgroundColor: "#FFF8E7",
    marginHorizontal: 25,
    gap: 10,
    marginTop: 10,
  },
});
