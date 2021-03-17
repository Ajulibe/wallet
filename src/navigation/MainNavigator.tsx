import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import SplashScreen from "../screens/SplashScreen/SplashScreen";
import HomeStack from "./HomeStack";
import AuthStack from "./AuthStack";
import { ROUTES } from "./Routes";

export type RootStackParamList = {
   [ROUTES.SPLASH_SCREEN]: undefined;
   [ROUTES.AUTHENTICATION_STACK]: undefined;
   [ROUTES.HOME_SCREEN_STACK]: undefined;
   [ROUTES.PROFILE_STACK]: undefined;
};
const MainStack = createStackNavigator<RootStackParamList>();
export default function MainNavigator() {
   return (
      <NavigationContainer>
         <MainStack.Navigator
            initialRouteName={ROUTES.SPLASH_SCREEN}
            headerMode={"none"}
            screenOptions={{
               cardStyle: { backgroundColor: "#fff" }
            }}
         >
            <MainStack.Screen
               name={ROUTES.SPLASH_SCREEN}
               component={SplashScreen}
            />
            <MainStack.Screen
               name={ROUTES.AUTHENTICATION_STACK}
               component={AuthStack}
            />
            <MainStack.Screen
               name={ROUTES.HOME_SCREEN_STACK}
               component={HomeStack}
            />
         </MainStack.Navigator>
      </NavigationContainer>
   );
}
