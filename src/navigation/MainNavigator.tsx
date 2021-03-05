import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import HomeStack from "./HomeStack";
import ProfileScreen from "../screens/profilecomponents/mainscreen/ProfileScreen";
import EditProfileScreen from "../screens/profilecomponents/sections/EditProfile/Sections/EditProfileScreen";
import Security from "../screens/profilecomponents/sections/Security/Sections/Security";

import AuthStack from "./AuthStack";
import { ROUTES } from "./Routes";
import SecurityQuestionSetup from "../screens/profilecomponents/sections/Security/Sections/SecurityQuestionSetup";
import ChangeName from "../screens/profilecomponents/sections/EditProfile/Sections/ChangeName";
import ChangeEmail from "../screens/profilecomponents/sections/EditProfile/Sections/ChangeEmail";
import ChangePassword from "../screens/profilecomponents/sections/EditProfile/Sections/ChangePassword";
import HomeScreen from "../screens/tabscreens/home/HomeScreen";

export type RootStackParamList = {
  [ROUTES.SPLASH_SCREEN]: undefined;
  [ROUTES.AUTHENTICATION_TAB]: undefined;
  [ROUTES.NEW_HOME_TAB]: undefined;
  [ROUTES.HOME_STACK_SCREEN]: undefined;
  [ROUTES.PROFILE_SCREEN]: undefined;
  [ROUTES.EDIT_PROFILE_SCREEN]: undefined;
  [ROUTES.SECURITY]: undefined;
  [ROUTES.SECURITY_QUESTION_SETUP]: undefined;
  [ROUTES.CHANGE_NAME]: undefined;
  [ROUTES.CHANGE_EMAIL]: undefined;
  [ROUTES.CHANGE_PASSWORD]: undefined;
  [ROUTES.HOME_SCREEN]: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      <MainStack.Navigator
        // initialRouteName={ROUTES.HOME_STACK_SCREEN}
        initialRouteName={ROUTES.SPLASH_SCREEN}
        headerMode={"none"}
      >
        {/* <MainStack.Screen
          name={ROUTES.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <MainStack.Screen
          name={ROUTES.AUTHENTICATION_TAB}
          component={AuthStack}
        /> */}
        <MainStack.Screen
          name={ROUTES.HOME_STACK_SCREEN}
          component={HomeStack}
        />
        <MainStack.Screen name={ROUTES.HOME_SCREEN} component={HomeScreen} />
        <MainStack.Screen
          name={ROUTES.PROFILE_SCREEN}
          component={ProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ROUTES.EDIT_PROFILE_SCREEN}
          component={EditProfileScreen}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ROUTES.SECURITY}
          component={Security}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ROUTES.SECURITY_QUESTION_SETUP}
          component={SecurityQuestionSetup}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ROUTES.CHANGE_NAME}
          component={ChangeName}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ROUTES.CHANGE_EMAIL}
          component={ChangeEmail}
          options={{ headerShown: false }}
        />
        <MainStack.Screen
          name={ROUTES.CHANGE_PASSWORD}
          component={ChangePassword}
          options={{ headerShown: false }}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
