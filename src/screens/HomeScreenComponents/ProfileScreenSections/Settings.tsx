import React from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { SimpleLineIcons } from "@expo/vector-icons";

type Props = {
  onPress?: any;
};

const HomeScreen: React.FC<Props> = ({ onPress }) => {
  return (
    <>
      <TouchableOpacity>
        <View style={{ marginTop: hp("3.34%") }}>
          <View style={styles.settingsContianer}>
            <View
              style={{
                width: wp("10%"),
              }}
            >
              <SimpleLineIcons
                name="settings"
                size={20}
                color="rgba(77,105,151,1)"
              />
            </View>

            <Text style={styles.settingsText}>Settings</Text>
          </View>
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  settingsContianer: {
    width: wp("50%"),
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    marginLeft: wp("2%"),
  },
  settingsText: {
    color: "rgba(77,105,151,1)",
    fontSize: wp("3.86%"),
    lineHeight: hp("2.89%"),
    fontFamily: "Lato-Regular",
  },
});

export default HomeScreen;
