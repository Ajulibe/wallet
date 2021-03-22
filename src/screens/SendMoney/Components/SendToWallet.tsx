import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../../utils/Colors";
import globalStyles from "../../../components/css/GlobalCss";
import CustomButton from "../../../components/Button";
import { CountryData } from "../../../extra/CountryData";
import libphonenumber from "google-libphonenumber";
import InputPhoneNumber from "../../../components/InputPhoneNumber";
import * as Animatable from "react-native-animatable";
import { hp, wp } from "../../../utils/Dimensions";
import authStyles from "../../../components/css/AuthFormCss";

interface Props {
   navigation: any;
}

const SendToWallet = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [phoneNumber, setPhoneNumber] = useState("");

   const [errorText, setErrorText] = useState("");

   // country data
   const [openCountry, setOpenCountry] = useState(false); //couhntry show/hide listener
   const [country, setCountry] = useState(CountryData.africaCountries[0]);
   // google libphonenumber init
   const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
   const completePhone = (phone: string) =>
      phoneNumberUtil.parseAndKeepRawInput(phone, country.code);
   // checking the inputs on text change
   useEffect(() => {
      if (phoneNumber == null) return;
      if (phoneNumber.length < 6) {
         setBtnBgColor(COLORS.light.disabled);
      } else if (!phoneNumberUtil.isValidNumber(completePhone(phoneNumber))) {
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setBtnBgColor(COLORS.light.primary);
         setErrorText("");
      }
   }, [phoneNumber]);

   const onSubmit = () => {};
   return (
      <>
         <Animatable.View
            style={styles.container}
            key={0}
            animation={"fadeIn"} //pulse
            easing={"linear"}
            duration={500}
         >
            <View style={styles.body}>
               <Text
                  style={[
                     authStyles.formSubtitle,
                     { color: COLORS.light.textBlack, display: "none" }
                  ]}
               >
                  Enter the phone number of the person you are sending money to
                  or select from your contacts.
               </Text>
               <Text style={authStyles.inputLabel}>Phone Number</Text>
               <InputPhoneNumber
                  country={country}
                  onTextInputChange={(num) => setPhoneNumber(num)}
                  openCountryModal={(isS) => setOpenCountry(isS)}
                  errorText={errorText}
                  onSubmit={onSubmit}
               />
               <Text
                  style={[
                     authStyles.formSubtitle,
                     { color: COLORS.light.textBlack }
                  ]}
               >
                  The money will be sent to this phone number instantly even if
                  they don’t have a SurePay account
               </Text>
               <View style={{ flex: 1 }} />
            </View>

            <View style={styles.footer}>
               <CustomButton
                  bgColor={btnBgColor}
                  textColor={COLORS.light.white}
                  btnText={"Continue"}
                  onClick={onSubmit}
               />
            </View>
         </Animatable.View>
      </>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: hp(16)
   },
   body: {
      flex: 1,
      // backgroundColor: "#F9FAFB",
      paddingVertical: hp(16),
      paddingHorizontal: wp(30)
   },
   footer: {
      backgroundColor: COLORS.light.white,
      paddingVertical: hp(8),
      paddingHorizontal: wp(30),
      borderTopColor: COLORS.light.tabBarInactive,
      borderTopWidth: 1
   }
});

export default SendToWallet;
