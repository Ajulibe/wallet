import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import AuthGetStarted from "../screens/auth/AuthGetStarted";
import AuthPhoneNo from "../screens/auth/AuthPhoneNo";
import AuthPhoneNoVerify from "../screens/auth/AuthPhoneNoVerify";
import AuthFullName from "../screens/auth/AuthFullName";
import AuthEmail from "../screens/auth/AuthEmail";
import AuthCreatePin from "../screens/auth/AuthCreatePin";
import AuthFinalLoading from "../screens/auth/AuthFinalLoading";
import MainFlowTab from "../navigation/BottomTab";
import { ROUTES } from "./Routes";
import { AuthDetail } from '../models/AuthDetail'
import AuthLogin from "../screens/auth/AuthLogin";


export type AuthStackParamList = {
  [ROUTES.AUTH_GET_STARTED_SCREEN]: undefined;
  [ROUTES.AUTH_PHONE_NO_SCREEN]: undefined;
  [ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_FULL_NAME_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_EMAIL_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_CREATE_PIN_SCREEN]: { authDetail: AuthDetail };
  [ROUTES.AUTH_FINAL_LOADING_SCREEN]: undefined;
  [ROUTES.AUTH_LOGIN]: undefined;
  [ROUTES.NEW_HOME_TAB]: undefined;
};

const AuthStack = createStackNavigator<AuthStackParamList>();

export default function AuthNavigationStack() {
  return (
    <AuthStack.Navigator
      initialRouteName={ROUTES.AUTH_GET_STARTED_SCREEN}
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
