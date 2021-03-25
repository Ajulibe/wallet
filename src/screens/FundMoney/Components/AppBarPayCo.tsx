import React from "react";
import { StyleSheet, View } from "react-native";
import { Text } from "react-native-animatable";
import { TouchableOpacity } from "react-native-gesture-handler";
import { AntDesign, MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../../../utils/Dimensions";
import COLORS from "../../../utils/Colors";

interface Props {
   onBackPress: () => void; //Back button press
}
const AppBarPayCo = (props: Props) => {
   return (
      <View style={styles.container}>
         <MaterialIcons
            name="lock-outline"
            size={12}
            color={COLORS.light.textBlackLight}
         />
         <Text style={styles.title}>SECURED BY PAYCO</Text>
         <View style={{ flex: 1 }} />
         <TouchableOpacity onPress={props.onBackPress}>
            <AntDesign
               name={"closecircleo"}
               color={COLORS.light.primary}
               size={15}
            />
         </TouchableOpacity>
      </View>
   );
};

export default AppBarPayCo;

const styles = StyleSheet.create({
   container: {
      width: "100%",
      alignItems: "center",
      flexDirection: "row",
      paddingVertical: hp(15),
      paddingHorizontal: wp(30),
      backgroundColor: "rgba(32,47,68,0.05)"
   },
   title: {
      fontFamily: "Inter-Medium",
      lineHeight: hp(16),
      fontSize: wp(10),
      color: COLORS.light.textBlack,
      marginLeft: wp(6)
   }
});
