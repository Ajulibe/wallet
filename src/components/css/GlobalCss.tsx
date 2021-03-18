import { StyleSheet } from "react-native";
import COLORS from "../../utils/Colors";
import { hp, wp } from "../../utils/Dimensions";

const globalStyles = StyleSheet.create({
   wrapper: {
      flex: 1,
      backgroundColor: "green"
   },
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
   inputLabel: {
      color: COLORS.light.textBlack,
      marginTop: hp(1),
      textAlign: "left",
      fontSize: wp(14),
      lineHeight: hp(24),
      fontFamily: "Inter-Regular",
      marginBottom: 6
   },
   inputGap: {
      height: 8
   },
   divider: {}
});

export default globalStyles;
