import { StyleSheet, Platform } from "react-native";
import COLORS from "../../utils/Colors";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
   wrapper: {
      position: "relative",
      flex: 1,
      backgroundColor: COLORS.light.white
   },
   overlayWrapper: {
      height: hp("29.67%"),
      width: "100%",
      position: "absolute",
      top: -5,
      left: -10,
      right: 0
   },
   overlayImage: {
      flex: 1,
      opacity: 0.5,
      width: "100%",
      height: "100%",
      resizeMode: "stretch"
   },
   container: {
      flex: 1,
      paddingHorizontal: wp("8%"),
      paddingTop: Platform.OS ? hp("8.12%") : hp("8.12%"),
      paddingBottom: hp("7.88%"),
      backgroundColor: "transparent"
   },
   progressWrapper: {
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
   },
   formTitle: {
      fontSize: wp("6.4%"),
      color: COLORS.light.textBlack,
      fontFamily: "Inter-Bold",
      lineHeight: hp("4.43")
   },
   formSubtitle: {
      marginTop: hp("0.73%"),
      marginBottom: hp("2.9%"),
      color: "rgba(32,47,68,0.6)",
      display: "flex",
      // textAlign: "justify",
      fontSize: wp("3.73%"),
      fontFamily: "Inter-Regular",
      lineHeight: hp("2.46%")
   },
   inputLabel: {
      color: COLORS.light.textBlack,
      marginTop: hp("1%"),
      textAlign: "left",
      fontSize: wp("3.5%"),
      fontFamily: "Inter-Regular",
      marginBottom: 6
   },
   inputLabelTop: {
      color: COLORS.light.textBlack,
      marginTop: hp("1%"),
      textAlign: "left",
      fontSize: wp("3.5%"),
      fontFamily: "Inter-Regular"
   },
   bold: {
      fontWeight: "700"
   },
   formDesc: {
      marginTop: 8,
      fontStyle: "italic",
      color: "#94A4B1"
   },
   recentCodeText: {
      fontSize: wp("3.73%"),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack,
      lineHeight: hp("2.95%")
   },
   secondaryButton: {
      fontFamily: "Inter-Medium",
      color: COLORS.light.secondary,
      textAlign: "center",
      fontSize: wp("4%"),
      marginTop: hp("5%")
   }
});

export default styles;
