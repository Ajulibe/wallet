import React from "react";
import {
   CardStyleInterpolators,
   createStackNavigator
} from "@react-navigation/stack";
import ProfileScreen from "../screens/Profile/MainScreen/ProfileScreen";
import EditProfileScreen from "../screens/Profile/Sections/EditProfile/EditProfileScreen";
import Security from "../screens/Profile/Sections/Security/Sections/Security";
import SecurityQuestionSetup from "../screens/Profile/Sections/Security/Sections/SecurityQuestionSetup";
import ChangeName from "../screens/Profile/Sections/EditProfile/Sections/ChangeName";
import ChangeEmail from "../screens/Profile/Sections/EditProfile/Sections/ChangeEmail";
import ChangePassword from "../screens/Profile/Sections/EditProfile/Sections/ChangePassword";
import { ROUTES } from "./Routes";
import COLORS from "../utils/Colors";

export type ProfileStackParamList = {
   [ROUTES.PROFILE_SCREEN]: undefined;
   [ROUTES.EDIT_PROFILE_SCREEN]: undefined;
   [ROUTES.SECURITY]: undefined;
   [ROUTES.SECURITY_QUESTION_SETUP]: undefined;
   [ROUTES.CHANGE_NAME]: undefined;
   [ROUTES.CHANGE_EMAIL]: undefined;
   [ROUTES.CHANGE_PASSWORD]: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export default function ProfileNavigationStack() {
   return (
      <ProfileStack.Navigator
         initialRouteName={ROUTES.PROFILE_SCREEN}
         headerMode={"none"}
         screenOptions={{
            cardStyle: { backgroundColor: COLORS.light.white },
            gestureEnabled: true,
            headerShown: false,
            gestureDirection: "horizontal",
            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS
         }}
      >
         <ProfileStack.Screen
            name={ROUTES.PROFILE_SCREEN}
            component={ProfileScreen}
            options={{
               headerShown: true
               // cardStyle: { backgroundColor: "#fff" }
            }}
         />
         <ProfileStack.Screen
            name={ROUTES.EDIT_PROFILE_SCREEN}
            component={EditProfileScreen}
            options={{ headerShown: false }}
         />
         <ProfileStack.Screen
            name={ROUTES.SECURITY}
            component={Security}
            options={{ headerShown: false }}
         />
         <ProfileStack.Screen
            name={ROUTES.SECURITY_QUESTION_SETUP}
            component={SecurityQuestionSetup}
            options={{ headerShown: false }}
         />
         <ProfileStack.Screen
            name={ROUTES.CHANGE_NAME}
            component={ChangeName}
            options={{ headerShown: false }}
         />
         <ProfileStack.Screen
            name={ROUTES.CHANGE_EMAIL}
            component={ChangeEmail}
            options={{ headerShown: false }}
         />
         <ProfileStack.Screen
            name={ROUTES.CHANGE_PASSWORD}
            component={ChangePassword}
            options={{ headerShown: false }}
         />
      </ProfileStack.Navigator>
   );
}
