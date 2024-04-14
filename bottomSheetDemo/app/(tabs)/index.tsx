import { StyleSheet, View, Text } from "react-native";
import { useMemo } from "react";
//bottom sheet
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

export default function TabOneScreen() {
  const snapPoints = useMemo(() => ["25%", "50%", "80%"], []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet snapPoints={snapPoints}>
        <View>
          <Text> This is that Sheet</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
