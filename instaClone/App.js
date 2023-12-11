// components
import { StyleSheet, SafeAreaView, FlatList } from "react-native";

// local
import Home from "./src/screens/Home";
import CommentsScreen from "./src/screens/CommentsScreen";

export default function App() {
  return (
    <SafeAreaView style={styles.app}>
      {/* <Home /> */}
      <CommentsScreen />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  app: {
    flex: 1,
  },
});
