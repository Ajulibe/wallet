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

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const HomeScreen: NavigationBottomTabScreenComponent<Props> = () => {
  const ref = useRef<ScrollView | null>(null);

  useScrollToTop(ref);

  const WIDTH = wp("90.08%");

  return (
    <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
      <ScrollView ref={ref}>
        <View style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "space-between",
              width: WIDTH,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                justifyContent: "space-between",
                width: wp("29%"),
              }}
            >
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Image
                  source={require("../../assets/images/newAvatar.png")}
                  style={{ width: wp("10.39%"), height: hp("4.8%") }}
                />
              </View>
              <View
                style={{
                  justifyContent: "center",
                }}
              >
                <Text style={styles.profileName}>Hi Jane</Text>
                <Text
                  style={[
                    styles.welcomeMessage,
                    { color: GUIDE.SECONDARY_COLOR },
                  ]}
                >
                  Welcome Back!
                </Text>
              </View>
            </View>
            <View style={styles.Notification}>
              <TouchableOpacity>
                <Image
                  source={require("../../assets/images/bells.png")}
                  style={{ width: wp("3.22%"), height: hp("1.67%%") }}
                />
              </TouchableOpacity>
            </View>
          </View>
          <DashBoardComponent />
          <QuickOptionsScreen />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    flex: 1,
    paddingLeft: wp("7.24%"),
    paddingRight: wp("7.24%"),
    alignItems: "center",
    height: hp("100%"),
    marginTop: hp("1%"),
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
    width: wp("10.38%"),
    height: wp("10.38%%"),
    borderColor: "#F6F4FD",
    borderWidth: 1,
    borderRadius: 4,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
