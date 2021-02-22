import { StyleSheet, Platform } from 'react-native'
import COLORS from '../../utils/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.white,
    paddingHorizontal: wp('8%'),
    paddingVertical: hp("8%"),
    paddingTop: Platform.OS ? hp('12%') : hp('8%')
  },
  formTitle: {
    fontSize: wp("3.86%"),
    fontWeight: "400",
    color: COLORS.light.blackLight,
    marginBottom: 36,
    marginTop: 36,
    textAlign: 'center',
    lineHeight: hp('2.9%')
  },
  formSubtitle: {
    marginTop: -16,
    marginBottom: 16,
    color: COLORS.light.blackLight,

  },
  inputLabel: {
    color: COLORS.light.black,
    marginBottom: 4,
    fontFamily: 'Lato-Bold',
    fontSize: wp('3.38%')
  },
  bold: {
    fontWeight: '700'
  },
  formDesc: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#94A4B1',
  },
  secondaryButton: {
    color: COLORS.light.primary,
    textDecorationLine: 'underline',
    fontFamily: 'Lato-Regular',
    fontSize: wp('3.85%'),
  }
});

export default styles;