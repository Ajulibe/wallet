import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import COLORS from "../../../utils/Colors";
import globalStyles from "../../../components/css/GlobalCss";
import CustomButton from "../../../components/Button";
import { CountryData } from "../../../extra/CountryData";
import libphonenumber from "google-libphonenumber";
import InputPhoneNumber from "../../../components/InputPhoneNumber";
import * as Animatable from "react-native-animatable";
import { hp } from "../../../utils/Dimensions";

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
            <Text style={globalStyles.inputLabel}>First name</Text>
            <InputPhoneNumber
               country={country}
               onTextInputChange={(num) => setPhoneNumber(num)}
               openCountryModal={(isS) => setOpenCountry(isS)}
               errorText={errorText}
               onSubmit={onSubmit}
            />
            <View style={globalStyles.inputGap} />
            <View style={{ flex: 1 }} />

            <CustomButton
               bgColor={btnBgColor}
               textColor={COLORS.light.white}
               btnText={"Continue"}
               onClick={onSubmit}
            />
         </Animatable.View>
      </>
   );
};

const styles = StyleSheet.create({
   container: {
      flex: 1,
      paddingVertical: hp(16)
   }
});

export default SendToWallet;
