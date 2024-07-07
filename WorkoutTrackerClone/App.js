import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  const exercise = exercises[0];
  return (
    <View style={styles.container}>
      <Text style={styles.exerciseName}>{exercise.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {exercise.muscle} | Equipment: {exercise.equipment}
      </Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  exerciseName: { fontSize: 20, fontWeight: "500" },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
