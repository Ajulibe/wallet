import React from "react";
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   StyleSheet,
   Image
} from "react-native";
import { ChatData } from "../../../../extra/ChatData";
import { ChatListInterface } from "../../../../models/ChatModel";
import COLORS from "../../../../utils/Colors";
import { hp, wp } from "../../../../utils/Dimensions";

interface Props {
   onItemClick: (item: ChatListInterface) => void;
}

export default function ChatList(props: Props) {
   const chatLists = ChatData.chatsList;

   const RecentMessage = ({ chatItem }: { chatItem: ChatListInterface }) => {
      const lastChatRef = chatItem.chats[0].transactionReference;

      if (lastChatRef != null && lastChatRef != undefined) {
         if (lastChatRef.transactionType == "debit") {
            return (
               <Text>
                  You sent{" "}
                  <Text style={styles.debit}>₦${lastChatRef.amount}</Text> to{" "}
                  {chatItem.user.firstName}
               </Text>
            );
         } else {
            return (
               <Text>
                  {chatItem.user.firstName} sent you{" "}
                  <Text style={styles.credit}>₦${lastChatRef.amount}</Text>
               </Text>
            );
         }
      }
      return <Text>{chatItem.chats[0].message}</Text>;
   };

   const ChatListItem = ({ chatItem }: { chatItem: ChatListInterface }) => (
      <TouchableOpacity onPress={() => props.onItemClick(chatItem)}>
         <View style={styles.chatItem}>
            <Image
               source={{
                  uri: chatItem.user.photoUrl
               }}
               style={styles.chatImage}
            />
            <View style={styles.nameMessageWrapper}>
               <Text style={styles.chatUserName}>
                  {`${chatItem.user.firstName} ${chatItem.user.lastName}`}
               </Text>
               <Text
                  style={styles.recentChat}
                  numberOfLines={1}
                  ellipsizeMode="tail"
               >
                  <RecentMessage chatItem={chatItem} />
               </Text>
            </View>
            <View style={styles.timeWrapper}>
               <Text style={styles.time}>11:40pm</Text>
               <RadioDot />
            </View>
         </View>
      </TouchableOpacity>
   );

   const RadioDot = () => <View style={[styles.radioDot]} />;

   return (
      <FlatList
         data={chatLists}
         keyboardShouldPersistTaps={"handled"}
         nestedScrollEnabled={true}
         bouncesZoom={true}
         renderItem={(data) => <ChatListItem chatItem={data.item} />}
         keyExtractor={(item) => item.id}
      />
   );
}

const styles = StyleSheet.create({
   chatItem: {
      flexDirection: "row",
      width: "100%",
      paddingVertical: hp(16),
      borderTopColor: "rgba(235,235,242,1)",
      borderTopWidth: 0.5,
      alignItems: "center"
   },
   chatImage: {
      width: wp(50),
      height: wp(50),
      resizeMode: "cover",
      borderRadius: 50
   },
   nameMessageWrapper: {
      marginLeft: wp(12),
      flex: 1
   },
   chatUserName: {
      fontSize: wp(14),
      lineHeight: hp(16),
      overflow: "hidden",
      fontFamily: "Inter-SemiBold",
      color: COLORS.light.textBlack,
      marginBottom: hp(7)
   },
   recentChat: {
      fontSize: wp(12),
      lineHeight: hp(16),
      overflow: "hidden",
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack40
   },
   debit: {
      color: COLORS.light.secondary,
      fontFamily: "Inter-SemiBold"
   },
   credit: {
      color: COLORS.light.primary,
      fontFamily: "Inter-SemiBold"
   },
   timeWrapper: {
      alignItems: "flex-end"
   },
   time: {
      fontSize: wp(12),
      lineHeight: hp(16),
      overflow: "hidden",
      fontFamily: "Inter-Regular",
      color: COLORS.light.textBlack40
   },
   radioDot: {
      marginTop: hp(11),
      width: wp(6),
      height: wp(6),
      backgroundColor: COLORS.light.primary,
      borderRadius: 50,
      alignItems: "center",
      justifyContent: "center"
   }
});
