import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import CustomMarker from "./components/CustomMarker";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import React, { useMemo, useState, useRef, useCallback } from "react";
import BottomSheet, { BottomSheetView } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

//local
import apartments from "./data/apartments.json";
import ApartmentDetail from "./components/ApartmentDetail";

export default function App() {
  // Apartment Detail Card
  const [selectedApartment, setSelectedApartment] = useState(null);

  // Bottom Sheet
  const snapPoints = useMemo(() => ["25%", "50%"], []);

  return (
    <GestureHandlerRootView>
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
        {selectedApartment && <ApartmentDetail apartment={selectedApartment} />}

        {/* Bottom Sheet */}
        <View style={styles.container}>
          <BottomSheet index={1} snapPoints={snapPoints}>
            <BottomSheetView style={styles.contentContainer}>
              <Text>Awesome 🎉</Text>
            </BottomSheetView>
          </BottomSheet>
        </View>
      </View>
    </GestureHandlerRootView>
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
