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
import { BankPickerUssd } from "../Components/BankPickerUssd";

type Props = StackScreenProps<
   FundMoneyStackParamList,
   ROUTES.FUND_WITH_USSD_SCREEN
>;

const FundWithUssd = ({ navigation }: Props) => {
   const [bank, setBank] = useState({} as BankInterface); //USER'S BANK

   // on bank select callback
   const onBankSelect = (newBank?: BankInterface) => {
      setBank(newBank!);
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
                     <Animatable.View
                        style={{ flex: 1 }}
                        key={0}
                        animation={"pulse"} //pulse
                        easing={"linear"}
                        duration={1000}
                     >
                        <ListTileFundMediumList
                           leading={IMAGES["icon-ussd-white"]}
                           title="USSD"
                           subtitle={
                              "Fund your wallet using Guaranty Trust Bank 737."
                           }
                           bgColor={COLORS.light.ussdBgColor}
                           onClick={() => null}
                        />
                        <Text style={styles.pageDesc}>
                           Choose your bank to start the payment
                        </Text>

                        <BankPickerUssd
                           onBankChange={onBankSelect}
                           current={bank}
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

export default FundWithUssd;
