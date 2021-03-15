import React, { useState } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  Clipboard,
  TouchableOpacity,
  StatusBar,
  ImageBackground
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
import { Snackbar } from "react-native-paper";
// import Clipboard from "@react-native-community/clipboard";
//redux wahala
import { useSelector } from "react-redux";
import { RootState } from "../../store/reducers/RootReducer";

type Props = StackScreenProps<
  AuthStackParamList,
  ROUTES.AUTH_FINAL_LOADING_SCREEN
>;
type State = {
  showSnackBar: boolean;
};

const AuthGetStarted = ({ navigation, route }: Props) => {
  // Define your state for your component.
  const [showSnackBar, setShowSnackBar] = useState(false);

  //REDUCER DISPATCH
  const { user } = useSelector((state: RootState) => state.user);

  // @ts-ignore
  const copyAccNo = () => {
    Clipboard.setString(String(user.bank?.accountNumber));

    setShowSnackBar(true);
    setTimeout(() => {
      if (showSnackBar) setShowSnackBar(false);
    }, 100);
  };

  return (
    <View style={{ flex: 1 }}>
      <View style={styles.wrapper}>
        <StatusBar
          backgroundColor={COLORS.light.secondary}
          barStyle={"light-content"}
        />

        <View style={styles.container}>
          <CircularProgress
            icon={"check"}
            progress={100}
            size={70}
            iconType={"FontAwesome5"}
          />
          <Text
            style={[
              authStyles.formTitle,
              { marginTop: hp("2.95%"), textAlign: "center" }
            ]}
          >
            {`Welcome, ${user.firstName}`}
          </Text>
          <Text
            style={[
              authStyles.formSubtitle,
              { textAlign: "center", width: "100%" }
            ]}
          >{`Your personal wallet and account number is ready!!`}</Text>

          <Animatable.View
            key={0}
            animation={"slideInRight"}
            easing={"ease-out-cubic"}
            duration={3000}
            style={styles.cardWrapper}
          >
            <ImageBackground
              source={IMAGES["card"]}
              imageStyle={{ borderRadius: 30 }}
              style={{ width: "100%", height: "100%" }}
            />
            <View style={styles.card}>
              <View style={styles.accountNameRow}>
                <Text style={styles.accountNameText}>
                  Account Number
                        </Text>
                <TouchableOpacity onPress={copyAccNo}>
                  <Ionicons
                    name="ios-copy"
                    size={24}
                    color="rgba(255,255,255,0.6)"
                  />
                </TouchableOpacity>
              </View>
              <Text style={styles.accountNumberText}>
                {user.bank?.accountNumber}
              </Text>
              <View style={{ flex: 1 }} />
              <View style={styles.bankNameRow}>
                <View style={styles.bankNameCol}>
                  <Text style={styles.bankNameTitle}>
                    Account Name
                           </Text>
                  <Text style={styles.bankNameText}>
                    {user.bank?.accountName}
                  </Text>
                </View>
                <View style={styles.bankNameCol}>
                  <Text style={styles.bankNameTitle}>Bank</Text>
                  <Text style={styles.bankNameText}>
                    {user.bank?.bankName}
                  </Text>
                </View>
              </View>
            </View>
          </Animatable.View>

          <Text
            style={[
              authStyles.inputLabel,
              { color: COLORS.light.blackLight, textAlign: "center" }
            ]}
          >
            You can use this account number to make and recieve payments
            nationwide across all banks in the country.
               </Text>

          <View style={{ flex: 1 }} />
          <CustomButton
            bgColor={COLORS.light.primary}
            textColor={COLORS.light.white}
            btnText={"Finish"}
            onClick={() => navigation.navigate(ROUTES.NEW_HOME_TAB)}
          />
          <View style={{ flex: 1 }} />
          <View
            style={{
              alignItems: "center"
            }}
          >
            <Snackbar
              visible={showSnackBar}
              onDismiss={() => setShowSnackBar(false)}
              action={{
                label: "CLOSE",
                onPress: () => setShowSnackBar(false)
              }}
              style={{ backgroundColor: COLORS.light.black }}
            >
              <View>
                <Text
                  style={{
                    color: COLORS.light.white,
                    fontFamily: "Inter-Medium"
                  }}
                >
                  Account Number Copied
                        </Text>
              </View>
            </Snackbar>
          </View>
        </View>
      </View>
    </View>
  );
};

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
    paddingVertical: hp("8%"),
    paddingTop: hp("15%")
  },
  cardWrapper: {
    position: "relative",
    marginBottom: hp("3.32%"),
    // marginTop: hp("4.3%"),
    height: hp("22.9%")
  },
  card: {
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    bottom: 0,
    paddingHorizontal: wp("6.4%"),
    paddingVertical: hp("3.69%%"),
    paddingBottom: hp("5%%")
  },
  accountNameRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  },
  accountNameText: {
    color: "rgba(255,255,255,0.6)",
    fontSize: wp("3.73%%"),
    fontFamily: "Inter-Regular",
    lineHeight: hp("2.95%")
  },
  accountNumberText: {
    fontSize: wp("6.4%"),
    color: COLORS.light.white,
    fontFamily: "Inter-Regular",
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
    color: "rgba(255,255,255,0.6)",
    fontSize: wp("3.73%%"),
    fontFamily: "Inter-Regular"
  },
  bankNameText: {
    color: COLORS.light.white,
    fontSize: wp("4.26%"),
    fontFamily: "Inter-Medium",
    lineHeight: hp("2.95%")
  }
});
