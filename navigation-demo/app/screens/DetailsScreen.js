import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function DetailsScreen({ route }) {
  const { itemId, itemTitle } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Details for {itemTitle}</Text>
      <Text style={styles.subtitle}>Item ID: {itemId}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 18,
    marginTop: 10,
  },
});
