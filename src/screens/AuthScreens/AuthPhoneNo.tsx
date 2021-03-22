import React, { useCallback, useState, useEffect } from "react";
import {
   View,
   Text,
   ScrollView,
   Image,
   TextInput,
   StyleSheet,
   TouchableOpacity,
   KeyboardAvoidingView,
   Platform,
   Button
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import styles from "../../components/css/AuthFormCss";
import libphonenumber from "google-libphonenumber";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IMAGES from "../../utils/Images";
import { CountryPicker } from "../../components/CountryPicker";
import Animated from "react-native-reanimated";
import { CountryData } from "../../extra/CountryData";
// api service
import { AuthService } from "../../services/AuthService";
import { AuthDetail } from "../../models/AuthDetail";
import AsyncStorage from "@react-native-async-storage/async-storage";
import STORAGE_KEYS from "../../utils/StorageKeys";
import CircularProgress from "../../components/CircularProgress";
import InputPhoneNumber from "../../components/InputPhoneNumber";
import { Header } from "react-navigation-stack";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_PHONE_NO_SCREEN>;

const AuthPhoneNo = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
   const [phoneNumber, setPhoneNumber] = useState("");
   const [errorText, setErrorText] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [openCountry, setOpenCountry] = useState(false);
   const [country, setCountry] = useState(CountryData.africaCountries[0]);

   // google libphonenumber init
   const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
   const completePhone = (phone: string) =>
      phoneNumberUtil.parseAndKeepRawInput(phone, country.code);

   //on input text change handler
   let inputChangeHandler = (value: string) => {
      setPhoneNumber(value.toString());

      if (value.toString().length < 6) {
         setBtnBgColor(COLORS.light.disabled);
      } else if (
         !phoneNumberUtil.isValidNumber(completePhone(value.toString()))
      ) {
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setBtnBgColor(COLORS.light.primary);
         setErrorText("");
      }
   };

   //submit handler
   const onSubmit = () => {
      let phone = country.dial_code + parseInt(phoneNumber);
      if (phoneNumber.length < 6) {
         setErrorText("Enter a valid phone number");
      } else if (!phoneNumberUtil.isValidNumber(completePhone(phone))) {
         setErrorText("Enter a valid phone number");
      } else {
         setErrorText("");

         submit(phone);
      }
   };
   //otp submit handler
   const submit = (phone: string) => {
      setIsLoading(true);

      let nigPhone = CountryData.nigPhoneFormat(phone!);
      AuthService.sendOtp({ phoneNo: nigPhone }).then((response) => {
         //'nigPhone' to be replaced with 'phone'
         setIsLoading(false);

         if (String(response.success) === "true") {
            let authDetail = new AuthDetail();
            authDetail.phoneNo = phone;
            authDetail.verifyId = response.additionalParam;
            navigation.navigate(ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN, {
               authDetail: authDetail
            });
         } else {
            setErrorText(response.message!);
         }
      });
   };

   return (
      <KeyboardAvoidingView
         behavior={"padding"}
         style={{ flex: 1 }}
         enabled
         keyboardVerticalOffset={Platform.OS == "android" ? -300 : -50}
      >
         {/* country picker bottom sheet  */}
         <CountryPicker
            isVisible={openCountry ? true : false}
            onClose={() => setOpenCountry(false)}
            current={country}
            onCountryChange={(newCountry) => setCountry(newCountry)}
         />
         <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
            bounces={false}
         >
            <View style={[styles.wrapper, {}]}>
               {/* <StatusBar backgroundColor={COLORS.light.white} /> */}

               {/* container view  */}
               <Animated.View style={styles.container}>
                  <View style={styles.progressWrapper}>
                     <TouchableOpacity onPress={() => navigation.goBack()}>
                        <MaterialIcons
                           name={"arrow-back-ios"}
                           size={24}
                           color={COLORS.light.textBlack}
                        />
                     </TouchableOpacity>
                     <CircularProgress
                        iconPath={IMAGES["icon-auth-phone"]}
                        progress={12}
                     />
                  </View>

                  <Text style={styles.formTitle}>{"Phone Number"}</Text>
                  <Text style={styles.formSubtitle}>
                     You can use this number to make transfers to other Surepay
                     accounts
                  </Text>
                  <Text style={styles.inputLabel}>Phone Number</Text>
                  <InputPhoneNumber
                     country={country}
                     onTextInputChange={inputChangeHandler}
                     openCountryModal={(isS) => setOpenCountry(isS)}
                     errorText={errorText}
                     initialValue={phoneNumber}
                     onSubmit={onSubmit}
                  />
                  <View style={{ flex: 1 }} />

                  <CustomButton
                     bgColor={isLoading ? COLORS.light.disabled : btnBgColor}
                     textColor={COLORS.light.white}
                     btnText={"Continue"}
                     onClick={() => onSubmit()}
                     isLoading={isLoading}
                  />
               </Animated.View>
            </View>
         </ScrollView>
      </KeyboardAvoidingView>
   );
};

export default AuthPhoneNo;
