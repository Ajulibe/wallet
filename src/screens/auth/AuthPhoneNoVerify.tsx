import React, { useCallback, useState, useEffect } from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import PinInput from '../../components/InputPin';
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CircularProgress from "../../components/CircularProgress";
import IMAGES from "../../utils/Images";
import ProgressLoader from "../../components/ProgressLoader";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from '../../utils/Utilities'

type Props = StackScreenProps<
  AuthStackParamList,
  ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN
>;

const CELL_COUNT = 6;
const AuthPhoneNoVerify = ({ navigation }: Props) => {
  const [isLoading, setIsLoading] = useState(false);
  const [timer, setTimer] = useState(60);
  const [otpCode, setOtpCode] = useState('');
  const [errorText, setErrorText] = useState('');

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

  //OTP CODE INPUT LISTENER
  let otpInputChangeHandler = useCallback((value) => {
    const otp = value.toString();
    // setOtpCode(value);
    console.log(value)
    if (otp.length != 6) {
      if (errorText.length != 0)
        setErrorText("Incorrect pin")
    } else {
      if (otp != '111111')
        setErrorText("Incorrect pin")
      else {
        setErrorText('')
        navigation.navigate(ROUTES.AUTH_FULL_NAME_SCREEN);
      }
    }
  }, []);

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
    <View style={styles.container}>
      <CircularProgress icon="phonelink-ring" progress={40} iconType={"MaterialIcons"}/>

      <Text style={styles.formTitle}>
        Check your SMS for a <Text style={styles.bold}>6 digit code</Text> from Surepay. Enter it here to secure your account.
      </Text>

      <Text style={styles.inputLabel}>Your Code</Text>

      <PinInput
        cellCount={CELL_COUNT}
        onTextInputChange={otpInputChangeHandler}
        pinVisible={true}
        errorText={errorText}
      />

      <View style={{ justifyContent: "center", alignItems: "center", marginTop: 24 }}>
        {timer > 0 ?
          <Text>Waiting: {UTILITIES.formateTime(timer)}</Text> : (
            <TouchableOpacity onPress={() => null}>
              <Text style={styles.secondaryButton}>Resend Code</Text>
            </TouchableOpacity>
          )}
      </View>

      <View style={{ flex: 1 }} />

      {/* <ProgressLoader isLoading={isLoading} imgSrc={IMAGES.loading} /> */}
    </View>
    </ScrollView>
    );
};

export default AuthPhoneNoVerify;
