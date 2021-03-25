import React, { useEffect, useState } from "react";
import {
   View,
   ScrollView,
   SafeAreaView,
   Text,
   KeyboardAvoidingView,
   Platform,
   StyleSheet,
   Image
} from "react-native";
import CustomButton from "../../../components/Button";
import COLORS from "../../../utils/Colors";
import globalStyles from "../../../components/css/GlobalCss";
import CustomAppbar from "../../../components/CustomAppbar";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../navigation/Routes";
import Input from "../../../components/Input";
import authStyles from "../../../components/css/AuthFormCss";
import AsyncStorageUtil from "../../../utils/AsyncStorageUtil";
import { CardPaymentInterface } from "../../../models/CardPaymentInterface";
import AlertUtil from "../../../utils/AlertUtil";
import { FundMoneyStackParamList } from "../../../navigation/FundMoneyStack";
import * as Animatable from "react-native-animatable";
import CustomCheckBox from "../../../components/CustomCheckBox";
import AppBarPayCo from "../Components/AppBarPayCo";
import IMAGES from "../../../utils/Images";
import { hp, wp } from "../../../utils/Dimensions";
import { TextInput } from "react-native-gesture-handler";
import ButtonSecondary from "../Components/ButtonSecondary";

type Props = StackScreenProps<
   FundMoneyStackParamList,
   ROUTES.FUND_WITH_CARD_SCREEN
>;

