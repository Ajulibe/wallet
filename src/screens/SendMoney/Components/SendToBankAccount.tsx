import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import COLORS from "../../../utils/Colors";
import CustomButton from "../../../components/Button";
import { CountryData } from "../../../extra/CountryData";
import * as Animatable from "react-native-animatable";
import { hp, wp } from "../../../utils/Dimensions";
import authStyles from "../../../components/css/AuthFormCss";
import Input from "../../../components/Input";
import BankPickerModal from "../../../components/BankPickerModal";
import InputSelectOption from "../../../components/InputSelectOption";
import { BankInterface } from "../../../extra/BankData";
import { ROUTES } from "../../../navigation/Routes";

interface Props {
   navigation: any;
}

const SendToBankAccount = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [accountNumber, setAccountNumber] = useState("");

   const [bankNameErrorText, setBankNameErrorText] = useState("");
   const [accNoErrorText, setAccNoErrorText] = useState("");
   // Bank Modal data
   const [openBankModal, setOpenBankModal] = useState(false); // show/hide listener
   const [bank, setBank] = useState({} as BankInterface); //USER'S BANK

   // checking the inputs on text change
   useEffect(() => {
      if (bank.bankName != "" && accountNumber != "") {
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setAccNoErrorText("");
         setBankNameErrorText("");
         setBtnBgColor(COLORS.light.primary);
      }
   }, [bank, accountNumber]);

   const onSubmit = () => {
      navigation.navigate(ROUTES.AMOUNT_TO_SEND_SCREEN);
   };
   return (
      <>
         <BankPickerModal
            isVisible={openBankModal ? true : false}
            onClose={() => setOpenBankModal(false)}
            current={bank}
            onBankChange={(newBank) => setBank(newBank)}
         />
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
                     { color: COLORS.light.textBlack }
                  ]}
               >
                  Enter the bank account details of the person you are sending
                  money to
               </Text>
               <Text style={authStyles.inputLabel}>Select Bank</Text>
               <InputSelectOption
                  placeHolder={"eg Guaranty Trust Bank"}
                  value={bank.bankName}
                  errorText={bankNameErrorText}
                  onClick={() => setOpenBankModal(true)}
               />
               <Text style={authStyles.inputLabel}>Bank Account Number</Text>
               <Input
                  placeholder="eg 0483659072"
                  placeholderTextColor=""
                  errorText={accNoErrorText}
                  keyboardType="number-pad"
                  autoCapitalize="sentences"
                  returnKeyType="done"
                  onInputChange={(value) => setAccountNumber(value)}
                  onSubmit={onSubmit}
                  initialValue=""
                  initiallyValid={false}
                  required
                  secureTextEntry={false}
                  minLength={2}
                  maxLength={10}
                  textContentType="none"
               />
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
      paddingTop: hp(16),
      backgroundColor: "#F9FAFB"
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

export default SendToBankAccount;
