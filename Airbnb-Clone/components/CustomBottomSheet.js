import { View, Text, StyleSheet } from "react-native";
import React, { useMemo } from "react";
import BottomSheet from "@gorhom/bottom-sheet";
import { GestureHandlerRootView } from "react-native-gesture-handler";

const CustomBottomSheet = () => {
  const snapPoints = useMemo(() => ["25%", "50%", "75%"], []);
  return (
    <GestureHandlerRootView style={styles.container}>
      <BottomSheet snapPoints={snapPoints}>
        <View>
          <Text>This is Awesome</Text>
        </View>
      </BottomSheet>
    </GestureHandlerRootView>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: "gray",
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
  },
});
