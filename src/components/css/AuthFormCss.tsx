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
      paddingBottom: hp("5.54%"),
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundColor: "transparent"
   },
   formTitleWrapper: {
      marginTop: hp("2.83%"),
      width: "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between"
   },
   formTitle: {
      fontSize: wp("9.61%"),
      fontWeight: "400",
      color: COLORS.light.secondary,
      fontFamily: "Inter-Black"
   },
   formSubtitle: {
      width: wp("66.4%"),
      marginTop: hp("2.46%"),
      marginBottom: hp("3.69%"),
      color: COLORS.light.light_black,
      display: "flex",
      textAlign: "justify",
      fontSize: wp("4.25%"),
      fontFamily: "Inter-Regular",
      lineHeight: hp("3.18%")
   },
   inputLabel: {
      color: COLORS.light.inputLabel,
      fontStyle: "italic",
      marginTop: hp("1%"),
      textAlign: "left",
      fontSize: wp("3.5%")
   },
   inputLabelTop: {
      color: COLORS.light.blackLight,
      marginTop: hp("1%"),
      textAlign: "left",
      fontSize: wp("3.5%")
   },
   bold: {
      fontWeight: "700"
   },
   formDesc: {
      marginTop: 8,
      fontStyle: "italic",
      color: "#94A4B1"
   },
   secondaryButton: {
      fontFamily: "Inter-Bold",
      color: COLORS.light.secondary,
      textAlign: "center",
      fontSize: wp("4%"),
      marginTop: hp('5.29%')
   }
});

export default styles;
