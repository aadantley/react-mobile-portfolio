import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import CustomMarker from "./components/CustomMarker";
import MapView from "react-native-maps";
import React, { useState, useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

import apartments from "./data/apartments.json";
import ApartmentDetail from "./components/ApartmentDetail";

export default function App() {
  const [selectedApartment, setSelectedApartment] = useState(null);
  const snapPoints = useMemo(() => ["10%", "50%", "75%"], []);

  return (
    <GestureHandlerRootView style={styles.fullScreen}>
      <View style={styles.container}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: 38.9072,
            longitude: -77.0369,
            latitudeDelta: 0.0052,
            longitudeDelta: 0.0052,
          }}
        >
          {apartments.map((apartment) => (
            <CustomMarker
              apartment={apartment}
              key={apartment.id}
              onPress={() => setSelectedApartment(apartment)}
            />
          ))}
        </MapView>
        {selectedApartment && (
          <ApartmentDetail
            apartment={selectedApartment}
            onPressX={() => setSelectedApartment(null)}
          />
        )}
      </View>

      <BottomSheet snapPoints={snapPoints} style={styles.bottomSheet}>
        <Text>This should render now!</Text>
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
  },
});
