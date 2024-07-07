import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  exerciseContainer: {
    backgroundColor: "#fff",
    padding: 10,
    borderRadius: 10,
    gap: 5,

    // shadow
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },

  exerciseName: { fontSize: 20, fontWeight: "500" },
  exerciseSubtitle: {
    color: "dimgray",
  },
  subText: {
    textTransform: "capitalize",
  },
});

export default styles;
