import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabStack from "./HomeBottomTabStack";
import ProfileStack from "./ProfileStack";
import { ROUTES } from "./Routes";
import NotificationScreen from "../screens/Notification/NotificationScreen";
import FundMoneyScreen from "../screens/FundMoney/FundMoneyScreen";
import SendMoneyScreen from "../screens/SendMoney/SendMoneyScreen";
import COLORS from "../utils/Colors";

export type HomeStackParamList = {
   [ROUTES.HOME_SCREEN_STACK]: undefined;
   [ROUTES.PROFILE_STACK]: undefined;
   [ROUTES.NOTIFICATION_SCREEN]: undefined;
   [ROUTES.SEND_MONEY_SCREEN]: undefined;
   [ROUTES.FUND_MONEY_SCREEN]: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigationStack() {
   const headerOptions = {
      headerShown: false,
      cardStyle: { backgroundColor: COLORS.light.white }
   };
   return (
      <HomeStack.Navigator
         initialRouteName={ROUTES.HOME_SCREEN_STACK}
         screenOptions={{
            gestureEnabled: false,
            cardStyle: { backgroundColor: COLORS.light.white }
         }}
         headerMode={"none"}
      >
         <HomeStack.Screen
            name={ROUTES.HOME_SCREEN_STACK}
            component={HomeBottomTabStack}
            options={headerOptions}
         />

         <HomeStack.Screen
            name={ROUTES.PROFILE_STACK}
            component={ProfileStack}
            options={headerOptions}
         />

         <HomeStack.Screen
            name={ROUTES.NOTIFICATION_SCREEN}
            component={NotificationScreen}
            options={headerOptions}
         />

         <HomeStack.Screen
            name={ROUTES.FUND_MONEY_SCREEN}
            component={FundMoneyScreen}
            options={headerOptions}
         />

         <HomeStack.Screen
            name={ROUTES.SEND_MONEY_SCREEN}
            component={SendMoneyScreen}
            options={headerOptions}
         />
      </HomeStack.Navigator>
   );
}
