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
        <View style={{}}>
          <View style={styles.editContainer}>
            <View style={{ width: wp("10%") }}>
              <Feather name="edit-2" size={18} color="#4D6997" />
            </View>

            <Text style={styles.editProfileText}>Edit Profile</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  editContainer: {
    width: wp("50%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: wp("2%"),
  },
  editProfileText: {
    color: "rgba(77,105,151,1)",
    fontSize: wp("3.86%"),
    lineHeight: hp("2.89%"),
    fontFamily: "Lato-Regular",
  },
});

export default HomeScreen;
