import { StatusBar } from "expo-status-bar";
import { Text, View, StyleSheet } from "react-native";
import MapView, { Marker } from "react-native-maps";

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
        <Marker
          coordinate={{ latitude: 38.9072, longitude: -77.0369 }}
          title="Coffee Shop"
          description="Oystried"
        />
      </MapView>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  map: {
    width: "100%",
    height: "100%",
  },
});
