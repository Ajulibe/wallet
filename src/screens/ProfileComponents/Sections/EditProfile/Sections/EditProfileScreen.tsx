import React, { useRef } from "react";
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
import { ROUTES } from "../../../../../navigation/Routes";
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
        <View style={styles.ImageBackgroundContainer}>
          <ImageBackground
            source={require("../../../../../assets/images/mask.png")}
            style={styles.ImageBackground}
          >
            <View style={styles.backContainer}>
              <View style={styles.contentContainer}>
                <View style={styles.backView}>
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
            <View style={styles.editProfileContainer}>
              <Text style={styles.editProfileText}>Edit Profile</Text>
            </View>
            <View style={styles.userContainer}>
              <Feather name="user" size={40} color="black" />
            </View>
            <View style={styles.changeProfileContainer}>
              <Text style={styles.changeProfileText}>
                Change Profile Picture
              </Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ marginTop: hp("4.46%"), width: wp("90%") }}>
          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.CHANGE_NAME);
            }}
          >
            <View style={styles.nameMainContainer}>
              <View style={styles.nameTextContainer}>
                <View>
                  <Text style={styles.insideText}>Name</Text>
                </View>
                <View>
                  <Text style={styles.boldText}>Jane Doe</Text>
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.CHANGE_EMAIL);
            }}
          >
            <View style={styles.mainTextContainer}>
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.insideText}>Email</Text>
                </View>
                <View>
                  <Text style={styles.boldText}>j.doe@gmail.com</Text>
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

          <TouchableOpacity
            onPress={() => {
              navigation.navigate(ROUTES.CHANGE_PASSWORD);
            }}
          >
            <View style={styles.mainTextContainer}>
              <View style={styles.textContainer}>
                <View>
                  <Text style={styles.insideText}>Password</Text>
                </View>
                <View>
                  <Text style={styles.boldText}>................</Text>
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
    fontFamily: "Inter-Bold",
    color: "#ffffff",
  },
  welcomeMessage: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: wp("2.9%"),
    fontFamily: "Inter-Regular",
    lineHeight: hp("2.12%"),
  },
  Notification: {
    width: wp("10%"),
    height: wp("10%"),
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  ImageBackground: {
    flex: 1,
    width: wp("100%"),
    alignItems: "center",
    justifyContent: "center",
    zIndex: -1000,
  },
  ImageBackgroundContainer: {
    width: wp("100%"),
    height: hp("30.69%"),
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
  },
  backContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("90%"),
  },
  backView: {
    justifyContent: "center",
    alignItems: "center",
  },
  editProfileContainer: {
    width: wp("90%"),
    justifyContent: "center",
    paddingLeft: wp("4.5%"),
    paddingRight: wp("4.5%"),
  },
  editProfileText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: wp("3.86%"),
    fontFamily: "Inter-Regular",
    lineHeight: hp("2.57%"),
  },
  userContainer: {
    marginTop: hp("2.6%"),
    width: wp("24.15%"),
    height: wp("24.15%"),
    borderRadius: wp("24.15%"),
    backgroundColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
  changeProfileContainer: {
    marginTop: hp("2.12%"),
    height: hp("7.59%"),
    width: wp("90%"),
    borderRadius: wp("3.62%"),
    justifyContent: "center",
    paddingLeft: wp("4.5%"),
    paddingRight: wp("4.5%"),
  },
  changeProfileText: {
    color: "rgba(255,213,0,1)",
    textAlign: "center",
    fontSize: wp("3.38%"),
    fontFamily: "Inter-Regular",
    lineHeight: hp("2.57%"),
    marginBottom: hp("4.46%"),
  },
  nameMainContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
  },
  nameTextContainer: {
    width: wp("50%"),
    marginLeft: wp("2%"),
  },
  mainTextContainer: {
    justifyContent: "space-between",
    flexDirection: "row",
    alignItems: "center",
    marginTop: hp("3.34%"),
  },
  textContainer: {
    width: wp("50%"),
    marginLeft: wp("2%"),
  },
  insideText: {
    color: "rgba(128,148,181,1)",
    fontSize: wp("3.38%"),
    lineHeight: hp("2.89%"),
    fontFamily: "Inter-Regular",
  },
  boldText: {
    color: "rgba(0,21,56,1)",
    fontSize: wp("3.86%"),
    lineHeight: hp("2.89%"),
    fontFamily: "Inter-Bold",
  },
});

export default HomeScreen;
