import React, { useState, useRef, useEffect } from "react";
import {
   View,
   StyleSheet,
   Text,
   ScrollView,
   SafeAreaView,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import COLORS from "../../utils/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { SendMoneyStackParamList } from "../../navigation/SendMoneyStack";
import { ROUTES } from "../../navigation/Routes";
import CustomAppbar from "../../components/CustomAppbar";
import globalStyles from "../../components/css/GlobalCss";
import { CountryData } from "../../extra/CountryData";
import libphonenumber from "google-libphonenumber";
import TabBar from "./Components/TabBar";
import SendToWallet from "./Components/SendToWallet";
import SendToBankAccount from "./Components/SendToBankAccount";
import authStyles from "../../components/css/AuthFormCss";
import { hp, wp } from "../../utils/Dimensions";

type Props = StackScreenProps<
   SendMoneyStackParamList,
   ROUTES.SEND_MONEY_SCREEN
>;

const SendMoneyScreen = ({ navigation }: Props) => {
   const [activeIndex, setActiveIndex] = useState(0);
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
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            {/* <StatusBar barStyle="light-content" /> */}
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
                  <View
                     style={[globalStyles.container, { paddingHorizontal: 0 }]}
                  >
                     <View style={styles.header}>
                        <Text style={styles.headerTitile}>Send Money</Text>
                        <Text style={[authStyles.formSubtitle]}>
                           Send money to another SurePay user's wallet or to a
                           bank account.
                        </Text>
                     </View>
                     <TabBar
                        activeIndex={activeIndex}
                        onSendToWalletClick={() => setActiveIndex(0)}
                        onSendToBankClick={() => setActiveIndex(1)}
                     />
                     {activeIndex == 0 ? (
                        <SendToWallet navigation={navigation} />
                     ) : (
                        <SendToBankAccount navigation={navigation} />
                     )}
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   header: {
      paddingHorizontal: wp(30)
   },
   headerTitile: {
      fontSize: wp(24),
      lineHeight: hp(36),
      fontFamily: "Inter-Bold",
      color: COLORS.light.textBlack
   }
});

export default SendMoneyScreen;
