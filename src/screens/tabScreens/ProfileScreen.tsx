import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
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
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { SimpleLineIcons } from "@expo/vector-icons";
import { ROUTES } from "../../navigation/Routes";

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const HomeScreen: NavigationBottomTabScreenComponent<Props> = ({
  navigation,
}) => {
  const ref = useRef<ScrollView | null>(null);
  useScrollToTop(ref);

  const WIDTH = wp("90%");

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#00296B" }} />
      <View style={styles.container}>
        <View
          style={{
            width: wp("100%"),
            height: hp("34.26%"),
            backgroundColor: "#00296B",
            borderBottomLeftRadius: wp("7.25%"),
            borderBottomRightRadius: wp("7.25%"),
            alignItems: "center",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowColor: "#00296B",
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 1,
          }}
        >
          <ImageBackground
            source={require("../../assets/images/mask.png")}
            style={{
              flex: 1,
              width: wp("100%"),
              alignItems: "center",
              justifyContent: "center",
              zIndex: -1000,
            }}
          >
            <View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("90%"),
              }}
            >
              <View style={styles.contentContainer}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(ROUTES.MAIN_FLOW_TAB);
                    }}
                  >
                    <Ionicons
                      name="chevron-back-outline"
                      size={24}
                      color="#ffffff"
                    />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
            <View
              style={{
                marginTop: hp("4.46%"),
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: wp("16.67%"),
                  height: wp("16.67%"),
                  borderRadius: wp("16.67%"),
                  backgroundColor: "#ffffff",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: hp("2.23%"),
                }}
              >
                <Feather name="user" size={24} color="black" />
              </View>
              <Text
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: wp("3.86%"),
                  fontFamily: "Lato-Bold",
                  lineHeight: hp("2.9%"),
                }}
              >
                Jane Doe
              </Text>
              <Text
                style={{
                  color: "rgba(128,148,181,1)",
                  textAlign: "center",
                  fontSize: wp("2.9%"),
                  fontFamily: "Lato-Regular",
                  lineHeight: hp("2.16%"),
                }}
              >
                j.doe@gmail.com
              </Text>
            </View>
            <View
              style={{
                marginTop: hp("4.68%"),
                height: hp("7.59%"),
                width: wp("90%"),

                borderRadius: wp("3.62%"),
                justifyContent: "center",
                paddingLeft: wp("4.5%"),
                paddingRight: wp("4.5%"),
              }}
            >
              <Text
                style={{
                  color: "rgba(255,213,0,1)",
                  textAlign: "center",
                  fontSize: wp("3.38%"),
                  fontFamily: "Lato-Regular",
                  lineHeight: hp("2.57%"),
                  marginBottom: hp("4.46%"),
                }}
              >
                Logout
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ marginTop: hp("4.46%"), width: wp("90%") }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.EDIT_PROFILE_SCREEN);
            }}
          >
            <View style={{}}>
              <View
                style={{
                  width: wp("50%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: wp("2%"),
                }}
              >
                <View style={{ width: wp("10%") }}>
                  <Feather name="edit-2" size={18} color="#4D6997" />
                </View>

                <Text
                  style={{
                    color: "rgba(77,105,151,1)",
                    fontSize: wp("3.86%"),
                    lineHeight: hp("2.89%"),
                    fontFamily: "Lato-Regular",
                  }}
                >
                  Edit Profile
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.SECURITY);
            }}
          >
            <View style={{ marginTop: hp("3.34%") }}>
              <View
                style={{
                  width: wp("50%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: wp("2%"),
                }}
              >
                <View style={{ width: wp("10%") }}>
                  <Feather name="lock" size={20} color="rgba(77,105,151,1)" />
                </View>

                <Text
                  style={{
                    color: "rgba(77,105,151,1)",
                    fontSize: wp("3.86%"),
                    lineHeight: hp("2.89%"),
                    fontFamily: "Lato-Regular",
                  }}
                >
                  Security
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ marginTop: hp("3.34%") }}>
              <View
                style={{
                  width: wp("50%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: wp("2%"),
                }}
              >
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

                <Text
                  style={{
                    color: "rgba(77,105,151,1)",
                    fontSize: wp("3.86%"),
                    lineHeight: hp("2.89%"),
                    fontFamily: "Lato-Regular",
                  }}
                >
                  Settings
                </Text>
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View style={{ marginTop: hp("3.34%") }}>
              <View
                style={{
                  width: wp("50%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "flex-start",
                  marginLeft: wp("2%"),
                }}
              >
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

                <Text
                  style={{
                    color: "rgba(77,105,151,1)",
                    fontSize: wp("3.86%"),
                    lineHeight: hp("2.89%"),
                    fontFamily: "Lato-Regular",
                  }}
                >
                  Customer Support
                </Text>
              </View>
            </View>
          </TouchableOpacity>
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
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("33%"),
    backgroundColor: "#00296B",
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
});

export default HomeScreen;
