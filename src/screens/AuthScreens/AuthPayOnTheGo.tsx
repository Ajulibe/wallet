import React from "react";
import {
   View,
   StyleSheet,
   Image,
   Text,
   Dimensions,
   TouchableOpacity,
   StatusBar
} from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import IMAGES from "../../utils/Images";
import {
   NavigationTabProp,
   NavigationBottomTabScreenComponent
} from "react-navigation-tabs";

type Props = {
   navigation: NavigationTabProp<{}>;
};

const AuthGetStarted: NavigationBottomTabScreenComponent<Props> = ({
   navigation
}) => {
   return (
      <View style={{ flex: 1 }}>
         <View style={styles.wrapper}>
            {/* <StatusBar
               backgroundColor={COLORS.light.secondary}
               barStyle={"light-content"}
            /> */}

            <View style={styles.container}>
               <View style={{ alignItems: "center" }}>
                  <Image
                     source={IMAGES["logo"]}
                     style={{ height: 120, width: 120 }}
                  />
               </View>
               <View style={{ height: "60%", width: "100%" }}></View>

               <CustomButton
                  bgColor={COLORS.light.primary}
                  textColor={COLORS.light.white}
                  btnText={"Get Started"}
                  onClick={() =>
                     navigation.navigate(ROUTES.AUTH_PHONE_NO_SCREEN)
                  }
               />
               <View
                  style={{
                     flexDirection: "row",
                     alignItems: "center",
                     marginTop: 20,
                     justifyContent: "center"
                  }}
               >
                  <Text>Already have an account? </Text>
                  <TouchableOpacity>
                     <Text style={{ fontFamily: "Inter-Medium" }}>Login</Text>
                  </TouchableOpacity>
               </View>
            </View>
         </View>
      </View>
   );
};

export default AuthGetStarted;

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
      top: 0,
      left: 0,
      right: 0
   },
   overlayImage: {
      flex: 1,
      width: "100%",
      opacity: 0.6,
      height: "100%",
      resizeMode: "cover"
   },
   container: {
      flex: 1,
      height: hp("100%"),
      width: "100%",
      paddingHorizontal: wp("8%"),
      paddingVertical: hp("8%")
      // paddingTop: Platform.OS ? hp('4%') : hp('8%')
   },

   rowItem: {
      width: "100%",
      alignItems: "center",
      alignSelf: "center",
      flexDirection: "row",
      marginBottom: hp("6.7%"),
      flexWrap: "wrap"
   },
   icon: {
      resizeMode: "contain",
      width: wp("8.59%"),
      height: wp("8.59%")
   },
   rowItemText: {
      fontFamily: "Inter-Regular",
      fontSize: wp("3.9%")
   },
   rowItemBold: {
      fontFamily: "Inter-Bold",
      fontSize: wp("6.8%"),
      marginBottom: 10
   }
});
