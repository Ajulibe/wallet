import React, { useState, useRef, useEffect } from "react";
import { View, StyleSheet, Text, Animated } from "react-native";
import COLORS from "../../../utils/Colors";
import globalStyles from "../../../components/css/GlobalCss";
import CustomButton from "../../../components/Button";
import { CountryData } from "../../../extra/CountryData";
import * as Animatable from "react-native-animatable";
import { hp, wp } from "../../../utils/Dimensions";
import authStyles from "../../../components/css/AuthFormCss";
import Input from "../../../components/Input";
import InputSelectOption from "../../../components/InputSelectOption";

interface Props {
   navigation: any;
}

const SendToBankAccount = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [bankName, setBankName] = useState("");
   const [accountNumber, setAccountNumber] = useState("");

   const [bankNameErrorText, setBankNameErrorText] = useState("");
   const [accNoErrorText, setAccNoErrorText] = useState("");

   // checking the inputs on text change
   useEffect(() => {
      if (bankName != "" && accountNumber != "") {
         setBtnBgColor(COLORS.light.disabled);
      } else {
         setAccNoErrorText("");
         setBankNameErrorText("");
         setBtnBgColor(COLORS.light.primary);
      }
   }, [bankName, accountNumber]);

   const onClick = () => {};
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
                     { color: COLORS.light.textBlack }
                  ]}
               >
                  Enter the bank account details of the person you are sending
                  money to
               </Text>
               <Text style={authStyles.inputLabel}>Select Bank</Text>
               <InputSelectOption
                  placeHolder={"eg Guaranty Trust Bank"}
                  value={bankName}
                  errorText={bankNameErrorText}
                  onClick={onClick}
               />
               <Text style={authStyles.inputLabel}>Bank Account Number</Text>
               <Input
                  placeholder="eg 0483659072"
                  placeholderTextColor=""
                  errorText={accNoErrorText}
                  keyboardType="default"
                  autoCapitalize="sentences"
                  returnKeyType="next"
                  onInputChange={(value) => setAccountNumber(value)}
                  onSubmit={onSubmit}
                  initialValue=""
                  initiallyValid={false}
                  required
                  secureTextEntry={false}
                  minLength={2}
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

export default SendToBankAccount;
