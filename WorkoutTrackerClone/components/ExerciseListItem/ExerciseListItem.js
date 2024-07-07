import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        {item.muscle} | {item.equipment}
      </Text>
    </View>
  );
}
