import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthGetStarted from "../screens/auth/AuthGetStarted";
import AuthPhoneNo from "../screens/auth/AuthPhoneNo";
import AuthPhoneNoVerify from "../screens/auth/AuthPhoneNoVerify";
import AuthFullName from "../screens/auth/AuthFullName";
import AuthEmail from "../screens/auth/AuthEmail";
import AuthCreatePin from "../screens/auth/AuthCreatePin";
import AuthFinalLoading from "../screens/auth/AuthFinalLoading";
import HomeNavigationStack from "./HomeStack";
import { ROUTES } from "./Routes";

export type AuthStackParamList = {
  [ROUTES.AUTH_GET_STARTED_SCREEN]: undefined;
  [ROUTES.AUTH_PHONE_NO_SCREEN]: undefined;
  [ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN]: undefined;
  [ROUTES.AUTH_FULL_NAME_SCREEN]: undefined;
  [ROUTES.AUTH_EMAIL_SCREEN]: undefined;
  [ROUTES.AUTH_CREATE_PIN_SCREEN]: undefined;
  [ROUTES.AUTH_FINAL_LOADING_SCREEN]: undefined;
  [ROUTES.HOME_TAB]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigationStack() {
  return (
    <AuthStack.Navigator
      initialRouteName={ROUTES.HOME_TAB}
      screenOptions={{ gestureEnabled: false, headerShown: false }}
      headerMode={"none"}
    >
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
        name={ROUTES.AUTH_FINAL_LOADING_SCREEN}
        component={AuthFinalLoading}
        options={{ headerShown: false }}
      />
      <AuthStack.Screen
        name={ROUTES.HOME_TAB}
        component={HomeNavigationStack}
        options={{ headerShown: false }}
      />
    </AuthStack.Navigator>
  );
}
