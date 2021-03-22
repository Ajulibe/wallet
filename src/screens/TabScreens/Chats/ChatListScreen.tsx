import React, { useState } from "react";
import {
   StyleSheet,
   ScrollView,
   SafeAreaView,
   NativeScrollEvent,
   NativeSyntheticEvent,
   Platform
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { ROUTES } from "../../../navigation/Routes";
import COLORS from "../../../utils/Colors";
import { HomeStackParamList } from "../../../navigation/HomeStack";
import globalStyles from "../../../components/css/GlobalCss";
import HeaderHome from "../Home/HomeScreenComponents/HeaderHome";
import { hp, wp } from "../../../utils/Dimensions";
import ChatList from "../Chats/Components/ChatList";

type Props = StackScreenProps<HomeStackParamList, ROUTES.HOME_SCREEN_STACK>;

const ChatListScreen = ({ navigation }: Props) => {
   const [hideSubtitle, setHideSubtitle] = useState(false);

   //Hide Subtitle(& notification bell) on 90px scroll up
   const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
      const positionY = event.nativeEvent.contentOffset.y;

      if (positionY > 100) {
         setHideSubtitle(true);
      } else if (hideSubtitle) {
         if (Platform.OS == "android") {
            if (positionY < 4) setHideSubtitle(false);
         } else {
            if (positionY < 80) setHideSubtitle(false);
         }
      }
   };

   return (
      <>
         <SafeAreaView style={globalStyles.AndroidSafeArea}>
            {/* HOME HEADER  */}
            <HeaderHome
               navigation={navigation}
               title="Recent Chats"
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
            >
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
   }
});

export default ChatListScreen;
