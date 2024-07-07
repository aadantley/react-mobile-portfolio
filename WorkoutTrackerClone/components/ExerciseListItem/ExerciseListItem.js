import { Text, Pressable } from "react-native";
import { Link } from "expo-router";
import React from "react";
import styles from "./styles";

export default function ExerciseListItem({ item }) {
  return (
    <Link href={`/${item.name}`} asChild>
      <Pressable style={styles.exerciseContainer}>
        <Text style={styles.exerciseName}>{item.name}</Text>
        <Text style={styles.exerciseSubtitle}>
          <Text style={styles.subText}>{item.muscle}</Text> |{" "}
          <Text style={styles.subText}>{item.equipment}</Text>
        </Text>
      </Pressable>
    </Link>
  );
}
