import { View, Text, ScrollView, StyleSheet } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";
import { useState } from "react";

// data
import exercises from "../assets/data/exercises.json";

export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();

  const [isInstructionExpanded, setIsInstructionExpanded] = useState(false);

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise Not Found</Text>;
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Stack.Screen options={{ title: exercise.name }} />
      <View style={styles.panel}>
        <Text style={styles.exerciseName}> {exercise.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subValue}>Muscle: {exercise.muscle}</Text>
          <Text style={styles.subValue}>Equipment: {exercise.equipment}</Text>
          <Text style={styles.subValue}>Type: {exercise.type}</Text>
        </Text>
      </View>

      <View style={styles.panel}>
        <Text
          style={styles.instructions}
          numberOfLines={isInstructionExpanded ? 0 : 3}
        >
          Instructions: {exercise.instructions}
        </Text>
        <Text
          style={styles.seeMore}
          onPress={() => setIsInstructionExpanded(!isInstructionExpanded)}
        >
          {isInstructionExpanded ? "See Less" : "See More"}
        </Text>
      </View>
    </ScrollView>
  );
}

styles = StyleSheet.create({
  container: {
    padding: 10,
    gap: 10,
  },
  panel: {
    backgroundColor: "white",
    padding: 10,
    borderRadius: 5,
  },

  exerciseName: {
    fontSize: 20,
    fontWeight: "500",
  },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subValue: {
    textTransform: "capitalize",
  },
  instructions: {
    fontSize: 16,
    lineHeight: 22,
  },
  seeMore: {
    alignSelf: "center",
    padding: 10,
    fontWeight: "600",
    color: "gray",
  },
});
