import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";

type Props = {
  onPress?: any;
};

const HomeScreen: React.FC<Props> = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity>
        <View style={{ marginTop: hp("3.34%") }}>
          <View style={styles.customerSupportContainer}>
            <View
              style={{
                width: wp("10%"),
              }}
            >
              <Ionicons
                name="help-circle-outline"
                size={22}
                color="rgba(77,105,151,1)"
              />
            </View>

            <Text style={styles.customerSupportText}>Customer Support</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  customerSupportContainer: {
    width: wp("50%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: wp("2%"),
  },
  customerSupportText: {
    color: "rgba(77,105,151,1)",
    fontSize: wp("3.86%"),
    lineHeight: hp("2.89%"),
    fontFamily: "Inter-Regular",
  },
});

export default HomeScreen;
