import React, { useCallback, useState, useEffect } from "react";
import {
   View,
   Text,
   ScrollView,
   Image,
   TextInput,
   StyleSheet,
   TouchableOpacity
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import styles from "../../components/css/AuthFormCss";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
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

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_PHONE_NO_SCREEN>;

const AuthPhoneNo = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
   const [phoneNumber, setPhoneNumber] = useState("");
   const [errorText, setErrorText] = useState("");
   const [isLoading, setIsLoading] = useState(false);
   const [openCountry, setOpenCountry] = useState(false);
   const [country, setCountry] = useState(CountryData.africaCountries[0]);

   //on input text change handler
   let inputChangeHandler = (value: string) => {
      setPhoneNumber(value.toString());

      if (value.toString().length < 10) {
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setBtnBgColor(COLORS.light.primary);
         setErrorText("");
      }
   };

   //submit handler
   const onSubmit = () => {
      let phone = country.dial_code + parseInt(phoneNumber);
      // google libphonenumber init
      const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
      const number = phoneNumberUtil.parseAndKeepRawInput(phone, country.code);
      if (!phoneNumberUtil.isValidNumber(number)) {
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
      // <ScrollView
      //   contentContainerStyle={{ flexGrow: 1 }}
      //   keyboardShouldPersistTaps="handled"
      // >
      <View style={styles.wrapper}>
         {/* country picker bottom sheet  */}
         <CountryPicker
            initialSnap={openCountry ? 0 : 1}
            onClose={() => setOpenCountry(false)}
            current={country}
            onCountryChange={(newCountry) => setCountry(newCountry)}
         />

         <StatusBar backgroundColor={COLORS.light.white} />
         {/* bg image  */}
         <View style={styles.overlayWrapper}>
            <Image
               source={IMAGES["top-overlay-dark2"]}
               style={styles.overlayImage}
            />
         </View>

         {/* container view  */}
         <Animated.View
            style={[
               styles.container,
               {
                  opacity: Animated.add(
                     0.5,
                     Animated.multiply(!openCountry ? 1 : 0, 1.0)
                  )
               }
            ]}
         >
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
               <Text style={styles.formTitle}>{"Get \nStarted"}</Text>
               <CircularProgress icon={"phone-iphone"} progress={12} size={60} iconType="MaterialIcons" />
            </View>
            <Text style={styles.formSubtitle}>
               {`Enter your phone number to get started`}
            </Text>

            <InputPhoneNumber
               country={country}
               onTextInputChange={inputChangeHandler}
               openCountryModal={(isS) => setOpenCountry(isS)}
               errorText={errorText}
               initialValue={phoneNumber}
               onSubmit={onSubmit}
            />

            <Text style={styles.inputLabel}>
               This number will be used as your account number
            </Text>

            <CustomButton
               bgColor={isLoading ? COLORS.light.disabled : btnBgColor}
               textColor={COLORS.light.white}
               btnText={"Continue"}
               onClick={() => onSubmit()}
               isLoading={isLoading}
            />
         </Animated.View>
      </View>
      // </ScrollView>
   );
};

export default AuthPhoneNo;