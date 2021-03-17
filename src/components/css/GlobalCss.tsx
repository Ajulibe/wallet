import { StyleSheet } from "react-native";
import COLORS from "../../utils/Colors";
import { hp, wp } from "../../utils/Dimensions";

const globalStyles = StyleSheet.create({
   container: {
      flex: 1,
      width: "100%",
      paddingHorizontal: wp(30),
      paddingVertical: hp(30),
      color: COLORS.light.white
   },
   centerHorizontal: {
      alignItems: "center"
   },
   center: {
      justifyContent: "center",
      alignItems: "center"
   },
   divider: {}
});

export default globalStyles;
