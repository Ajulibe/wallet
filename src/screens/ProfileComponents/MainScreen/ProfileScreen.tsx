import React, { useRef } from "react";
import { View, StyleSheet, ScrollView, SafeAreaView } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";
import { ROUTES } from "../../../navigation/Routes";
import EditProfile from "../Sections/EditProfile/EditProfile";
import Security from "../Sections/Security/Security";
import Settings from "../Sections/Settings/Settings";
import CustomerSupport from "../Sections/CustomerSupport/CustomerSupport";
import ImageBackgroundScreen from "../../tabScreens/ImageBackground";

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const HomeScreen: NavigationBottomTabScreenComponent<Props> = ({
  navigation,
}) => {
  const ref = useRef<ScrollView | null>(null);
  useScrollToTop(ref);

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#00296B" }} />
      <View style={styles.container}>
        <ImageBackgroundScreen
          onPress={() => {
            navigation.navigate(ROUTES.MAIN_FLOW_TAB);
          }}
        />
        <View style={{ marginTop: hp("4.46%"), width: wp("90%") }}>
          <EditProfile
            onPress={() => {
              navigation.navigate(ROUTES.EDIT_PROFILE_SCREEN);
            }}
          />
          <Security
            onPress={() => {
              navigation.navigate(ROUTES.SECURITY);
            }}
          />
          <Settings />
          <CustomerSupport />
        </View>
      </View>
    </>
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
  profileName: {
    fontSize: wp("4.35%"),
    fontFamily: "Lato-Bold",
    color: "#ffffff",
  },
  welcomeMessage: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: wp("2.9%"),
    fontFamily: "Lato-Regular",
    lineHeight: hp("2.12%"),
  },
  Notification: {
    width: wp("10%"),
    height: wp("10%"),
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
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
