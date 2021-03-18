import React, { useState, useRef } from "react";
import {
   View,
   StyleSheet,
   Text,
   Image,
   ScrollView,
   SafeAreaView
} from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import {
   NavigationTabProp,
   NavigationBottomTabScreenComponent
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";

type Props = {
   navigation: NavigationTabProp<"Shop">;
};

const ChatListScreen = ({ navigation }: Props) => {
   const ref = useRef<ScrollView | null>(null);

   useScrollToTop(ref);

   return (
      <SafeAreaView style={{ backgroundColor: "#FfFfFf" }}>
         <ScrollView ref={ref}>
            <View style={styles.container}>
               <Text style={styles.header}>Dhaka, Banassre</Text>
            </View>
         </ScrollView>
      </SafeAreaView>
   );
};

const styles = StyleSheet.create({
   container: {
      backgroundColor: "#ffffff",
      flex: 1,
      alignItems: "center"
   },

   header: {
      fontSize: 18,
      color: "#4C4F4D",
      marginBottom: hp("1.4%")
   }
});

export default ChatListScreen;
