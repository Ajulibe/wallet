import React, { useEffect, useState } from "react";
import {
   View,
   ScrollView,
   SafeAreaView,
   StatusBar,
   Text,
   KeyboardAvoidingView,
   Platform
} from "react-native";
import CustomButton from "../../../../../components/Button";
import COLORS from "../../../../../utils/Colors";
import globalStyles from "../../../../../components/css/GlobalCss";
import CustomAppbar from "../../../../../components/CustomAppbar";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../../../navigation/Routes";
import { ProfileStackParamList } from "../../../../../navigation/ProfileStack";
import ListTile from "../../../../../components/ListTile";
import IMAGES from "../../../../../utils/Images";
import AsyncStorageUtil from "../../../../../utils/AsyncStorageUtil";
import { CardPaymentInterface } from "../../../../../models/CardPaymentInterface";
import ListTileCardPayment from "../../../../../components/ListTileCardPayment";
import AlertUtil from "../../../../../utils/AlertUtil";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const PaymentMethodScreen = ({ navigation }: Props) => {
   const [savedCards, setSavedCards] = useState<CardPaymentInterface[]>();

   //On screen Focus Listener
   React.useEffect(() => {
      const unsubscribe = navigation.addListener("focus", () => {
         loadPaymentCards();
      });
      return unsubscribe;
   }, [navigation]);

   const loadPaymentCards = () => {
      AsyncStorageUtil.getCards().then((cards) => {
         if (cards != null) {
            let cardsObject: CardPaymentInterface[] = JSON.parse(cards);
            setSavedCards(cardsObject);
         }
      });
   };
   //onDelete Card Click
   const deleteCard = (card: CardPaymentInterface) => {
      AlertUtil.confirm("Delete Card", "", () => {
         let check = savedCards?.find(
            (item) => item.cardNumber === card.cardNumber
         );
         if (check != null) {
            let newCards = savedCards?.filter(
               (c) => c.cardNumber != card.cardNumber
            );
            AsyncStorageUtil.setCard(JSON.stringify(newCards)).then(() => {
               loadPaymentCards();
            });
         } else {
            AlertUtil.alert("An error occured, try again later.");
         }
      });
      AsyncStorageUtil.getCards().then((cards) => {
         if (cards != null) {
            let cardsObject: CardPaymentInterface[] = JSON.parse(cards);
            setSavedCards(cardsObject);
         }
      });
   };

   return (
      <>
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            {/* <StatusBar barStyle="light-content" /> */}
            <CustomAppbar navigation={navigation} title="Saved Cards" />
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
                     <Text style={globalStyles.inputLabel}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Saepe velit perferendis cum provident nostrum.
                     </Text>
                     <ListTile
                        title="Add Account"
                        leading={IMAGES["icon-add"]}
                        onClick={() =>
                           navigation.navigate(ROUTES.ADD_PAYMENT_CARD_SCREEN)
                        }
                     />
                     {savedCards?.map((card) => (
                        <ListTileCardPayment
                           key={card.cardNumber}
                           title={card.cardHolderName}
                           subtitle={card.cardNumber}
                           leading={
                              "data:image/png;base64,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"
                           }
                           onDeleteClick={() => deleteCard(card)}
                        />
                     ))}
                  </View>
               </ScrollView>
            </KeyboardAvoidingView>
         </SafeAreaView>
      </>
   );
};

export default PaymentMethodScreen;
