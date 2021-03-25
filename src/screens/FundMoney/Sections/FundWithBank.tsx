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
import COLORS from "../../../utils/Colors";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../navigation/Routes";
import CustomAppbar from "../../../components/CustomAppbar";
import globalStyles from "../../../components/css/GlobalCss";
import * as Animatable from "react-native-animatable";
import authStyles from "../../../components/css/AuthFormCss";
import { hp, wp } from "../../../utils/Dimensions";
import { FundMoneyStackParamList } from "../../../navigation/FundMoneyStack";
import BankPickerModal from "../../../components/BankPickerModal";
import { BankInterface } from "../../../extra/BankData";
import Input from "../../../components/Input";
import CustomButton from "../../../components/Button";
import InputSelectOption from "../../../components/InputSelectOption";
import ListTileFundMediumList from "../Components/ListTileFundMediumList";
import IMAGES from "../../../utils/Images";
import CustomCheckBox from "../../../components/CustomCheckBox";

type Props = StackScreenProps<
   FundMoneyStackParamList,
   ROUTES.FUND_WITH_BANK_SCREEN
>;

const FundWithBank = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [accountNumber, setAccountNumber] = useState("");
   const [saveCard, setSaveCard] = useState(true);

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
      // navigation.navigate(ROUTES.AMOUNT_TO_SEND_SCREEN);
   };
   return (
      <>
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            {/* <StatusBar barStyle="light-content" /> */}
            <CustomAppbar navigation={navigation} title="Fund N12,000" />
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
                     style={[globalStyles.container, { paddingVertical: 0 }]}
                  >
                     <BankPickerModal
                        isVisible={openBankModal ? true : false}
                        onClose={() => setOpenBankModal(false)}
                        current={bank}
                        onBankChange={(newBank) => setBank(newBank)}
                     />
                     <Animatable.View
                        style={{ flex: 1 }}
                        key={0}
                        animation={"pulse"} //pulse
                        easing={"linear"}
                        duration={1000}
                     >
                        <ListTileFundMediumList
                           leading={IMAGES["icon-bank-white"]}
                           title="Bank Account"
                           subtitle={
                              "Transfer directly from your bank account."
                           }
                           bgColor={COLORS.light.bankAccBgColor}
                           onClick={() => null}
                        />
                        <Text style={styles.pageDesc}>
                           Please Enter your bank Account details in the form
                           provided below.
                        </Text>
                        <Text style={authStyles.inputLabel}>Select Bank</Text>
                        <InputSelectOption
                           placeHolder={"eg Guaranty Trust Bank"}
                           value={bank.bankName}
                           errorText={bankNameErrorText}
                           onClick={() => setOpenBankModal(true)}
                        />
                        <Text style={authStyles.inputLabel}>
                           Bank Account Number
                        </Text>
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
                        <CustomCheckBox
                           check={saveCard}
                           onClick={() => setSaveCard(!saveCard)}
                           title={
                              "Save this bank account details for future payments"
                           }
                        />
                        <View style={{ flex: 1 }} />

                        <CustomButton
                           bgColor={btnBgColor}
                           textColor={COLORS.light.white}
                           btnText={"Continue"}
                           onClick={onSubmit}
                        />
                     </Animatable.View>
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   pageDesc: {
      fontSize: wp(12),
      lineHeight: hp(16),
      color: COLORS.light.textBlack50,
      fontFamily: "Inter-Regular",
      marginTop: hp(24),
      marginBottom: hp(16)
   }
});

export default FundWithBank;
