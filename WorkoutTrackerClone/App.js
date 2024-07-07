import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "./assets/data/exercises.json";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        renderItem={({ item }) => {
          return (
            <View style={styles.exerciseContainer}>
              <Text style={styles.exerciseName}>{item.name}</Text>
              <Text style={styles.exerciseSubtitle}>
                {item.muscle} | {item.equipment}
              </Text>
            </View>
          );
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: "center",
    backgroundColor: "gainsboro",
    padding: 10,
  },
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,
  },

  exerciseName: { fontSize: 20, fontWeight: "500" },
  exerciseSubtitle: {
    color: "dimgray",
  },
});
