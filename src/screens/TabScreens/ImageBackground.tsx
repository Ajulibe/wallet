import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

interface Props {
  onPress?: any;
}

const HomeScreen: React.FC<Props> = ({ onPress }) => {
  return (
    <View style={styles.ImageBackgroundContainer}>
      <ImageBackground
        source={require("../../assets/images/mask.png")}
        style={styles.ImageBackground}
      >
        <View style={styles.backContent}>
          <View style={styles.contentContainer}>
            <View
              style={{
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <TouchableOpacity onPress={onPress}>
                <Ionicons
                  name="chevron-back-outline"
                  size={24}
                  color="#ffffff"
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={styles.centerheaderContainer}>
          <View style={styles.userContainer}>
            <Feather name="user" size={24} color="black" />
          </View>
          <Text style={styles.janeDoe}>Jane Doe</Text>
          <Text style={styles.janeDoeEmail}>j.doe@gmail.com</Text>
        </View>
        <View style={styles.logoutContainer}>
          <Text style={styles.logoutText}>Logout</Text>
        </View>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("33%"),
    backgroundColor: "#00296B",
  },

  ImageBackgroundContainer: {
    width: wp("100%"),
    height: hp("34.26%"),
    backgroundColor: "#00296B",
    borderBottomLeftRadius: wp("7.25%"),
    borderBottomRightRadius: wp("7.25%"),
    alignItems: "center",
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#00296B",
    shadowOpacity: 0.1,
    shadowRadius: 1,
  },
  ImageBackground: {
    flex: 1,
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1000,
  },
  backContent: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("90%"),
  },
  centerheaderContainer: {
    marginTop: hp("4.46%"),
    alignItems: "center",
  },
  userContainer: {
    width: wp("16.67%"),
    height: wp("16.67%"),
    borderRadius: wp("16.67%"),
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: hp("2.23%"),
  },
  janeDoe: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: wp("3.86%"),
    fontFamily: "Lato-Bold",
    lineHeight: hp("2.9%"),
  },
  janeDoeEmail: {
    color: "rgba(128,148,181,1)",
    textAlign: "center",
    fontSize: wp("2.9%"),
    fontFamily: "Lato-Regular",
    lineHeight: hp("2.16%"),
  },
  logoutContainer: {
    marginTop: hp("4.68%"),
    height: hp("7.59%"),
    width: wp("90%"),

    borderRadius: wp("3.62%"),
    justifyContent: "center",
    paddingLeft: wp("4.5%"),
    paddingRight: wp("4.5%"),
  },
  logoutText: {
    color: "rgba(255,213,0,1)",
    textAlign: "center",
    fontSize: wp("3.38%"),
    fontFamily: "Lato-Regular",
    lineHeight: hp("2.57%"),
    marginBottom: hp("4.46%"),
  },
});

export default HomeScreen;
