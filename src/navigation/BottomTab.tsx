import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/tabScreens/HomeScreen";
import WalletScreen from "../screens/tabScreens/WalletScreen";
import AddMoneyScreen from "../screens/tabScreens/AddMoneyScreen";
import SendMoneyScreen from "../screens/tabScreens/SendMoneyScreen";
import NotificationScreen from "../screens/tabScreens/NotificationScreen";
import { Image, View, Text, StyleSheet } from "react-native";
import { ROUTES } from './Routes';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import IMAGES from '../utils/Images'


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
        activeTintColor: "#582ED7",
        inactiveTintColor: "#52616E",
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
                { color: focused ? "#582ED7" : "#52616E" },
              ]}
            >
              Home
            </Text>
          ),
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={[
                styles.tabBarImage,
                { tintColor: focused ? "#582ED7" : "#52616E" },
              ]}
              source={IMAGES.Home}
            />
          ),
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
                { color: focused ? "#582ED7" : "#52616E" },
              ]}
            >
              Wallet
            </Text>
          ),
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={[
                styles.tabBarImage,
                { tintColor: focused ? "#582ED7" : "#52616E" },
              ]}
              source={IMAGES.WalletIcon}
            />
          ),
        })}
      />
      <Tab.Screen
        name={ROUTES.ADD_MONEY_SCREEN}
        component={AddMoneyScreen}
        options={{
          tabBarLabel: () => <View />,
          tabBarIcon: ({ focused }: any) => (
            <View style={styles.tabBarIconView}>
              <View style={styles.innerTabIconView}>
                <Image
                  style={[
                    styles.tabBarImage,
                    {
                      tintColor: "#ffffff",
                    },
                  ]}
                  source={IMAGES.AddMoney}
                />
              </View>
            </View>
          ),
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
                  color: focused ? "#582ED7" : "#52616E",
                },
              ]}
            >
              Send Money
            </Text>
          ),
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={[
                styles.tabBarImage,
                { tintColor: focused ? "#582ED7" : "#52616E" },
              ]}
              source={IMAGES.SendMoney}
            />
          ),
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
                { color: focused ? "#582ED7" : "#52616E" },
              ]}
            >
              Notification
            </Text>
          ),
          tabBarIcon: ({ focused }: any) => (
            <Image
              style={[
                styles.tabBarImage,
                { tintColor: focused ? "#582ED7" : "#52616E" },
              ]}
              source={IMAGES.Notification}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBarLabel: {
    fontFamily: "Lato-Regular",
    fontSize: hp("1%"),
    marginBottom: hp("1%"),
  },
  tabBarImage: {
    resizeMode: "contain",
    width: wp("4.50%"),
    height: hp("2.08%"),
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
    borderColor: "#8F91A1",
  },
  innerTabIconView: {
    width: wp("10.5%%"),
    height: wp("10.5%"),
    backgroundColor: "#582ED7",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: wp("10.5%"),
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowColor: "#BCABEF",
    shadowOpacity: 1,
  },
});
