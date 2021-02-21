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
    paddingTop : Platform.OS? hp('12%') : hp('8%')
  },
  formTitle: {
    fontSize: 18,
    fontWeight: "400",
    color: COLORS.light.black,
    marginBottom: 36,
    marginTop: 36,
    textAlign: 'center'
  },
  formSubtitle: {
    marginTop: -16,
    marginBottom: 16,
    color: COLORS.light.blackLight,
  },
  inputLabel: {
    color: COLORS.light.black,
    marginBottom: 4,
    fontWeight: '700',
    // fontSize: 18
  },
  bold:{
    fontWeight :'700'
  },
  formDesc: {
    marginTop: 8,
    fontStyle: 'italic',
    color: '#94A4B1',
  },
  secondaryButton: {
    color: COLORS.light.primary,
    textDecorationLine: 'underline',
    fontWeight: '500',
    fontSize: 16,
  }
});

export default styles;