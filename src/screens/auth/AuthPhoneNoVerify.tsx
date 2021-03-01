import React, { useCallback, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView, StatusBar, Image, } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { RouteProp } from '@react-navigation/native';
import OtpCodeInput from "../../components/OtpCodeInput";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import IMAGES from "../../utils/Images";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from "../../utils/Utilities";
import COLORS from "../../utils/Colors";
import LoadingSpinner from "../../components/LoadingSpinner";

type Props = StackScreenProps<
  AuthStackParamList,
  ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN
>;

const CELL_COUNT = 5;
const AuthPhoneNoVerify = ({ navigation, route }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primaryDisabled);
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpCode, setOtpCode] = useState("");
  const [errorText, setErrorText] = useState("");

  useEffect(() => {
    console.log(route.params)
    // console.log(route)//route.key, route.name, route.params, 
  }, [])
  useEffect(() => {
    let myInterval = setInterval(() => {
      if (timer > 0) {
        setTimer(timer - 1);
      }
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, [timer]);

  let onSubmit = () => {
    if (otpCode.length != 5) {
      if (errorText.length != 0) setErrorText("Incorrect pin");
    } else {
      if (otpCode != "11111") setErrorText("Incorrect pin");
      else {
        setErrorText("");
        navigation.navigate(ROUTES.AUTH_FULL_NAME_SCREEN);
      }
    }

  }

  //OTP CODE INPUT LISTENER
  let otpInputChangeHandler = useCallback((value) => {
    setBtnBgColor(COLORS.light.primaryDisabled)

    const otp = value.toString();
    setOtpCode(value);
    if (otp.length != 5) {
      if (errorText.length != 0) setErrorText("Incorrect pin");
    } else {
      if (otp != "11111") setErrorText("Incorrect pin");
      else {
        setErrorText("");
        setBtnBgColor(COLORS.light.primary)
        // navigation.navigate(ROUTES.AUTH_FULL_NAME_SCREEN);
      }
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
      <View style={styles.wrapper}>

        <StatusBar backgroundColor={COLORS.light.white} />
        <View style={styles.overlayWrapper}>
          <Image source={IMAGES["top-overlay-white"]} style={styles.overlayImage} />
        </View>

        <View style={styles.container}>

          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={"arrow-back-ios"}
                size={24}
                color={COLORS.light.secondary}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>
            Verify Number
        </Text>
          <Text style={styles.formSubtitle}>
            Please enter the 5 digit code  sent to  <Text style={{ fontFamily: 'Lato-Bold' }}>+234809488483</Text>
          </Text>

          {/* custom otp plugin   */}
          <OtpCodeInput
            cellCount={CELL_COUNT}
            onTextInputChange={otpInputChangeHandler}
            pinVisible={true}
            errorText={errorText}
          />

          {/* timer and resent btn   */}
          {!isLoading && <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginTop: 24,
            }} >
            {timer > 0 ? (
              <Text style={{ color: COLORS.light.secondary, fontFamily: 'Lato-Regular' }}>Resend OTP in <Text style={{ fontFamily: 'Lato-Bold' }}>{UTILITIES.formateTime(timer)}s</Text></Text>
            ) : (
                <TouchableOpacity onPress={() => null}>
                  <Text style={styles.secondaryButton}>Resend Code</Text>
                </TouchableOpacity>
              )}
          </View>}
          {/* loading spinner  */}
          {(isLoading && <LoadingSpinner />)}
          <View style={{ flex: 1 }} />
          {/* continue btn  */}
          <CustomButton
            bgColor={isLoading ? COLORS.light.primaryDisabled : btnBgColor}
            textColor={COLORS.light.white}
            btnText={"Continue"}
            onClick={() => onSubmit()}
          />
        </View>

      </View>
    </ScrollView>
  );
};

export default AuthPhoneNoVerify;