import React, { useEffect } from "react";
import { View, StyleSheet, Image } from "react-native";
import { StackScreenProps } from '@react-navigation/stack';
import { StatusBar } from 'expo-status-bar';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { RootStackParamList } from '../../navigation/MainNavigator'
import { ROUTES } from '../../navigation/Routes'


type Props = StackScreenProps<RootStackParamList, ROUTES.SPLASH_SCREEN>;

export default function SplashScreen({ navigation, }: Props) {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.AUTHENTICATION_TAB);
    }, 3000);
  });


  return (
    <View style={styles.container}>
      <Image
        source={require("../../assets/images/logo.png")}
        style={styles.logo}
      />
      {/* <StatusBar hidden={true}/> */}
    </View>
  );
  // }
}

// export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    resizeMode: "contain",
    height: hp("5.1%"),
    width: wp("43.48%"),
  },
});
