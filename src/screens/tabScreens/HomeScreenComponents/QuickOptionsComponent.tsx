import React from "react";
import { View, StyleSheet, Text, Image, ScrollView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

import { GUIDE } from "../../constants/StyleGuide";

const HomeScreen: React.FC = () => {
  const WIDTH = wp("90.08%");

  return (
    <View>
      <View style={{ width: WIDTH }}>
        <Text style={[styles.quickOptions, { color: GUIDE.SECONDARY_COLOR }]}>
          Quick Options
        </Text>
      </View>
      <View style={[styles.quickOptionsDiv, { width: WIDTH }]}>
        <View style={styles.optionsDiv}>
          <Image
            source={require("../../assets/images/rewards.png")}
            style={styles.optionsImage}
          />
          <Text
            style={[styles.optionsMessage, { color: GUIDE.SECONDARY_COLOR }]}
          >
            {" "}
            0 New rewards
          </Text>
          <Text style={styles.viewOptions}> View Rewards</Text>
        </View>
        <View style={styles.optionsDiv}>
          <Image
            source={require("../../assets/images/recents.png")}
            style={styles.optionsImage}
          />
          <Text
            style={[styles.optionsMessage, { color: GUIDE.SECONDARY_COLOR }]}
          >
            {" "}
            0 Recents
          </Text>
          <Text style={styles.viewOptions}> View Recents</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  quickOptions: {
    marginTop: hp("3.35%"),
    marginLeft: wp("1.2%"),
    lineHeight: hp("2.9%"),
    fontSize: wp("3.86%"),
    fontFamily: "Lato-Regular",
  },
  quickOptionsDiv: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  optionsDiv: {
    width: wp("42.54%"),
    height: hp("14.06%"),
    backgroundColor: "#F6F4FD",
    justifyContent: "center",
    borderRadius: wp("1.93%"),
    marginTop: hp("1.67%"),
  },
  optionsImage: {
    width: wp("4.83%"),
    height: wp("4.83%"),
    marginLeft: wp("5.8%"),
  },
  optionsMessage: {
    marginTop: hp("1.23%"),
    marginLeft: wp("4.83%"),
    lineHeight: hp("2.57%"),
    fontSize: wp("3.38%"),
    fontFamily: "Lato-Regular",
  },
  viewOptions: {
    marginTop: hp("1.23%"),
    marginLeft: wp("4.83%"),
    color: "#582ED7",
    lineHeight: hp("2.9%"),
    fontSize: wp("2.9%"),
    textDecorationLine: "underline",
    fontFamily: "Lato-Regular",
  },
});

export default HomeScreen;
