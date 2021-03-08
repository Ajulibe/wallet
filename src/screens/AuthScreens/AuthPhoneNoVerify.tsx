import React, { useCallback, useState, useEffect } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   ScrollView,
   StatusBar,
   Image
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import OtpCodeInput from "../../components/OtpCodeInput";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import IMAGES from "../../utils/Images";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from "../../utils/Utilities";
import COLORS from "../../utils/Colors";
import { AuthService } from "../../services/AuthService";
import { CountryData } from "../../extra/CountryData";
import CircularProgress from "../../components/CircularProgress";

type Props = StackScreenProps<
   AuthStackParamList,
   ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN
>;

const CELL_COUNT = 5;
const AuthPhoneNoVerify = ({ navigation, route }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
   const [isLoading, setIsLoading] = useState(false);
   const [timer, setTimer] = useState(60);
   const [otpCode, setOtpCode] = useState("");
   const [errorText, setErrorText] = useState("");
   const [authDetail, setAuthDetail] = useState(route.params.authDetail);

   // set the navigation prop authDetail
   useEffect(() => {
      setAuthDetail(route.params.authDetail); //route.key, route.name, route.params,
   }, []);

   //Counter Countdown
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

   //OTP CODE INPUT TEXT CHANGE LISTENER
   let otpInputChangeHandler = useCallback((value) => {

      const otp = value.toString();
      setOtpCode(value);
      if (otp.length != 5) {
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setErrorText("");
         setBtnBgColor(COLORS.light.primary);
      }
   }, []);

   // on submit click handler
   let onSubmit = () => {
      if (otpCode == "") {
         setErrorText("OTP required");
      } else if (otpCode.length != CELL_COUNT) {
         setErrorText("Enter 5 digit OTP");
      } else {
         verifyOtp();
      }
   };

   //otp submit handler
   const verifyOtp = () => {
      setIsLoading(true);
      let nigPhone = CountryData.nigPhoneFormat(authDetail.phoneNo!);
      AuthService.verifyOtp({
         phoneNo: nigPhone,
         otpCode: otpCode,
         verifyId: authDetail.verifyId!
      }).then((response) => {
         setIsLoading(false);
         if (String(response.success) === "true") {
            setErrorText("");
            authDetail.phoneOtp = otpCode;
            navigation.navigate(ROUTES.AUTH_FULL_NAME_SCREEN, {
               authDetail: authDetail
            });
         } else {
            setErrorText(response.message!);
         }
      });
   };

   //otp submit handler
   const resendOtp = () => {
      setIsLoading(true);
      let nigPhone = CountryData.nigPhoneFormat(authDetail.phoneNo!);
      AuthService.sendOtp({ phoneNo: nigPhone }).then((response) => {
         setIsLoading(false);
         if (response.success) {
            setTimer(60);
            authDetail.verifyId = response.additionalParam;
         } else {
            setErrorText(response.message!);
         }
      });
   };

   return (
      <ScrollView
         contentContainerStyle={{ flexGrow: 1 }}
         keyboardShouldPersistTaps="handled"
      >
         <View style={styles.wrapper}>
            <StatusBar backgroundColor={COLORS.light.white} />
            <View style={styles.overlayWrapper}>
               <Image
                  source={IMAGES["top-overlay-white"]}
                  style={styles.overlayImage}
               />
            </View>

            <View style={styles.container}>
               <View>
                  <TouchableOpacity onPress={() => navigation.goBack()}>
                     <MaterialIcons
                        name={"arrow-back-ios"}
                        size={24}
                        color={COLORS.light.blackLight}
                     />
                  </TouchableOpacity>
               </View>

               <View style={styles.formTitleWrapper}>
                  <Text style={styles.formTitle}>{`Verify \nNumber`}</Text>
                  <CircularProgress icon={"phone"} progress={24} size={70} />
               </View>

               <Text style={styles.formSubtitle}>
                  Please enter the 5-digit pin sent to
                  <Text style={{ fontFamily: "Inter-Bold" }}>
                     {" "}
                     {authDetail.phoneNo}
                  </Text>
               </Text>

               {/* custom otp plugin   */}
               <OtpCodeInput
                  cellCount={CELL_COUNT}
                  onTextInputChange={otpInputChangeHandler}
                  pinVisible={true}
                  errorText={errorText}
               />

               {/* timer and resent btn   */}
               {!isLoading && (
                  <View
                     style={{
                        justifyContent: "center",
                        alignItems: "center",
                        marginTop: 10
                     }}
                  >
                     {timer > 0 ? (
                        <Text
                           style={{
                              color: COLORS.light.black,
                              fontFamily: "Inter-Regular"
                           }}
                        >
                           Resend OTP in{" "}
                           <Text style={{ fontFamily: "Inter-Bold" }}>
                              {UTILITIES.formateTime(timer)}s
                           </Text>
                        </Text>
                     ) : (
                        <View
                           style={{
                              flexDirection: "row",
                              alignItems: "center"
                           }}
                        >
                           <View>
                              <Text>Didnt get code?</Text>
                           </View>
                           <TouchableOpacity onPress={() => resendOtp()}>
                              <Text style={styles.secondaryButton}>
                                 {" "}Resend Code
                              </Text>
                           </TouchableOpacity>
                        </View>
                     )}
                  </View>
               )}
               {/* loading spinner  */}
               {/* {isLoading && <LoadingSpinner />} */}
               <View style={{ height: 20 }} />
               {/* continue btn  */}
               <CustomButton
                  bgColor={
                     isLoading ? COLORS.light.disabled : btnBgColor
                  }
                  textColor={COLORS.light.white}
                  btnText={"Continue"}
                  isLoading={isLoading}
                  onClick={() => onSubmit()}
               />
            </View>
         </View>
      </ScrollView>
   );
};

export default AuthPhoneNoVerify;
