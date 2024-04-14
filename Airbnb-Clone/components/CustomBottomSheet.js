import { View, Text, StyleSheet, Dimensions } from "react-native";
import React from "react";

const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const CustomBottomSheet = () => {
  return (
    <View style={styles.bottomSheetContainer}>
      <Text>CustomBottomSheet</Text>
    </View>
  );
};

export default CustomBottomSheet;

const styles = StyleSheet.create({
  bottomSheetContainer: {
    height: SCREEN_HEIGHT,
    width: "100%",
    backgroundColor: "white",
    position: "absolute",
    top: SCREEN_HEIGHT / 1.5,
    borderRadius: 25,
  },
});
