import React from "react";
import { Marker, PROVIDER_GOOGLE } from "react-native-maps";
import { Text, View, StyleSheet } from "react-native";

export default function CustomMarker({ apartment, onPress }) {
  return (
    <Marker
      key={apartment.id}
      provider={PROVIDER_GOOGLE}
      onPress={onPress}
      coordinate={{
        latitude: apartment.latitude,
        longitude: apartment.longitude,
      }}
    >
      <View style={styles.marker}>
        <Text style={styles.markerText}>${apartment.price}</Text>
      </View>
    </Marker>
  );
}

const styles = StyleSheet.create({
  marker: {
    backgroundColor: "white",
    padding: 3,
    paddingHorizontal: 8,
    borderWidth: 1,
    borderColor: "gray",
    borderRadius: 20,
  },
  markerText: {
    fontWeight: "bold",
  },
});
