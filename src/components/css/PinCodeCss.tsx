import { StyleSheet } from 'react-native'
import COLORS from './../../utils/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export default StyleSheet.create({
  container: {
    marginBottom: 30, marginTop: 8
  },
  title: {
    textAlign: 'center',
    fontSize: 30
  },
  codeFieldRoot: {
    // marginBottom: 30, 
    // marginTop: 8 
  },
  cell: {
    width: 50,
    height: 50,
    lineHeight: 44,
    fontSize: 24,
    borderRadius: 4,
    borderColor: COLORS.light.primaryLight,
    borderWidth: 1,
    textAlign: 'center',
  },
  cell6Cell: {
    width: 40,
    height: 40,
    lineHeight: 34,
    fontSize: 22,
  },
  focusCell: {
    borderColor: COLORS.light.primary,
    borderWidth: 2
  },
  errorCell: {
    borderColor: COLORS.light.red,
  },
  errorContainer: {
    marginVertical: 0,
  },
  errorText: {
    marginTop: hp("1%"),
    fontFamily: "Lato-Regular",
    color: COLORS.light.red,
    fontSize: 13,
  },
});