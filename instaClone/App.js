// components
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

// local
import Home from "./src/screens/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      <Home />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
