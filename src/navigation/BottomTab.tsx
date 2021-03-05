import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/TabScreens/Home/HomeScreen";
import WalletScreen from "../screens/TabScreens/Wallet/WalletScreen";
import AddMoneyScreen from "../screens/TabScreens/AddMoney/AddMoneyScreen";
import SendMoneyScreen from "../screens/TabScreens/SendMoney/SendMoneyScreen";
import NotificationScreen from "../screens/TabScreens/Chats/NotificationScreen";
import { Image, View, Text, StyleSheet } from "react-native";
import { ROUTES } from "./Routes";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";

export type RootStackParamList = {
   [ROUTES.HOME_SCREEN]: undefined;
   [ROUTES.WALLET_SCREEN]: undefined;
   [ROUTES.ADD_MONEY_SCREEN]: undefined;
   [ROUTES.SEND_MONEY_SCREEN]: undefined;
   [ROUTES.NOTIFICATION_SCREEN]: undefined;
};

const Tab = createBottomTabNavigator<RootStackParamList>();

export default function MainFlowTab() {
   return (
      <Tab.Navigator
         tabBarOptions={{
            style: {
               shadowOffset: {
                  width: 0,
                  height: 1
               },
               shadowColor: "#00296B",
               shadowOpacity: 0.2,
               paddingTop: hp("1%")
            },
            activeTintColor: "#00296B",
            inactiveTintColor: "#8094B5"
         }}
      >
         <Tab.Screen
            name={ROUTES.HOME_SCREEN}
            component={HomeScreen}
            options={() => ({
               tabBarLabel: ({ focused }: any) => (
                  <Text
                     style={[
                        styles.tabBarLabel,
                        { color: focused ? "#00296B" : "#8094B5" }
                     ]}
                  >
                     Home
                  </Text>
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Feather
                     name="home"
                     size={18}
                     color={focused ? "#00296B" : "#8094B5"}
                  />
               )
            })}
         />
         <Tab.Screen
            name={ROUTES.WALLET_SCREEN}
            component={WalletScreen}
            options={() => ({
               tabBarLabel: ({ focused }: any) => (
                  <Text
                     style={[
                        styles.tabBarLabel,
                        { color: focused ? "#00296B" : "#8094B5" }
                     ]}
                  >
                     Wallet
                  </Text>
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="ios-wallet-outline"
                     size={20}
                     color={focused ? "#00296B" : "#8094B5"}
                  />
               )
            })}
         />
         <Tab.Screen
            name={ROUTES.ADD_MONEY_SCREEN}
            component={AddMoneyScreen}
            options={{
               tabBarLabel: ({ focused }: any) => (
                  <Text
                     style={[
                        styles.tabBarLabel,
                        {
                           color: focused ? "#00296B" : "#8094B5"
                        }
                     ]}
                  >
                     Add Money
                  </Text>
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="ios-add"
                     size={22}
                     color={focused ? "#00296B" : "#8094B5"}
                  />
               )
            }}
         />
         <Tab.Screen
            name={ROUTES.SEND_MONEY_SCREEN}
            component={SendMoneyScreen}
            options={{
               tabBarLabel: ({ focused }: any) => (
                  <Text
                     style={[
                        styles.tabBarLabel,
                        {
                           color: focused ? "#00296B" : "#8094B5"
                        }
                     ]}
                  >
                     Send Money
                  </Text>
               ),
               tabBarIcon: ({ focused }: any) => (
                  <AntDesign
                     name="arrowup"
                     size={18}
                     color={focused ? "#00296B" : "#8094B5"}
                  />
               )
            }}
         />
         <Tab.Screen
            name={ROUTES.NOTIFICATION_SCREEN}
            component={NotificationScreen}
            options={{
               tabBarLabel: ({ focused }: any) => (
                  <Text
                     style={[
                        styles.tabBarLabel,
                        { color: focused ? "#00296B" : "#8094B5" }
                     ]}
                  >
                     Chats
                  </Text>
               ),
               tabBarIcon: ({ focused }: any) => (
                  <Ionicons
                     name="chatbubbles-outline"
                     size={18}
                     color={focused ? "#00296B" : "#8094B5"}
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
      },
      shadowColor: "#00296B",
      shadowOpacity: 1
   }
});
