import React, { useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";
import { GUIDE } from "../constants/StyleGuide";

import QuickOptionsScreen from "./HomeScreenComponents/QuickOptionsComponent";
import DashBoardComponent from "./HomeScreenComponents/DashBoardComponent";
import IMAGES from "../../utils/Images";

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const HomeScreen: NavigationBottomTabScreenComponent<Props> = () => {
  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  const WIDTH = wp("90.08%");

  return (
    <SafeAreaView style={styles.container}>
      {/* <View>
          <Image
            source={require("../../assets/images/Mask Group.png")}
            style={{ width: wp("100%"), height: wp("100%") }}
          />
        </View> */}
      <View style={styles.contentContainer}>
        {/* <View
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <TouchableOpacity>
              <Image
                source={IMAGES.newAvatar}
                style={{ width: wp("10.39%"), height: wp("10.39%") }}
              />
            </TouchableOpacity>
          </View> */}

        {/* <View
            style={{
              justifyContent: "center",
            }}
          >
            <Text style={styles.profileName}>Hi Jane</Text>
            <Text
              style={[styles.welcomeMessage, { color: GUIDE.SECONDARY_COLOR }]}
            >
              Welcome Back!
            </Text>
          </View> */}
        {/* </View>
        <View style={styles.Notification}>
          <TouchableOpacity>
            <Image
              source={IMAGES.bells}
              style={{ width: wp("3.22%"), height: hp("1.67%%") }}
            />
          </TouchableOpacity> */}
      </View>

      {/* <DashBoardComponent />
      <QuickOptionsScreen /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingLeft: wp("7.24%"),
    paddingRight: wp("7.24%"),
    alignItems: "center",
    height: hp("100%"),
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("29%"),
    marginTop: hp("1.8%"),
    backgroundColor: "#00296B",
  },
  profileName: {
    fontSize: wp("4.35%"),
    fontFamily: "Lato-Bold",
    color: "#202344",
  },
  welcomeMessage: {
    fontSize: wp("2.4%"),
    fontFamily: "Lato-Light",
  },
  Notification: {
    width: wp("10%"),
    height: wp("10%"),
    borderColor: "#F6F4FD",
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
