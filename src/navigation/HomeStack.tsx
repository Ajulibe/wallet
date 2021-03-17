import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import HomeBottomTabStack from "./HomeBottomTabStack";
import ProfileStack from "./ProfileStack";
import { ROUTES } from "./Routes";

export type HomeStackParamList = {
   [ROUTES.HOME_SCREEN_STACK]: undefined;
   [ROUTES.PROFILE_STACK]: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigationStack() {
   return (
      <HomeStack.Navigator
         initialRouteName={ROUTES.HOME_SCREEN_STACK}
         screenOptions={{
            gestureEnabled: false,
            cardStyle: { backgroundColor: "#fff" }
         }}
         headerMode={"none"}
      >
         <HomeStack.Screen
            name={ROUTES.HOME_SCREEN_STACK}
            component={HomeBottomTabStack}
            options={{
               headerShown: false,
               cardStyle: { backgroundColor: "#fff" }
            }}
         />

         <HomeStack.Screen
            name={ROUTES.PROFILE_STACK}
            component={ProfileStack}
            options={{
               headerShown: false,
               cardStyle: { backgroundColor: "#fff" }
            }}
         />
      </HomeStack.Navigator>
   );
}
