import React, { useEffect } from "react";
import { View, StyleSheet, Text, Image } from "react-native";
import { Fontisto } from "@expo/vector-icons";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const SplashScreen: React.FC = ({ navigation }: any) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("Authentication");
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
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#DB3900",
  },
  loading: {
    fontSize: hp("3.35%"),
    color: "white",
    fontFamily: "Roboto-Bold",
    marginTop: hp("3.35%"),
    lineHeight: hp("3.79%"),
  },
  message: {
    fontSize: hp("2%"),
    color: "white",
    textAlign: "center",
    marginTop: hp("1.12%"),
    fontFamily: "Roboto-Regular",
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
    width: wp("9.66%"),
    height: hp("4.46%"),
    marginTop: hp("4.46%"),
  },
});

export default SplashScreen;
