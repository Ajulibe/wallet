import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthValueProposition from "../screens/AuthScreens/AuthValueProposition";
import AuthGetStarted from "../screens/AuthScreens/AuthGetStarted";
import AuthPhoneNo from "../screens/AuthScreens/AuthPhoneNo";
import AuthPhoneNoVerify from "../screens/AuthScreens/AuthPhoneNoVerify";
import AuthFullName from "../screens/AuthScreens/AuthFullName";
import AuthEmail from "../screens/AuthScreens/AuthEmail";
import AuthCreatePin from "../screens/AuthScreens/AuthCreatePin";
import AuthSelectBank from "../screens/AuthScreens/AuthSelectBank";
import AuthFinalLoading from "../screens/AuthScreens/AuthFinalLoading";
import MainFlowTab from "../navigation/BottomTab";
import { ROUTES } from "./Routes";
import { AuthDetail } from "../models/AuthDetail";
import AuthLogin from "../screens/AuthScreens/AuthLogin";
import AuthPayOnTheGo from "../screens/AuthScreens/AuthPayOnTheGo";

export type AuthStackParamList = {
  [ROUTES.AUTH_VALUE_PROPOSITION]: undefined;
  [ROUTES.AUTH_GET_STARTED_SCREEN]: undefined;
  [ROUTES.AUTH_PHONE_NO_SCREEN]: undefined;
  [ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_FULL_NAME_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_EMAIL_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_CREATE_PIN_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_SELECT_BANK]: { authDetail: AuthDetail };
  [ROUTES.AUTH_FINAL_LOADING_SCREEN]: undefined;
  [ROUTES.AUTH_LOGIN]: undefined;
  [ROUTES.NEW_HOME_TAB]: undefined;
  [ROUTES.AUTH_ON_THE_GO]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigationStack() {
  return (
    <AuthStack.Navigator
      initialRouteName={ROUTES.AUTH_VALUE_PROPOSITION}
      screenOptions={{ gestureEnabled: false, headerShown: false }}
      headerMode={"none"}
    >
      <AuthStack.Screen
        name={ROUTES.AUTH_VALUE_PROPOSITION}
        component={AuthValueProposition}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_GET_STARTED_SCREEN}
        component={AuthGetStarted}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_PHONE_NO_SCREEN}
        component={AuthPhoneNo}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN}
        component={AuthPhoneNoVerify}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_FULL_NAME_SCREEN}
        component={AuthFullName}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_EMAIL_SCREEN}
        component={AuthEmail}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_CREATE_PIN_SCREEN}
        component={AuthCreatePin}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_SELECT_BANK}
        component={AuthSelectBank}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_FINAL_LOADING_SCREEN}
        component={AuthFinalLoading}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.AUTH_LOGIN}
        component={AuthLogin}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.NEW_HOME_TAB}
        component={MainFlowTab}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
