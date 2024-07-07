import { View, Text } from "react-native";
import React from "react";
import styles from "./styles";

export default function ExerciseListItem({ item }) {
  return (
    <View style={styles.exerciseContainer}>
      <Text style={styles.exerciseName}>{item.name}</Text>
      <Text style={styles.exerciseSubtitle}>
        <Text style={styles.subText}>{item.muscle}</Text> |{" "}
        <Text style={styles.subText}>{item.equipment}</Text>
      </Text>
    </View>
  );
}
