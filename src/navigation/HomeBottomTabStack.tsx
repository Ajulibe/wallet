import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/TabScreens/Home/HomeScreen";
import RecentTransaction from "../screens/TabScreens/RecentTransaction/RecentTransaction";
import ChatListScreen from "../screens/TabScreens/Chats/ChatListScreen";
import { Image, View, Text, StyleSheet } from "react-native";
import { ROUTES } from "./Routes";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import COLORS from "../utils/Colors";
import ProfileStack from "./ProfileStack";
import IMAGES from "../utils/Images";

export type HomeTabStackParamList = {
   [ROUTES.HOME_SCREEN]: undefined;
   [ROUTES.RECENT_TRANSACTION_SCREEN]: undefined;
   [ROUTES.CHAT_SCREEN]: undefined;
   [ROUTES.PROFILE_SCREEN]: undefined;
   [ROUTES.NOTIFICATION_SCREEN]: undefined;
};

const Tab = createBottomTabNavigator<HomeTabStackParamList>();

export default function HomeBottomTabStack() {
   const tabBarIcon = (index: number, focused: boolean) => {
      switch (index) {
         case 0:
            return focused
               ? IMAGES["icon-tab-home-active"]
               : IMAGES["icon-tab-home-inactive"];
         case 1:
            return focused
               ? IMAGES["icon-tab-transaction-active"]
               : IMAGES["icon-tab-transaction-inactive"];
         case 2:
            return focused
               ? IMAGES["icon-tab-chat-active"]
               : IMAGES["icon-tab-chat-inactive"];
         default:
            return focused
               ? IMAGES["icon-tab-profile-active"]
               : IMAGES["icon-tab-profile-inactive"];
      }
   };
   const Title = ({ index, focused }: { index: number; focused: boolean }) => {
      let title: string;
      let color: string;

      switch (index) {
         case 0:
            title = "Home";
            color = focused ? COLORS.light.primary : COLORS.light.disabled;
         case 0:
            title = "Transaction";
            color = focused ? COLORS.light.primary : COLORS.light.disabled;
         case 0:
            title = "Chats";
            color = focused ? COLORS.light.primary : COLORS.light.disabled;
         default:
            title = "Profile";
            color = focused ? COLORS.light.primary : COLORS.light.disabled;
      }
      return (
         <Text
            style={[
               styles.tabBarLabel,
               {
                  color: color
               }
            ]}
         >
            {title}
         </Text>
      );
   };

   return (
      <Tab.Navigator
         tabBarOptions={{
            style: {
               shadowOffset: {
                  width: 0,
                  height: 1
               },
               shadowColor: COLORS.light.lightGrey,
               shadowOpacity: 0.2,
               paddingTop: hp("1%")
            },
            activeTintColor: COLORS.light.secondary,
            inactiveTintColor: COLORS.light.tint
         }}
      >
         <Tab.Screen
            name={ROUTES.HOME_SCREEN}
            component={HomeScreen}
            options={() => ({
               tabBarLabel: ({ focused }: any) => (
                  <Title index={0} focused={focused} />
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Image
                     source={tabBarIcon(0, focused)}
                     style={styles.tabBarImage}
                  />
               )
            })}
         />
         <Tab.Screen
            name={ROUTES.RECENT_TRANSACTION_SCREEN}
            component={RecentTransaction}
            options={() => ({
               tabBarLabel: ({ focused }: any) => (
                  <Title index={1} focused={focused} />
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Image
                     source={tabBarIcon(1, focused)}
                     style={styles.tabBarImage}
                  />
               )
            })}
         />
         <Tab.Screen
            name={ROUTES.CHAT_SCREEN}
            component={ChatListScreen}
            options={{
               tabBarLabel: ({ focused }: any) => (
                  <Title index={2} focused={focused} />
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Image
                     source={tabBarIcon(2, focused)}
                     style={styles.tabBarImage}
                  />
               )
            }}
         />
         <Tab.Screen
            name={ROUTES.PROFILE_SCREEN}
            component={ProfileStack}
            options={{
               tabBarLabel: ({ focused }: any) => (
                  <Title index={3} focused={focused} />
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Image
                     source={tabBarIcon(3, focused)}
                     style={styles.tabBarImage}
                  />
               )
            }}
         />
      </Tab.Navigator>
   );
}

const styles = StyleSheet.create({
   tabBarLabel: {
      fontFamily: "Inter-Regular",
      fontSize: hp("1%"),
      marginBottom: hp("1%")
   },
   tabBarImage: {
      resizeMode: "contain",
      width: wp("4.50%"),
      height: hp("2.08%")
   },
   tabBarIconView: {
      width: wp("14.5%%"),
      height: wp("14.5%"),
      backgroundColor: "#ffffff",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: wp("14.5%"),
      position: "absolute",
      bottom: hp("1.2%"),
      borderWidth: 0.2,
      borderColor: "#8F91A1"
   },
   innerTabIconView: {
      width: wp("10.5%%"),
      height: wp("10.5%"),
      backgroundColor: "#00296B",
      justifyContent: "center",
      alignItems: "center",
      borderRadius: wp("10.5%"),
      shadowOffset: {
         width: 0,
         height: 0
      }
      // shadowColor: "#000",
      // shadowOpacity: 1
   }
});
