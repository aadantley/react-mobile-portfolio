import { Text, View, StyleSheet, Image } from "react-native";
import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function ApartmentDetail({ apartment, onPressX }) {
  return (
    <View style={styles.card}>
      <Image
        source={{
          uri: "https://thumbor.forbes.com/thumbor/fit-in/900x510/https://www.forbes.com/advisor/wp-content/uploads/2022/10/condo-vs-apartment.jpeg.jpg",
        }}
        style={styles.image}
      />

      <View style={styles.RightContainer}>
        <View style={styles.header}>
          <Text styles={styles.title}>{apartment.title}</Text>
          <Icon name="close" size={20} color="black" onPress={onPressX} />
        </View>

        <Text styles={styles.description}>You want to stay here for real</Text>
        <Text></Text>
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
    // position: "absolute",
    // bottom: 125,
    // left: 10,
    // right: 10,

    flexDirection: "row",
    borderRadius: 10,
  },
  title: {
    fontWeight: "bold",
    width: "65%",
    marginBottom: 10,
    fontSize: 25,
    flexWrap: "wrap",
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
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginRight: 10,
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
