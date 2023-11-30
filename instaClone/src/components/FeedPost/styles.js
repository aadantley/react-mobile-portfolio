
import { StyleSheet} from "react-native";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
    post: {},
    image: {
      width: "100%",
      aspectRatio: 1,
    },
    header: {
      flexDirection: "row",
      alignItems: "center",
      padding: 10,
    },
    userAvatar: {
      width: 50,
      aspectRatio: 1,
      borderRadius: 25,
      marginRight: 10,
      },
    userName: {
      fontWeight: fonts.weight.bold,
      color: colors.black,
    },
    ellipsis: {
      marginLeft: "auto"
    },
    footer: {
      padding: 10,
    },
    iconContainer: {
      flexDirection: "row",
    },
    iconFrame: {
      padding: 5,
    },
    bookmarkButton: {
      marginLeft: "auto"
    },
    text: {
      color: colors.black,
      lineHeight: 18,
    },
    bold: {
      fontWeight: "bold",
    },
  });

  export default styles;