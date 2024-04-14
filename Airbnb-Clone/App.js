import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet, FlatList } from "react-native";
import CustomMarker from "./components/CustomMarker";
import MapView from "react-native-maps";
import React, { useState, useMemo } from "react";
import BottomSheet, { BottomSheetFlatList } from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import apartments from "./data/apartments.json";
import ApartmentDetail from "./components/ApartmentDetail";

export default function App() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const snapPoints = useMemo(() => [75, "50%", "90%"], []);

  return (
    <GestureHandlerRootView style={styles.fullScreen}>
      <View style={styles.container}>
        {/* Map View */}
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 38.9072,
            longitude: -77.0369,
            latitudeDelta: 0.0052,
            longitudeDelta: 0.0052,
          }}
        >
          {/* Marker Pins */}
          {apartments.map((apartment) => (
            <CustomMarker
              apartment={apartment}
              key={apartment.id}
              onPress={() => setSelectedApartment(apartment)}
            />
          ))}
        </MapView>

        {/* Detail Card */}

        {selectedApartment && (
          <View style={styles.selectedItemDetail}>
            <ApartmentDetail
              apartment={selectedApartment}
              onPressX={() => setSelectedApartment(null)}
            />
          </View>
        )}
      </View>

      {/* Bottom Sheet */}
      <BottomSheet snapPoints={snapPoints} style={styles.bottomSheet}>
        <Text style={styles.bottomSheetTitle}>
          Over {apartments.length} places!
        </Text>
        <BottomSheetFlatList
          contentContainerStyle={{ gap: 10, padding: 10 }}
          data={apartments}
          renderItem={({ item }) => <ApartmentDetail apartment={item} />}
        />
      </BottomSheet>

      <StatusBar style="auto" />
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  fullScreen: {
    flex: 1,
  },
  container: {
    flex: 1,
  },
  map: {
    flex: 1, // make the map a flex child
  },
  bottomSheet: {
    padding: 16,
    backgroundColor: "white",
    borderRadius: 75,
    flex: 1,
  },
  selectedItemDetail: {
    position: "absolute",
    bottom: 100,
    right: 10,
    left: 10,
  },
  bottomSheetTitle: {
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 35,
  },
});
