import React from "react";
import {
   CardStyleInterpolators,
   createStackNavigator
} from "@react-navigation/stack";
import { ROUTES } from "./Routes";
import COLORS from "../utils/Colors";
import HomeStack from "./HomeStack";
import FundMoneyScreen from "../screens/FundMoney/FundMoneyScreen";
import FundMoneyMediumList from "../screens/FundMoney/Sections/FundMoneyMediumList";
import FundWithBank from "../screens/FundMoney/Sections/FundWithBank";
import FundWithCard from "../screens/FundMoney/Sections/FundWithCard";
import FundWithUssd from "../screens/FundMoney/Sections/FundWithUssd";

export type FundMoneyStackParamList = {
   [ROUTES.FUND_MONEY_SCREEN]: undefined;
   [ROUTES.FUND_MONEY_MEDIUM_LIST_SCREEN]: undefined;
   [ROUTES.FUND_WITH_BANK_SCREEN]: undefined;
   [ROUTES.FUND_WITH_CARD_SCREEN]: undefined;
   [ROUTES.FUND_WITH_USSD_SCREEN]: undefined;
   [ROUTES.HOME_SCREEN_STACK]: undefined;
};

const FundMoneyStack = createStackNavigator<FundMoneyStackParamList>();

export default function FundMoneyNavigationStack() {
   const headerOptions = {
      headerShown: false,
      cardStyle: { backgroundColor: COLORS.light.white }
   };
   return (
      <FundMoneyStack.Navigator
         initialRouteName={ROUTES.FUND_MONEY_SCREEN}
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
         <FundMoneyStack.Screen
            name={ROUTES.FUND_MONEY_SCREEN}
            component={FundMoneyScreen}
            options={headerOptions}
         />
         <FundMoneyStack.Screen
            name={ROUTES.FUND_MONEY_MEDIUM_LIST_SCREEN}
            component={FundMoneyMediumList}
            options={headerOptions}
         />
         <FundMoneyStack.Screen
            name={ROUTES.FUND_WITH_BANK_SCREEN}
            component={FundWithBank}
            options={headerOptions}
         />
         <FundMoneyStack.Screen
            name={ROUTES.FUND_WITH_CARD_SCREEN}
            component={FundWithCard}
            options={headerOptions}
         />
         <FundMoneyStack.Screen
            name={ROUTES.FUND_WITH_USSD_SCREEN}
            component={FundWithUssd}
            options={headerOptions}
         />
         <FundMoneyStack.Screen
            name={ROUTES.HOME_SCREEN_STACK}
            component={HomeStack}
            options={headerOptions}
         />
      </FundMoneyStack.Navigator>
   );
}
