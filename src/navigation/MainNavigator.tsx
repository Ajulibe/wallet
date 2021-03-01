import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/splashscreen/SplashScreen";
import HomeStack from "./HomeStack";

import AuthStack from "./AuthStack";
import { ROUTES } from "./Routes";

export type RootStackParamList = {
  [ROUTES.SPLASH_SCREEN]: undefined;
  [ROUTES.AUTHENTICATION_TAB]: undefined;
  [ROUTES.HOME_TAB]: undefined;
  [ROUTES.NEW_HOME_TAB]: undefined;
  [ROUTES.HOME_STACK_SCREEN]: undefined;
};

const MainStack = createStackNavigator<RootStackParamList>();

export default function MainNavigator() {
  return (
    <NavigationContainer>
      {/* <MainStack.Navigator
        initialRouteName={ROUTES.SPLASH_SCREEN}
        headerMode={"none"}
      > */}
      <MainStack.Navigator
        initialRouteName={ROUTES.HOME_STACK_SCREEN}
        headerMode={"none"}
      >
        <MainStack.Screen
          name={ROUTES.SPLASH_SCREEN}
          component={SplashScreen}
        />
        <MainStack.Screen
          name={ROUTES.AUTHENTICATION_TAB}
          component={AuthStack}
        />
        {/* <MainStack.Screen name={ROUTES.NEW_HOME_TAB} component={MainFlowTab} /> */}
        <MainStack.Screen
          name={ROUTES.HOME_STACK_SCREEN}
          component={HomeStack}
        />
      </MainStack.Navigator>
    </NavigationContainer>
  );
}
