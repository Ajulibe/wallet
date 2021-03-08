import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Dimensions,
  TouchableOpacity,
  ImageSourcePropType,
  StatusBar
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import IMAGES from "../../utils/Images";
import { Ionicons } from "@expo/vector-icons";
import * as Animatable from "react-native-animatable";
import CircularProgress from "../../components/CircularProgress";
import authStyles from "../../components/css/AuthFormCss";
import { MaterialIcons } from "@expo/vector-icons";
import Snackbar from "react-native-snackbar";

type Props = StackScreenProps<
  AuthStackParamList,
  ROUTES.AUTH_GET_STARTED_SCREEN
>;
type State = {
  activeIndex: any;
  flicker: boolean;
  carouselItems: any;
};

class AuthGetStarted extends React.PureComponent<Props, State> {
  // Define your state for your component.
  constructor(props: Props) {
    super(props);
  }
  // @ts-ignore
  copyAccNo = () => {
    // Snackbar.show({
    //   text: "Account Number Copied",
    //   duration: Snackbar.LENGTH_SHORT,
    //   action: {
    //     text: "CLOSE",
    //     textColor: "green",
    //     onPress: () => {
    //       /* Do something. */
    //     }
    //   }
    // });
  };

  render() {
    // Destruct navigation from props
    const { navigation } = this.props;

    return (
      <View style={{ flex: 1 }}>
        <View style={styles.wrapper}>
          <StatusBar
            backgroundColor={COLORS.light.secondary}
            barStyle={"light-content"}
          />
          <View style={styles.overlayWrapper}>
            <Image
              source={IMAGES["top-overlay-dark2"]}
              style={styles.overlayImage}
            />
          </View>

          <View style={styles.container}>
            <View style={{ flexDirection: "row" }}>
              {/* Back Button */}
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <MaterialIcons
                  name={"arrow-back-ios"}
                  size={24}
                  color={COLORS.light.blackLight}
                />
              </TouchableOpacity>
            </View>

            <View style={authStyles.formTitleWrapper}>
              <Text style={authStyles.formTitle}>
                {"Welcome, \nRay"}
              </Text>
              <CircularProgress icon={"check"} progress={100} size={60} iconType={"FontAwesome5"} />
            </View>
            <Text
              style={authStyles.formSubtitle}
            >{`Your personal wallet and account number is ready!!`}</Text>

            <Animatable.View
              key={0}
              animation={"slideInRight"}
              easing={"ease-out-cubic"}
              duration={3000}
              style={styles.cardWrapper}
            >
              <View style={styles.accountNameRow}>
                <Text style={styles.accountNameText}>
                  Account Number
                        </Text>
                <TouchableOpacity onPress={this.copyAccNo}>
                  <Ionicons
                    name="ios-copy"
                    size={24}
                    color="#908989"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.accountNumberText}>00130928839</Text>
              <View style={styles.bankNameRow}>
                <View style={styles.bankNameCol}>
                  <Text style={styles.bankNameTitle}>
                    Account Name
                           </Text>
                  <Text style={styles.bankNameText}>John Doe</Text>
                </View>
                <View style={styles.bankNameCol}>
                  <Text style={styles.bankNameTitle}>Bank</Text>
                  <Text style={styles.bankNameText}> GTBank</Text>
                </View>
              </View>
            </Animatable.View>

            <Text
              style={[authStyles.inputLabel, { textAlign: "justify" }]}
            >
              You can use this account number to make and recieve
              payments nationwide across all banks in the country.
                  </Text>

            <CustomButton
              bgColor={COLORS.light.primary}
              textColor={COLORS.light.white}
              btnText={"Finish"}
              onClick={() => navigation.navigate(ROUTES.NEW_HOME_TAB)}
            />
            <View
              style={{
                flexDirection: "row",
                alignItems: "center",
                marginTop: 20,
                justifyContent: "center"
              }}
            ></View>
          </View>
        </View>
      </View>
    );
  }
}

export default AuthGetStarted;

const styles = StyleSheet.create({
  wrapper: {
    position: "relative",
    flex: 1,
    backgroundColor: COLORS.light.white
  },
  overlayWrapper: {
    height: hp("29.67%"),
    width: "100%",
    position: "absolute",
    top: 0,
    left: 0,
    right: 0
  },
  overlayImage: {
    flex: 1,
    width: "100%",
    opacity: 0.6,
    height: "100%",
    resizeMode: "cover"
  },
  container: {
    flex: 1,
    height: hp("100%"),
    width: "100%",
    paddingHorizontal: wp("8%"),
    paddingVertical: hp("8%")
  },
  cardWrapper: {
    borderRadius: wp("1.86%"),
    backgroundColor: "#F7F7F7",
    paddingHorizontal: wp("6.93%"),
    paddingVertical: hp("1.47%"),
    marginBottom: hp("3.32%")
  },
  accountNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  accountNameText: {
    color: "#828282",
    fontSize: wp("2.66%")
  },
  accountNumberText: {
    fontSize: wp("5.33%"),
    color: COLORS.light.primary,
    fontFamily: "Inter-Bold",
    lineHeight: hp("3.07%")
  },
  bankNameRow: {
    flexDirection: "row",
    height: hp("3.07%"),
    marginTop: hp("1.23%")
  },
  bankNameCol: {
    flex: 1
  },
  bankNameTitle: {
    color: "#828282",
    fontSize: wp("2.66%")
  },
  bankNameText: {
    color: COLORS.light.black,
    fontSize: wp("3.73%")
  }
});
