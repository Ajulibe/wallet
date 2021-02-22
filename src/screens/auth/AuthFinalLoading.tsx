import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { ROUTES } from "../../navigation/Routes";;
import { GUIDE } from "../constants/StyleGuide";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FINAL_LOADING_SCREEN>;

export default function AuthFinalLoading({ navigation, }: Props) {


  useEffect(() => {
    setTimeout(() => {
      navigation.navigate(ROUTES.HOME_TAB);
    }, 2000);
  });


  return (
    <View style={styles.container}>
      <View style={styles.messageDiv}>
        <Image
          source={require("../../assets/images/wallet.png")}
          style={styles.walletImage}
        />
        <Text style={styles.loading}>Loading...</Text>
        <Text style={styles.message}>
          We are creating your SurePay account. Please give us a moment.
        </Text>
        <Image
          source={require("../../assets/images/spinner.gif")}
          style={styles.spinner}
        />
      </View>
    </View>
  );
  // }
}

// export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: GUIDE.PRIMARY_COLOR,
  },
  loading: {
    fontSize: hp("3.35%"),
    color: "white",
    fontFamily: "Lato-Bold",
    marginTop: hp("2.35%"),
    lineHeight: hp("3.79%"),
  },
  message: {
    fontSize: wp("3.38%"),
    color: "white",
    textAlign: "center",
    marginTop: hp("2.35%"),
    fontFamily: "Lato-Light",
    lineHeight: hp("2%"),
  },
  messageDiv: {
    justifyContent: "center",
    alignItems: "center",
    width: wp("86.95%"),
  },
  walletImage: {
    width: wp("19.28%"),
    height: hp("8.8%"),
  },
  spinner: {
    width: wp("7.66%"),
    height: wp("7.66%"),
    marginTop: hp("4.46%"),
  },
});