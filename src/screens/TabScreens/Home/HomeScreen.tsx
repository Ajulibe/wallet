import React, { useRef, useState } from "react";
import {
   View,
   StyleSheet,
   ScrollView,
   SafeAreaView,
   StatusBar,
   Text,
   Easing,
   Animated,
   Button
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../navigation/Routes";
import COLORS from "../../../utils/Colors";
import { HomeStackParamList } from "../../../navigation/HomeStack";
import globalStyles from "../../../components/css/GlobalCss";
import HeaderHome from "./HomeScreenComponents/HeaderHome";
import IMAGES from "../../../utils/Images";
import { hp, wp } from "../../../utils/Dimensions";
import WalletAction from "./HomeScreenComponents/WalletAction";
import { Octicons } from "@expo/vector-icons";
import ChatList from "../Chats/Components/ChatList";
import { useScrollToTop } from "@react-navigation/native";

type Props = StackScreenProps<HomeStackParamList, ROUTES.HOME_SCREEN_STACK>;

const HomeScreen = ({ navigation }: Props) => {
   const ref = useRef<ScrollView | null>(null);

   useScrollToTop(ref);
   const value = useState(new Animated.Value(0))[0];

   const anim = Animated.timing(value, {
      toValue: 100,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: false
   });

   const anim2 = Animated.timing(value, {
      toValue: 100,
      duration: 1000,
      easing: Easing.linear,
      useNativeDriver: true
   });

   const start = () => {
      anim2.start();
   };

   return (
      <>
         <StatusBar barStyle="light-content" />
         <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.white }}>
            {/* HOME HEADER  */}
            <HeaderHome
               navigation={navigation}
               title="Hey John 👋🏼"
               subtitle="Here’s what’s happening"
            />
            <ScrollView
               contentContainerStyle={{ flexGrow: 1 }}
               keyboardShouldPersistTaps="handled"
               bounces={false}
               showsVerticalScrollIndicator={false}
            >
               <View style={globalStyles.container}>
                  <Animated.View
                     style={{
                        width: 100,
                        height: 100,
                        backgroundColor: "red",
                        // marginLeft: value,
                        transform: [{ translateX: value }]
                     }}
                  />
                  <Button onPress={start} title="MoBE" />
                  {/* WALLET BALANCE */}
                  <Text style={styles.walletBalanceText}>Wallet Ballance</Text>
                  <Text style={styles.walletBalance}>
                     <Text>₦234,934</Text>
                     <Text style={styles.walletBalanceFloat}>.78</Text>
                  </Text>
                  {/* SEND MONEY & FUND WALLET COMPONENT  */}
                  <WalletAction
                     onFundWalletClick={() =>
                        navigation.navigate(ROUTES.FUND_MONEY_SCREEN)
                     }
                     onSendMoneyClick={() =>
                        navigation.navigate(ROUTES.SEND_MONEY_SCREEN)
                     }
                  />
                  {/* RECENT CHATS */}
                  <View style={styles.recent}>
                     <Text style={styles.recentText}>Recent Chats</Text>
                     <Octicons
                        size={18}
                        name="info"
                        color={COLORS.light.textBlack}
                     />
                  </View>
                  {/* RECENT CHAT LIST COMPONENT  */}
                  <ChatList onItemClick={(chatItem) => console.log(chatItem)} />
               </View>
            </ScrollView>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#ffffff",
      alignItems: "center"
   },
   walletBalanceText: {
      marginTop: hp(8),
      fontFamily: "Inter-Regular",
      fontSize: wp(14),
      lineHeight: hp(24),
      color: COLORS.light.textBlack40,
      textAlign: "center"
   },
   walletBalance: {
      color: COLORS.light.textBlack,
      textAlign: "center",
      fontFamily: "Inter-Bold",
      fontSize: wp(28),
      lineHeight: hp(48),
      marginBottom: hp(16)
   },
   walletBalanceFloat: {
      fontSize: wp(16),
      fontFamily: "Inter-Medium",
      lineHeight: hp(24)
   },
   recent: {
      marginTop: hp(46),
      flexDirection: "row",
      width: "100%",
      alignItems: "center",
      marginBottom: hp(12)
   },
   recentText: {
      fontSize: wp(18),
      fontFamily: "Inter-Medium",
      lineHeight: hp(24),
      color: COLORS.light.textBlack,
      marginRight: wp(6)
   }
});

export default HomeScreen;
