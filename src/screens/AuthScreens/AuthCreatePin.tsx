import React, { useState, useEffect, useCallback } from "react";
import {
   Text,
   View,
   ScrollView,
   StyleSheet,
   StatusBar,
   TouchableOpacity,
   Image,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { Switch } from "react-native-switch";
import PinInput from "../../components/InputPin";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import { ROUTES } from "../../navigation/Routes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IMAGES from "../../utils/Images";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from "../../utils/Utilities";
import * as LocalAuthentication from "expo-local-authentication";
import { widthPercentageToDP } from "react-native-responsive-screen";
import { CheckBox } from "react-native-elements";
import { STORAGE_KEYS } from "../../utils/StorageKeys";
import AsyncStorage from "@react-native-async-storage/async-storage";

import CircularProgress from "../../components/CircularProgress";

const CELL_COUNT = 4;

type Props = StackScreenProps<
   AuthStackParamList,
   ROUTES.AUTH_CREATE_PIN_SCREEN
>;

const AuthCreatePin = ({ navigation, route }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
   const [authDetail, setAuthDetail] = useState(route.params.authDetail);
   const [pinValue, setPinValue] = useState(""); //PIN CODE
   const [pinValueConfirm, setPinValueConfirm] = useState(""); //CONFIRM PIN
   //FOR FORM ERROR DISPLAY
   const [errorText, setErrorText] = useState("");

   //CHECKING IF FINGER PRINT AUTHENTICATION WAS SETUP/ACTIVATED ON THE USER's DEVICE
   const [isFingerPrintActive, setIsFingerPrintActive] = useState(false);

   //CHECKING IF USER'S FINGER PRINT AUTHENTICATION WAS SUCCESSFULL
   const [isFingerPrintCaptured, setIsFingerPrintCaptured] = useState(false);

   //PIN CODE INPUT LISTENER
   let pinInputChangeHandler = useCallback((value) => {
      setPinValue(value);
   }, []);
   //PIN CODE CONFIRM INPUT LISTENER
   let pinConfirmInputChangeHandler = useCallback((value) => {
      setPinValueConfirm(value);
   }, []);
   //finger print check
   useEffect(() => {
      UTILITIES.checkDeviceForHardware().then((hardwareResponse) => {
         if (hardwareResponse === true) {
            UTILITIES.checkForFingerprints().then((isFingerPrintSetup) => {
               if (isFingerPrintSetup !== false) setIsFingerPrintActive(true);
            });
         }
      });
      return () => {};
   }, []);

   //pin code setup check
   useEffect(() => {
      if (
         pinValue.length == CELL_COUNT &&
         pinValueConfirm.length == CELL_COUNT
      ) {
         if (pinValue === pinValueConfirm) {
            setBtnBgColor(COLORS.light.primary);
         } else {
            setErrorText("Pin mismatch");
            setBtnBgColor(COLORS.light.disabled);
         }
      } else {
         setErrorText("");
         setBtnBgColor(COLORS.light.disabled);
      }
   }, [pinValue, pinValueConfirm]);

   const scanFingerprint = async () => {
      await LocalAuthentication.authenticateAsync().then((res) => {
         if (res.success === true) {
            setIsFingerPrintCaptured(true);
         }
      });
   };

   const onSwitchChange = () => {
      if (isFingerPrintCaptured == false) {
         scanFingerprint();
      } else {
         setIsFingerPrintCaptured(false);
      }
   };
   //submit/registring the user via redux store
   const onSubmit = () => {
      setErrorText("");
      if (pinValue == "" || pinValueConfirm == "") {
         setErrorText("Enter your pin");
      } else if (pinValueConfirm == "") {
         setErrorText("Enter your pin");
      } else if (pinValueConfirm != pinValueConfirm) {
         setErrorText("Pin mismatch");
      } else if (pinValue === pinValueConfirm && pinValue != "") {
         authDetail.userPin = pinValue;
         navigation.navigate(ROUTES.AUTH_SELECT_BANK, {
            authDetail: authDetail
         });
      } else {
         setErrorText("Enter your pin");
      }
   };

   return (
      <KeyboardAvoidingView
         behavior={"padding"}
         style={{ flex: 1 }}
         keyboardVerticalOffset={Platform.OS == "android" ? -300 : -50}
      >
         <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
         >
            <View style={styles.wrapper}>
               {/* redirect user  */}

               {/* <StatusBar backgroundColor={COLORS.light.white} /> */}
               {/* top menu  */}
               <View style={styles.container}>
                  <View style={styles.progressWrapper}>
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons
                           name={"arrow-back-ios"}
                           size={24}
                           color={COLORS.light.textBlack}
                        />
                     </TouchableOpacity>
                     <CircularProgress
                        iconPath={IMAGES["icon-auth-pin"]}
                        progress={64}
                     />
                  </View>
                  <Text style={styles.formTitle}>{"Create Pin"}</Text>

                  <Text
                     style={styles.formSubtitle}
                  >{`Finally, Enter a 4-digit pin that you would use to login to your account`}</Text>

                  <Text style={[styles.inputLabelTop, { textAlign: "left" }]}>
                     Enter Pin
                  </Text>
                  <PinInput
                     cellCount={CELL_COUNT}
                     onTextInputChange={pinInputChangeHandler}
                     errorText={errorText}
                  />

                  <Text style={[styles.inputLabelTop, { textAlign: "left" }]}>
                     Confirm Pin
                  </Text>
                  <PinInput
                     cellCount={CELL_COUNT}
                     onTextInputChange={pinConfirmInputChangeHandler}
                     errorText={errorText}
                  />

                  <CheckBox
                     checked={isFingerPrintCaptured}
                     checkedColor={COLORS.light.secondary}
                     size={24}
                     containerStyle={{
                        marginHorizontal: 0,
                        padding: 0,
                        backgroundColor: "transparent",
                        borderWidth: 0,
                        display: isFingerPrintActive ? "flex" : "none"
                     }}
                     checkedTitle="Biometric enabled"
                     title="Enable Biometric authentication"
                     titleProps={{
                        style: {
                           fontFamily: "Inter-Regular",
                           color: isFingerPrintCaptured
                              ? COLORS.light.secondary
                              : COLORS.light.textBlackLight
                        }
                     }}
                     onPress={() => onSwitchChange()}
                  />
                  <View style={{ flex: 1 }} />

                  <CustomButton
                     bgColor={btnBgColor}
                     textColor={COLORS.light.white}
                     btnText={"Continue"}
                     onClick={onSubmit}
                  />
               </View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default AuthCreatePin;
