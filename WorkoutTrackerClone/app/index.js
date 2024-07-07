import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View, FlatList } from "react-native";
import exercises from "../assets/data/exercises.json";

// components
import ExerciseList from "../components/ExerciseListItem";

export default function App() {
  return (
    <View style={styles.container}>
      <FlatList
        data={exercises}
        keyExtractor={(item, index) => item.name + index}
        contentContainerStyle={{ gap: 5 }}
        renderItem={({ item }) => <ExerciseList item={item} />}
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
    backgroundColor: "ghostwhite",
    padding: 10,
  },
});
