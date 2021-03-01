import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import MainFlowTab from "./BottomTab";
import ProfileScreen from "../screens/tabScreens/ProfileScreen";
import EditProfileScreen from "../screens/tabScreens/EditProfileScreen";
import Security from "../screens/tabScreens/Security";
import { ROUTES } from "./Routes";

export type HomeStackParamList = {
  [ROUTES.MAIN_FLOW_TAB]: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

export default function HomeNavigationStack() {
  return (
    <HomeStack.Navigator
      initialRouteName={ROUTES.MAIN_FLOW_TAB}
      screenOptions={{ gestureEnabled: false }}
      headerMode={"none"}
    >
      <HomeStack.Screen
        name={ROUTES.MAIN_FLOW_TAB}
        component={MainFlowTab}
        options={{ headerShown: false }}
      />
    </HomeStack.Navigator>
  );
}
