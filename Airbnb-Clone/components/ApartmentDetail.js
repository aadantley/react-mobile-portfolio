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

      <View style={styles.RightContainer}>
        <Text styles={styles.title}>{apartment.title}</Text>
        <Text styles={styles.description}>You want to stay here for real</Text>
        <View style={styles.footer}>
          <Text styles={styles.title}>${apartment.price} / Night</Text>
          <Text styles={styles.title}>
            ★{apartment.rating} {apartment.numberOfStars}
          </Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: "white",
    position: "absolute",
    bottom: 50,
    left: 10,
    right: 10,

    flexDirection: "row",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    marginBottom: 10,
    fontSize: 25,
  },
  image: {
    width: 150,
    aspectRatio: 1,
    borderTopLeftRadius: 10,
    borderBottomLeftRadius: 10,
  },
  RightContainer: {
    padding: 10,
    flex: 1,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: "auto",
  },
  description: {
    color: "gray",
  },
});