const FundWithCard = ({ navigation }: Props) => {
   const [saveCard, setSaveCard] = useState(true);
   const [cardNumber, setCardNumber] = useState("");
   const [cardExpiryDate, setCardExpiryDate] = useState("");
   const [cardCVV, setCardCVV] = useState("");

   const [cardNumberError, setCardNumberError] = useState("");
   const [cardExpiryDateError, setCardExpiryDateError] = useState("");
   const [cardCVVError, setCardCVVError] = useState("");

   //Set Card expiry date
   const onSetCardExpiryDate = (expDate: string) => {
      if (expDate.length == 2 && cardExpiryDate.length != 3) {
         setCardExpiryDate(`${expDate}/`);
      } else if (expDate.length == 2 && cardExpiryDate.length == 3) {
         setCardExpiryDate(`${expDate[0]}`);
      } else {
         setCardExpiryDate(expDate);
      }
   };

   const onSubmit = () => {
      if (cardNumber.length < 16) {
         setCardNumberError("Enter valid card number");
      } else if (cardExpiryDate.length < 5) {
         setCardExpiryDateError("Enter valid date(eg 09/21)");
      } else if (cardCVV.length < 3) {
         setCardCVVError("Enter your card CVV");
      } else {
         let expiryDate = cardExpiryDate.split("/");
         let newCard: CardPaymentInterface = {
            cardHolderName: "Name of User",
            cardNumber: cardNumber,
            cardExpiryMonth: expiryDate[0].trim(),
            cardExpiryYear: expiryDate[1].trim(),
            cardCvv: cardCVV,
            cardType: "Mastercard"
         };

         let cards = AsyncStorageUtil.getCards().then((cards) => {
            if (cards == null || cards == "") {
               AsyncStorageUtil.setCard(JSON.stringify([newCard]));
            } else {
               let cardsObject: CardPaymentInterface[] = JSON.parse(cards);
               let check = cardsObject.find(
                  (item) => item.cardNumber === cardNumber
               );
               if (check != null) {
                  AlertUtil.alert("Card Already Added");
               } else {
                  cardsObject.push(newCard);
                  AsyncStorageUtil.setCard(JSON.stringify(cardsObject));
                  AlertUtil.alert("Card Added Successfully", "", () => {
                     navigation.goBack();
                  });
               }
            }
         });
      }
   };
   return (
      <>
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            <AppBarPayCo onBackPress={() => navigation.goBack()} />
            <KeyboardAvoidingView
               behavior={"padding"}
               style={{ flex: 1 }}
               keyboardVerticalOffset={Platform.OS == "android" ? -300 : -50}
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
                     <View style={styles.logoWrapper}>
                        <Image
                           source={IMAGES["icon-payco"]}
                           style={styles.paycoLogo}
                        />
                        <Text style={styles.payByCard}>Pay by card</Text>
                     </View>
                     <Text style={styles.cardDesc}>
                        Enter your debit card or credit card details below to
                        make payent
                     </Text>

                     <View style={styles.cardWrapper}>
                        <View style={styles.expiryCol}>
                           <Text style={styles.inputLabel}>Card number</Text>
                           <TextInput
                              placeholder="0000 0000 0000 0000"
                              placeholderTextColor={"#ACC1D1"}
                              keyboardType="number-pad"
                              autoCapitalize="sentences"
                              style={styles.input}
                              onChangeText={(value) => setCardNumber(value)}
                              maxLength={19}
                              textContentType="none"
                           />
                        </View>
                        <View style={styles.line} />

                        <View style={styles.cardExpiryRow}>
                           <View style={styles.expiryCol}>
                              <Text style={styles.inputLabel}>Expiry date</Text>
                              <TextInput
                                 placeholder="MM/YY"
                                 placeholderTextColor={"#ACC1D1"}
                                 keyboardType="number-pad"
                                 autoCapitalize="sentences"
                                 style={styles.input}
                                 onChangeText={(v) => onSetCardExpiryDate(v)}
                                 value={cardExpiryDate}
                                 maxLength={5}
                              />
                           </View>
                           <View style={styles.lineVertical}></View>
                           <View style={styles.expiryCol}>
                              <Text style={styles.inputLabel}>CVV</Text>
                              <TextInput
                                 placeholder="123"
                                 placeholderTextColor={"#ACC1D1"}
                                 keyboardType="number-pad"
                                 autoCapitalize="sentences"
                                 style={styles.input}
                                 onChangeText={(v) => setCardCVV(v)}
                                 maxLength={4}
                                 textContentType="none"
                              />
                           </View>
                        </View>
                     </View>
                     <CustomCheckBox
                        check={saveCard}
                        onClick={() => setSaveCard(!saveCard)}
                        title={"Save this card for later"}
                     />

                     <CustomButton
                        bgColor={COLORS.light.secondary}
                        textColor={COLORS.light.white}
                        btnText={"Pay NGN 13,500"}
                        onClick={onSubmit}
                     />

                     <ButtonSecondary onClick={() => navigation.goBack()} />
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};
const styles = StyleSheet.create({
   logoWrapper: {
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "center",
      marginTop: hp(54),
      marginBottom: hp(16)
   },
   paycoLogo: {
      width: wp(24),
      height: wp(24)
   },
   payByCard: {
      marginLeft: wp(8),
      fontSize: wp(18),
      lineHeight: hp(24),
      fontFamily: "Inter-Medium",
      color: COLORS.light.textBlack
   },
   cardDesc: {
      fontSize: wp(14),
      lineHeight: hp(24),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack,
      textAlign: "center",
      marginBottom: hp(40)
   },
   cardWrapper: {
      borderColor: "#ACC1D1",
      borderWidth: 1,
      borderRadius: 4
   },
   line: {
      width: "100%",
      height: 1,
      backgroundColor: "#ACC1D1"
   },
   lineVertical: {
      width: 1,
      height: "100%",
      backgroundColor: "#ACC1D1"
   },
   inputLabel: {
      fontSize: wp(10),
      lineHeight: hp(12),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack,
      textTransform: "uppercase"
   },
   input: {
      fontSize: wp(14),
      lineHeight: hp(24),
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack
   },
   cardExpiryRow: {
      flexDirection: "row"
   },
   expiryCol: {
      flex: 1,
      paddingTop: hp(9),
      marginBottom: hp(5),
      paddingHorizontal: wp(18)
   }
});
export default FundWithCard;
