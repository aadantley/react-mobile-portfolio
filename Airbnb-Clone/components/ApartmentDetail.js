import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";

export default function ApartmentDetail({ apartment }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg",
        }}
        style={styles.image}
      />
      <Text styles={styles.title}>ApartmentDetail</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 50,
    padding: 10,
    left: 10,
    right: 10,
  },
  title: {
    fontWeight: "bold",
  },
  image: {
    width: 150,
    aspectRatio: 1,
  },
});
