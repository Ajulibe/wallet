import React, { useState } from "react";
import { View, Text, ScrollView, SafeAreaView } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { FundMoneyStackParamList } from "../../../navigation/FundMoneyStack";
import { ROUTES } from "../../../navigation/Routes";
import globalStyles from "../../../components/css/GlobalCss";
import CustomAppbar from "../../../components/CustomAppbar";
import ListTileFundMediumList from "../Components/ListTileFundMediumList";
import IMAGES from "../../../utils/Images";
import COLORS from "../../../utils/Colors";
import ModalPos from "../Components/ModalPos";
import ModalMobileBank from "../Components/ModalMobileBank";

type Props = StackScreenProps<
   FundMoneyStackParamList,
   ROUTES.FUND_MONEY_MEDIUM_LIST_SCREEN
>;

const FundMoneyMediumList = ({ navigation }: Props) => {
   const [posModalVisibility, setPosModalVisibility] = useState(false);
   const [bankModalVisibility, setBankModalVisibility] = useState(false);

   return (
      <SafeAreaView style={globalStyles.AndroidSafeArea}>
         <CustomAppbar navigation={navigation} title="Select a Medium" />
         <ModalPos
            closeModal={() => setPosModalVisibility(false)}
            modalVisible={posModalVisibility}
         />
         <ModalMobileBank
            closeModal={() => setBankModalVisibility(false)}
            modalVisible={bankModalVisibility}
         />

         <ScrollView
            contentContainerStyle={{
               flexGrow: 1
            }}
            keyboardShouldPersistTaps="handled"
            bounces={false}
            showsVerticalScrollIndicator={false}
         >
            <View style={[globalStyles.container, { paddingVertical: 0 }]}>
               <ListTileFundMediumList
                  leading={IMAGES["icon-users-white"]}
                  title="POS Agent"
                  subtitle={"Add money to your wallet with a POS agent."}
                  bgColor={COLORS.light.postAgentBgColor}
                  onClick={() => setPosModalVisibility(true)}
               />
               <ListTileFundMediumList
                  leading={IMAGES["icon-card-white"]}
                  title="Debit / ATM Card"
                  subtitle={"Add money to your wallet with a POS agent."}
                  bgColor={COLORS.light.cardBgColor}
                  onClick={() =>
                     navigation.navigate(ROUTES.FUND_WITH_CARD_SCREEN)
                  }
               />
               <ListTileFundMediumList
                  leading={IMAGES["icon-phone-white"]}
                  title="Mobile Banking"
                  subtitle={"Fund your wallet using your mobile banking app."}
                  bgColor={COLORS.light.mobileBgColor}
                  onClick={() => setBankModalVisibility(true)}
               />
               <ListTileFundMediumList
                  leading={IMAGES["icon-bank-white"]}
                  title="Bank Account"
                  subtitle={"Transfer directly from your bank account."}
                  bgColor={COLORS.light.bankAccBgColor}
                  onClick={() =>
                     navigation.navigate(ROUTES.FUND_WITH_BANK_SCREEN)
                  }
               />
               <ListTileFundMediumList
                  leading={IMAGES["icon-ussd-white"]}
                  title="USSD"
                  subtitle={"Fund your wallet using Guaranty Trust Bank 737."}
                  bgColor={COLORS.light.ussdBgColor}
                  onClick={() =>
                     navigation.navigate(ROUTES.FUND_WITH_USSD_SCREEN)
                  }
               />
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

export default FundMoneyMediumList;
