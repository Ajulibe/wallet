import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Feather } from "@expo/vector-icons";

type Props = {
  onPress?: any;
};

const HomeScreen: React.FC<Props> = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <View style={{ marginTop: hp("3.34%") }}>
          <View style={styles.securityContainer}>
            <View style={{ width: wp("10%") }}>
              <Feather name="lock" size={20} color="rgba(77,105,151,1)" />
            </View>

            <Text style={styles.securityText}>Security</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  securityContainer: {
    width: wp("50%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: wp("2%"),
  },
  securityText: {
    color: "rgba(77,105,151,1)",
    fontSize: wp("3.86%"),
    lineHeight: hp("2.89%"),
    fontFamily: "Lato-Regular",
  },
});

export default HomeScreen;
