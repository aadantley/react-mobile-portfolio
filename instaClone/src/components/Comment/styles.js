import { StyleSheet} from "react-native";
import colors from "../../themes/colors";
import fonts from "../../themes/fonts";

const styles = StyleSheet.create({
    comment: {
        flexDirection: 'row',
        alignItems: "center",
      },
      commentText: {
        color: colors.black,
        width: '85%',
        marginRight: "auto",
        lineHeight: 18,
      },
      bold: {
        fontWeight: fonts.weight.bold,
      }
})

export default styles;