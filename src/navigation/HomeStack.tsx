import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import Home from "../screens/home/Home";
import SendMoneyToWallet from "../screens/home/SendMoneyToWallet";
import SendMoneyToBankAccount from "../screens/home/SendMoneyToBankAccount";
import { ROUTES } from "./Routes";

export type HomeStackParamList = {
  [ROUTES.HOME_SCREEN]: undefined;
  [ROUTES.SEND_MONEY_TO_WALLET_SCREEN]: undefined;
  [ROUTES.SEND_MONEY_TO_BANK_ACCOUNT_SCREEN]: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigationStack() {
  return (
    <HomeStack.Navigator
      initialRouteName={ROUTES.HOME_SCREEN}
      screenOptions={{ gestureEnabled: false }}
      headerMode={"none"}
    >
      <HomeStack.Screen name={ROUTES.HOME_SCREEN} component={Home} />
      <HomeStack.Screen
        name={ROUTES.SEND_MONEY_TO_WALLET_SCREEN}
        component={SendMoneyToWallet}
      />
      <HomeStack.Screen
        name={ROUTES.SEND_MONEY_TO_BANK_ACCOUNT_SCREEN}
        component={SendMoneyToBankAccount}
      />
    </HomeStack.Navigator>
  );
}
