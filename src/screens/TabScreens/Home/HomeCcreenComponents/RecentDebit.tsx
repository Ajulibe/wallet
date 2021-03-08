import React from "react";
import { View, StyleSheet, Text } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  recentTime: string;
  recentName: string;
  recentAmount: string;
}

const HomeScreen: React.FC<Props> = ({
  recentAmount,
  recentName,
  recentTime,
}) => {
  return (
    <View style={styles.recentMainContainer}>
      <View style={{ justifyContent: "center" }}>
        <View>
          <Text style={styles.recentNames}>{recentName}</Text>
        </View>
        <View>
          <Text style={styles.recentTime}>{recentTime}</Text>
        </View>
      </View>

      <Text
        style={[
          styles.recentCredit,
          {
            color: "#EB5757",
          },
        ]}
      >
        - {"\u20A6"}
        {recentAmount}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  recentText: {
    color: "rgba(128,148,181,1)",
    lineHeight: hp("2.57%"),
    fontSize: wp("3.9%"),
    fontFamily: "Inter-Bold",
  },
  recentMainContainer: {
    width: wp("90%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: hp("2.23%"),
  },
  recentNames: {
    color: "rgba(1,35,86,1)",
    fontFamily: "Inter-Regular",
    lineHeight: hp("2.9%"),
    fontSize: wp("3.86%"),
  },
  recentTime: {
    color: "rgba(128,148,181,1)",
    marginTop: hp("0.2%"),
  },
  recentCredit: {
    color: "#219653",
    lineHeight: hp("2.9%"),
    fontSize: wp("3.86%"),
    fontFamily: "Inter-Bold",
  },
});

export default HomeScreen;
