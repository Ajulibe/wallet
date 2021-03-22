import React, { useEffect, useState } from "react";
import {
   View,
   ScrollView,
   SafeAreaView,
   Text,
   KeyboardAvoidingView,
   Platform,
   StyleSheet
} from "react-native";
import CustomButton from "../../../../../components/Button";
import COLORS from "../../../../../utils/Colors";
import globalStyles from "../../../../../components/css/GlobalCss";
import CustomAppbar from "../../../../../components/CustomAppbar";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../../../navigation/Routes";
import { ProfileStackParamList } from "../../../../../navigation/ProfileStack";
import Input from "../../../../../components/Input";
import InputValidation from "../../../../../utils/InputValidation";
import authStyles from "../../../../../components/css/AuthFormCss";
import AsyncStorageUtil from "../../../../../utils/AsyncStorageUtil";
import { CardPaymentInterface } from "../../../../../models/CardPaymentInterface";
import AlertUtil from "../../../../../utils/AlertUtil";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const AddPaymentCardScreen = ({ navigation }: Props) => {
   const [btnBgColor, setBtnBgColor] = useState<string>(COLORS.light.disabled);
   const [cardHolderName, setCardHolderName] = useState("");
   const [cardNumber, setCardNumber] = useState("");
   const [cardExpiryDate, setCardExpiryDate] = useState("");
   const [cardCVV, setCardCVV] = useState("");

   const [cardHolderNameError, setCardHolderNameError] = useState("");
   const [cardNumberError, setCardNumberError] = useState("");
   const [cardExpiryDateError, setCardExpiryDateError] = useState("");
   const [cardCVVError, setCardCVVError] = useState("");

   // checking the inputs on text change
   useEffect(() => {
      setBtnBgColor(COLORS.light.disabled);
      if (InputValidation.isFullName(cardHolderName)) {
         setCardHolderNameError("");
      }
      if (cardNumber.length >= 16) {
         setCardNumberError("");
      }
      if (cardExpiryDate.length >= 5) {
         setCardExpiryDateError("");
      }
      if (cardCVV.length >= 3) {
         setCardCVVError("");
      }
      let isValid =
         InputValidation.isFullName(cardHolderName) &&
         cardNumber.length >= 16 &&
         cardExpiryDate.length >= 5 &&
         cardCVV.length >= 3;

      if (isValid) {
         setBtnBgColor(COLORS.light.primary);
      }
   }, [cardHolderName, cardNumber, cardExpiryDate, cardCVV]);

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
   // on back press/delete press of card delete input field
   const onExpDateDelPress = () => {
      // console.log("cxcxc");
   };

   const onSubmit = () => {
      if (!InputValidation.isFullName(cardHolderName)) {
         setCardHolderNameError("Enter first & last name");
      } else if (cardNumber.length < 16) {
         setCardNumberError("Enter valid card number");
      } else if (cardExpiryDate.length < 5) {
         setCardExpiryDateError("Enter valid date(eg 09/21)");
      } else if (cardCVV.length < 3) {
         setCardCVVError("Enter your card CVV");
      } else {
         let expiryDate = cardExpiryDate.split("/");
         let newCard: CardPaymentInterface = {
            cardHolderName: cardHolderName,
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
            <CustomAppbar navigation={navigation} title="Add New Card" />
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
                     <Text style={authStyles.formSubtitle}>
                        Save your card to make for faster checkout on your next
                        transaction
                     </Text>
                     <Text style={globalStyles.inputLabel}>
                        Cardholder name
                     </Text>
                     <Input
                        placeholder="John Doe"
                        errorText={cardHolderNameError}
                        keyboardType="default"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        onInputChange={(value) => setCardHolderName(value)}
                        initialValue=""
                        required
                        secureTextEntry={false}
                        minLength={2}
                        textContentType="none"
                     />
                     <View style={globalStyles.inputGap} />

                     <Text style={globalStyles.inputLabel}>Card number</Text>
                     <Input
                        placeholder="0000 0000 0000 0000"
                        errorText={cardNumberError}
                        keyboardType="number-pad"
                        autoCapitalize="sentences"
                        returnKeyType="next"
                        onInputChange={(value) => setCardNumber(value)}
                        initialValue=""
                        initiallyValid={false}
                        required
                        secureTextEntry={false}
                        minLength={2}
                        maxLength={19}
                        textContentType="none"
                     />
                     <View style={globalStyles.inputGap} />

                     <View style={styles.cardExpiryRow}>
                        <View style={styles.expiryCol}>
                           <Text style={globalStyles.inputLabel}>
                              Expiry date
                           </Text>
                           <Input
                              placeholder="MM/YY"
                              errorText={cardExpiryDateError}
                              keyboardType="number-pad"
                              autoCapitalize="sentences"
                              returnKeyType="next"
                              onInputChange={(v) => onSetCardExpiryDate(v)}
                              onDeletePress={() => onExpDateDelPress()}
                              value={cardExpiryDate}
                              maxLength={5}
                              initialValue=""
                              initiallyValid={false}
                              required
                              secureTextEntry={false}
                              minLength={2}
                              textContentType="none"
                           />
                        </View>
                        <View style={{ width: 16 }}></View>
                        <View style={styles.expiryCol}>
                           <Text style={globalStyles.inputLabel}>CVV</Text>
                           <Input
                              placeholder="123"
                              errorText={cardCVVError}
                              keyboardType="number-pad"
                              autoCapitalize="sentences"
                              returnKeyType="done"
                              onInputChange={(v) => setCardCVV(v)}
                              onSubmit={onSubmit}
                              initialValue=""
                              initiallyValid={false}
                              required
                              secureTextEntry={false}
                              minLength={2}
                              maxLength={4}
                              textContentType="none"
                           />
                        </View>
                     </View>

                     <View style={{ flex: 1 }} />
                     <CustomButton
                        bgColor={btnBgColor}
                        textColor={COLORS.light.white}
                        btnText={"Add Card"}
                        onClick={onSubmit}
                     />
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};
const styles = StyleSheet.create({
   cardExpiryRow: {
      flexDirection: "row"
   },
   expiryCol: {
      flex: 1
   }
});
export default AddPaymentCardScreen;
