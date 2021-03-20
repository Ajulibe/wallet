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
   Button,
   NativeScrollEvent,
   NativeSyntheticEvent
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../navigation/Routes";
import COLORS from "../../../utils/Colors";
import { HomeStackParamList } from "../../../navigation/HomeStack";
import globalStyles from "../../../components/css/GlobalCss";
import HeaderHome from "./HomeScreenComponents/HeaderHome";
import { hp, wp } from "../../../utils/Dimensions";
import WalletAction from "./HomeScreenComponents/WalletAction";
import { Octicons } from "@expo/vector-icons";
import ChatList from "../Chats/Components/ChatList";

type Props = StackScreenProps<HomeStackParamList, ROUTES.HOME_SCREEN_STACK>;

const HomeScreen = ({ navigation }: Props) => {
   const [hideSubtitle, setHideSubtitle] = useState(false);

   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const positionX = event.nativeEvent.contentOffset.x;
      const positionY = event.nativeEvent.contentOffset.y;

      if (positionY > 90) {
         setHideSubtitle(true);
      } else {
         setHideSubtitle(false);
      }
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
               hideSubtitle={hideSubtitle}
            />
            <ScrollView
               contentContainerStyle={globalStyles.scrollViewContainer}
               keyboardShouldPersistTaps="handled"
               bounces={false}
               showsVerticalScrollIndicator={false}
               onScroll={(event) => handleScroll(event)}
               onScrollEndDrag={(event) => handleScroll(event)}
               scrollEventThrottle={160}
               stickyHeaderIndices={[2]}
            >
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
      marginBottom: hp(12)
   },
   walletBalanceFloat: {
      fontSize: wp(16),
      fontFamily: "Inter-Medium",
      lineHeight: hp(24)
   },
   recent: {
      marginTop: hp(42),
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
