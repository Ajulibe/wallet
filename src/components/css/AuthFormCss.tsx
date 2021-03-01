import { StyleSheet, Platform } from 'react-native'
import COLORS from '../../utils/Colors'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.light.white
  },
  overlayWrapper: {
    height: hp('29.67%'),
    width: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
  },
  overlayImage: {
    flex: 1,
    width: '100%',
    height: '100%',
    resizeMode: 'stretch'
  },
  container: {
    flex: 1,
    paddingHorizontal: wp('8%'),
    paddingTop: Platform.OS ? hp('8.12%') : hp('8.12%'),
    paddingBottom: hp('5.54%'),
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'transparent'
  },
  formTitle: {
    fontSize: wp("9.61%"),
    fontWeight: "400",
    color: COLORS.light.secondary,
    fontFamily: 'Lato-Bold',
    marginTop: hp('5.78%'),
  },
  formSubtitle: {
    marginTop: hp('2.46%'),
    marginRight: wp('13.5%'),
    marginBottom: hp('3.69%'),
    color: COLORS.light.secondary,
    display: 'flex',
    fontSize: wp("4.25%"),
    fontFamily: 'Lato-Regular',
    lineHeight: hp('3.18%')
  },
  inputLabel: {
    color: COLORS.light.secondary,
    marginTop: hp('3.69%'),
    textAlign: 'center',
    fontSize: wp("4.25%"),
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
    fontFamily: 'Lato-Bold',
    textDecorationLine: 'underline',
    color: COLORS.light.secondary,
    textAlign: 'center',
    fontSize: wp("4.25%"),
  },


});

export default styles;