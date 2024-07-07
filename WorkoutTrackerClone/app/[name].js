import { View, Text } from "react-native";
import { useLocalSearchParams } from "expo-router";
import { Stack } from "expo-router";

// data
import exercises from "../assets/data/exercises.json";

export default function ExerciseDetailScreen() {
  const params = useLocalSearchParams();

  const exercise = exercises.find((item) => item.name === params.name);

  if (!exercise) {
    return <Text>Exercise Not Found</Text>;
  }

  console.log(params);
  return (
    <View>
      <Stack.Screen options={{ title: exercise.name }} />
      <Text>Exercise Details: {exercise.name}</Text>
      <Text>Muscle: {exercise.muscle}</Text>
      <Text>Equipment: {exercise.equipment}</Text>
      <Text>Type: {exercise.type}</Text>
      <View>
        <Text>Instructions: {exercise.instructions}</Text>
      </View>
    </View>
  );
}
