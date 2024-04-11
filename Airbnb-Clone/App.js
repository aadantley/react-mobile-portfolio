import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import CustomMarker from "./components/CustomMarker";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import apartments from "./data/apartments.json";
import ApartmentDetail from "./components/ApartmentDetail";

export default function App() {
  return (
    <View>
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
          <CustomMarker apartment={apartment} key={apartment.id} />
        ))}
      </MapView>
      <ApartmentDetail apartment={apartments[0]} />
      <StatusBar style="auto" />
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
});
