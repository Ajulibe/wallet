import React, { useState, useRef, useEffect } from "react";
import {
   View,
   StyleSheet,
   Text,
   ScrollView,
   SafeAreaView,
   StatusBar,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import COLORS from "../../utils/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { HomeStackParamList } from "../../navigation/HomeStack";
import { ROUTES } from "../../navigation/Routes";
import CustomAppbar from "../../components/CustomAppbar";
import globalStyles from "../../components/css/GlobalCss";
import CustomButton from "../../components/Button";
import { CountryData } from "../../extra/CountryData";
import libphonenumber from "google-libphonenumber";
import InputPhoneNumber from "../../components/InputPhoneNumber";
import TabBar from "./Components/TabBar";

type Props = StackScreenProps<HomeStackParamList, ROUTES.SEND_MONEY_SCREEN>;

const SendMoneyScreen = ({ navigation }: Props) => {
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
         <SafeAreaView style={{ flex: 1 }}>
            <StatusBar barStyle="light-content" />
            <CustomAppbar navigation={navigation} title="" />
            <KeyboardAvoidingView
               behavior={"padding"}
               style={{ flex: 1 }}
               keyboardVerticalOffset={Platform.OS == "android" ? 0 : -50}
            >
               <ScrollView
                  contentContainerStyle={{
                     flexGrow: 1
                  }}
                  keyboardShouldPersistTaps="handled"
                  bounces={false}
                  showsVerticalScrollIndicator={false}
               >
                  <View style={globalStyles.container}>
                     <TabBar activeIndex={0} />
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
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({});

export default SendMoneyScreen;
