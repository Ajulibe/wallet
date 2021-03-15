import React, { useEffect } from "react";
import { View, StyleSheet, Image, StatusBar } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { RootStackParamList } from "../../navigation/MainNavigator";
import { ROUTES } from "../../navigation/Routes";
import COLORS from "../../utils/Colors";
import IMAGES from "../../utils/Images";

type Props = StackScreenProps<RootStackParamList, ROUTES.SPLASH_SCREEN>;

export default function SplashScreen({ navigation }: Props) {
   useEffect(() => {
      setTimeout(() => {
         navigation.navigate(ROUTES.AUTHENTICATION_TAB);
      }, 3000);
   });

   return (
      // <SafeAreaView style={{ flex: 1 }}>

      <View style={styles.wrapper}>
         <StatusBar
            backgroundColor={COLORS.light.white}
            barStyle={"light-content"}
         />
         <View style={styles.container}>
            <Image source={IMAGES.logo} style={styles.logo} />
         </View>
      </View>
      // </SafeAreaView>
   );
   // }
}

const styles = StyleSheet.create({
   wrapper: {
      position: "relative",
      flex: 1,
      backgroundColor: COLORS.light.white
   },
   overlayWrapper: {
      height: hp("60%"),
      width: "100%",
      position: "absolute",
      top: 0,
      left: 0,
      right: 0,
      paddingVertical: hp("6.13%")
   },
   container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      paddingHorizontal: wp("8%"),
      paddingVertical: hp("12%")
   },
   logo: {
      resizeMode: "contain",
      height: wp("26.6%"),
      width: wp("26.6%")
   }
});
