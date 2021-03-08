import React from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { GUIDE } from "../../../../constants/StyleGuide";

const HomeScreen: React.FC = () => {
  const WIDTH = wp("90.08%");

  return (
    <View style={[styles.walletDetailsContainer, { width: WIDTH }]}>
      <View>
        <Text style={styles.balanceText}>WALLET BALANCE</Text>

        <Text style={[styles.balance, { color: GUIDE.SECONDARY_COLOR }]}>
          {"\u20A6"} 0.00
        </Text>
        <Text style={styles.phoneNumber}>
          Phone no: <Text style={{ color: "#FF4800" }}> 0812345678</Text>
        </Text>
      </View>
      <View style={{ alignItems: "center" }}>
        <TouchableOpacity>
          <View
            style={[
              styles.addMoneyBtn,
              { backgroundColor: GUIDE.PRIMARY_COLOR },
            ]}
          >
            <Image
              source={require("../../../assets/images/AddMoney.png")}
              style={styles.addMoneyImage}
            />
          </View>
        </TouchableOpacity>
        {/* <Text
                style={{
                  lineHeight: hp("1.23%"),
                  fontSize: wp("2.17%"),
                  fontFamily: "Inter-Regular",
                  color: GUIDE.SECONDARY_COLOR,
                }}
              >
                {" "}
                ADD MONEY
              </Text> */}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  walletDetailsContainer: {
    height: hp("12.83%"),
    backgroundColor: "#F6F4FD",
    marginTop: hp("3.23%"),
    borderRadius: wp("1.93%"),
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingRight: wp("4.83%"),
    paddingLeft: wp("4.83%"),
  },
  balanceText: {
    fontSize: wp("2.6%"),
    fontFamily: "Inter-Regular",
    color: "#202344",
    lineHeight: hp("2.57%"),
  },
  balance: {
    fontSize: wp("5.8%"),
    fontFamily: "Inter-Bold",

    lineHeight: hp("4.35%"),
  },
  phoneNumber: {
    fontSize: wp("2.42%"),
    fontFamily: "Inter-Regular",
    color: "#101223",
    lineHeight: hp("1.80%"),
    opacity: 0.6,
  },
  addMoneyBtn: {
    width: wp("8.61%"),
    height: wp("8.61%"),
    borderRadius: wp("18.12%"),

    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("0.5%"),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#BCABEF",
    shadowOpacity: 1,
  },
  addMoneyImage: {
    width: wp("3.71%"),
    height: wp("3.71%"),
    resizeMode: "contain",
    tintColor: "#ffffff",
  },
});

export default HomeScreen;
