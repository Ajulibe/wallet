import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Text,
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
import { Ionicons } from "@expo/vector-icons";
import { ROUTES } from "../../../../../navigation/Routes";
import CustomButton from "../../../../../components/Button";
import COLORS from "../../../../../utils/Colors";
import Input from "../../../../../components/Input";

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const ChangeName: NavigationBottomTabScreenComponent<Props> = ({
  navigation,
}) => {
  const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.primary);
  const [firstname, setFirstname] = useState<string | null>("");
  const [lastname, setLastName] = useState<string | null>("");

  const onSubmit = () => {};
  const inputChangeHandler = (value: any) => {};

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#00296B" }} />
      <View style={styles.container}>
        <View style={styles.ImageBackgroundContainer}>
          <ImageBackground
            source={require("../../../../../assets/images/mask.png")}
            style={styles.ImageBackground}
          >
            <View style={styles.backMainContainer}>
              <View style={styles.contentContainer}>
                <View style={styles.backContainer}>
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(ROUTES.EDIT_PROFILE_SCREEN);
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

            <View style={styles.securityTextContainer}>
              <Text style={styles.securityText}>Edit Profile Name</Text>
            </View>
          </ImageBackground>
        </View>

        <View style={{ marginTop: hp("4.46%"), width: wp("90%") }}>
          <Input
            id="firstname"
            placeholder="Firstname"
            placeholderTextColor="rgb(134,146,185,1)"
            errorText="Enter your first name"
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            onSubmit={onSubmit}
            initialValue=""
            initiallyValid={false}
            required
            secureTextEntry={false}
            minLength={2}
            textContentType="none"
          />
          <View style={{ height: hp("3.36%") }} />
          <Input
            id="lastname"
            placeholder="LastName"
            placeholderTextColor="rgb(134,146,185,1)"
            errorText="Enter your last name"
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="next"
            onInputChange={inputChangeHandler}
            onSubmit={onSubmit}
            initialValue=""
            initiallyValid={false}
            required
            secureTextEntry={false}
            minLength={2}
            textContentType="none"
          />
          <View style={{ height: hp("3.36%") }} />
        </View>

        <View
          style={{
            width: wp("90%"),
            marginTop: hp("78.56%"),
            position: "absolute",
          }}
        >
          <CustomButton
            bgColor={btnBgColor}
            textColor={COLORS.light.white}
            btnText="Save"
            onClick={onSubmit}
          />
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
  securityText: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: wp("3.86%"),
    fontFamily: "Lato-Regular",
    lineHeight: hp("2.57%"),
    marginBottom: hp("5.69%"),
  },
  securityTextContainer: {
    width: wp("90%"),
    justifyContent: "center",
    paddingLeft: wp("4.5%"),
    paddingRight: wp("4.5%"),
  },
  ImageBackgroundContainer: {
    width: wp("100%"),
    height: hp("12.83%"),
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
  backMainContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: wp("90%"),
  },
  backContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
});

export default ChangeName;