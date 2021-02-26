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
import { MaterialIcons } from "@expo/vector-icons";

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
            height: hp("12.83%"),
            backgroundColor: "#00296B",
            borderBottomLeftRadius: wp("7.25%"),
            borderBottomRightRadius: wp("7.25%"),
            alignItems: "center",
            shadowOffset: {
              width: 0,
              height: 3,
            },
            shadowColor: "#00296B",
            shadowOpacity: 0.1,
            shadowRadius: 1,
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
                      navigation.navigate(ROUTES.PROFILE_SCREEN);
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
                width: wp("90%"),
                justifyContent: "center",
                paddingLeft: wp("4.5%"),
                paddingRight: wp("4.5%"),
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: wp("3.86%"),
                  fontFamily: "Lato-Regular",
                  lineHeight: hp("2.57%"),
                  marginBottom: hp("5.69%"),
                }}
              >
                Security
              </Text>
            </View>
          </ImageBackground>
        </View>
        <View style={{ marginTop: hp("4.46%"), width: wp("90%") }}>
          <TouchableOpacity>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <View
                style={{
                  width: wp("80%"),
                  marginLeft: wp("2%"),
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "rgba(128,148,181,1)",
                      fontSize: wp("3.38%"),
                      lineHeight: hp("2.89%"),
                      fontFamily: "Lato-Regular",
                    }}
                  >
                    2FA
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "rgba(0,21,56,1)",
                      fontSize: wp("3.86%"),
                      lineHeight: hp("2.89%"),
                      fontFamily: "Lato-Bold",
                    }}
                  >
                    Setup 2-Factor Authentication
                  </Text>
                </View>
              </View>
              <View style={{ width: wp("10%") }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#4D6997"
                />
              </View>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                justifyContent: "space-between",
                flexDirection: "row",
                alignItems: "center",
                marginTop: hp("3.34%"),
              }}
            >
              <View
                style={{
                  width: wp("80%"),
                  marginLeft: wp("2%"),
                }}
              >
                <View>
                  <Text
                    style={{
                      color: "rgba(128,148,181,1)",
                      fontSize: wp("3.38%"),
                      lineHeight: hp("2.89%"),
                      fontFamily: "Lato-Regular",
                    }}
                  >
                    Security Question
                  </Text>
                </View>
                <View>
                  <Text
                    style={{
                      color: "rgba(0,21,56,1)",
                      fontSize: wp("3.86%"),
                      lineHeight: hp("2.89%"),
                      fontFamily: "Lato-Bold",
                    }}
                  >
                    Setup Security Question
                  </Text>
                </View>
              </View>
              <View style={{ width: wp("10%") }}>
                <MaterialIcons
                  name="keyboard-arrow-right"
                  size={24}
                  color="#4D6997"
                />
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
