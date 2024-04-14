import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import CustomMarker from "./components/CustomMarker";
import MapView from "react-native-maps";
import React, { useState } from "react";

//local
import apartments from "./data/apartments.json";
import ApartmentDetail from "./components/ApartmentDetail";
import BottomSheet from "./components/BottomSheet";

export default function App() {
  // Apartment Detail Card
  const [selectedApartment, setSelectedApartment] = useState(null);

  return (
    <View>
      <StatusBar style="auto" />

      {/* Map View of Region */}
      <MapView
        style={styles.map}
        initialRegion={{
          latitude: 38.9072,
          longitude: -77.0369,
          latitudeDelta: 0.0052,
          longitudeDelta: 0.0052,
        }}
      >
        {/* Markers per Item */}
        {apartments.map((apartment) => (
          <CustomMarker
            apartment={apartment}
            key={apartment.id}
            onPress={() => setSelectedApartment(apartment)}
          />
        ))}
      </MapView>
      {/* Apartment Detail Card */}
      {selectedApartment && (
        <ApartmentDetail
          apartment={selectedApartment}
          onPressX={() => setSelectedApartment(null)}
        />
      )}

      {/* Bottom Sheet */}
      <BottomSheet />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
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
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "grey",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
