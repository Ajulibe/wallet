import React from "react";
import {
   CardStyleInterpolators,
   createStackNavigator
} from "@react-navigation/stack";
import { ROUTES } from "./Routes";
import COLORS from "../utils/Colors";
import SendMoneyScreen from "../screens/SendMoney/SendMoneyScreen";
import AmountToSend from "../screens/SendMoney/Sections/AmountToSend";
import SendMoneyDetail from "../screens/SendMoney/Sections/SendMoneyDetail";
import SendMoneySummary from "../screens/SendMoney/Sections/SendMoneySummary";
import SendMoneyEnterPin from "../screens/SendMoney/Sections/SendMoneyEnterPin";
import HomeStack from "./HomeStack";

export type SendMoneyStackParamList = {
   [ROUTES.SEND_MONEY_SCREEN]: undefined;
   [ROUTES.AMOUNT_TO_SEND_SCREEN]: undefined;
   [ROUTES.SEND_MONEY_DETAIL_SCREEN]: undefined;
   [ROUTES.SEND_MONEY_SUMMARY_SCREEN]: undefined;
   [ROUTES.SEND_MONEY_ENTER_PIN_SCREEN]: undefined;
   [ROUTES.HOME_SCREEN_STACK]: undefined;
};

const SendMoneyStack = createStackNavigator<SendMoneyStackParamList>();

export default function SendMoneyNavigationStack() {
   const headerOptions = {
      headerShown: false,
      cardStyle: { backgroundColor: COLORS.light.white }
   };
   return (
      <SendMoneyStack.Navigator
         initialRouteName={ROUTES.SEND_MONEY_SCREEN}
         headerMode={"none"}
         screenOptions={{
            cardStyle: { backgroundColor: COLORS.light.white },
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
            headerStyle: {
               backgroundColor: "#fff"
            }
         }}
      >
         <SendMoneyStack.Screen
            name={ROUTES.SEND_MONEY_SCREEN}
            component={SendMoneyScreen}
            options={headerOptions}
         />
         <SendMoneyStack.Screen
            name={ROUTES.AMOUNT_TO_SEND_SCREEN}
            component={AmountToSend}
            options={headerOptions}
         />
         <SendMoneyStack.Screen
            name={ROUTES.SEND_MONEY_DETAIL_SCREEN}
            component={SendMoneyDetail}
            options={headerOptions}
         />
         <SendMoneyStack.Screen
            name={ROUTES.SEND_MONEY_SUMMARY_SCREEN}
            component={SendMoneySummary}
            options={headerOptions}
         />
         <SendMoneyStack.Screen
            name={ROUTES.SEND_MONEY_ENTER_PIN_SCREEN}
            component={SendMoneyEnterPin}
            options={headerOptions}
         />
         <SendMoneyStack.Screen
            name={ROUTES.HOME_SCREEN_STACK}
            component={HomeStack}
            options={headerOptions}
         />
      </SendMoneyStack.Navigator>
   );
}
