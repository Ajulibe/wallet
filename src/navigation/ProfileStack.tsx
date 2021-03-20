import React from "react";
import {
   CardStyleInterpolators,
   createStackNavigator
} from "@react-navigation/stack";
import ProfileScreen from "../screens/TabScreens/Profile/ProfileScreen";
import EditProfileScreen from "../screens/TabScreens/Profile/Sections/EditProfile/EditProfileScreen";
import ChangePersonalDetail from "../screens/TabScreens/Profile/Sections/EditProfile/Sections/ChangePersonalDetail";
import ChangeProfilePhoto from "../screens/TabScreens/Profile/Sections/EditProfile/Sections/ChangeProfilePhoto";
import SecurityScreen from "../screens/TabScreens/Profile/Sections/Security/SecurityScreen";
import ChangePin from "../screens/TabScreens/Profile/Sections/Security/Sections/ChangePin";
import EnableBiometric from "../screens/TabScreens/Profile/Sections/Security/Sections/EnableBiometric";
import PaymentMethod from "../screens/TabScreens/Profile/Sections/ManageAccount/PaymentMethod";
import { ROUTES } from "./Routes";
import COLORS from "../utils/Colors";

export type ProfileStackParamList = {
   [ROUTES.PROFILE_SCREEN]: undefined;
   [ROUTES.EDIT_PROFILE_SCREEN]: undefined;
   [ROUTES.CHANGE_PERSONAL_DETAIL_SCREEN]: undefined;
   [ROUTES.CHANGE_PROFILE_PHOTO_SCREEN]: undefined;
   [ROUTES.SECURITY_SCREEN]: undefined;
   [ROUTES.CHANGE_PIN_SCREEN]: undefined;
   [ROUTES.ENABLE_BIOMETRIC_SCREEN]: undefined;
   [ROUTES.PAYMENT_METHOD_SCREEN]: undefined;
};

const ProfileStack = createStackNavigator<ProfileStackParamList>();

export default function ProfileNavigationStack() {
   const headerOptions = {
      headerShown: false,
      cardStyle: { backgroundColor: COLORS.light.white }
   };
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
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.EDIT_PROFILE_SCREEN}
            component={EditProfileScreen}
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.CHANGE_PERSONAL_DETAIL_SCREEN}
            component={ChangePersonalDetail}
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.CHANGE_PROFILE_PHOTO_SCREEN}
            component={ChangeProfilePhoto}
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.SECURITY_SCREEN}
            component={SecurityScreen}
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.CHANGE_PIN_SCREEN}
            component={ChangePin}
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.ENABLE_BIOMETRIC_SCREEN}
            component={EnableBiometric}
            options={headerOptions}
         />
         <ProfileStack.Screen
            name={ROUTES.PAYMENT_METHOD_SCREEN}
            component={PaymentMethod}
            options={headerOptions}
         />
      </ProfileStack.Navigator>
   );
}
