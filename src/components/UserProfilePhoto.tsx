import React from "react";
import { StyleSheet, View, ImageBackground } from "react-native";
import COLORS from "../utils/Colors";
import { TouchableOpacity } from "react-native-gesture-handler";
import { MaterialIcons } from "@expo/vector-icons";
import { hp, wp } from "../utils/Dimensions";

interface Props {
   imageSrc: String;
   imageSize: number;
   trailing?: JSX.Element;
   onClick?: (param?: any) => void; //on click of the photo
   onIconClick?: (param?: any) => void; //on click of the top right icon
}
const UserProfilePhoto = (props: Props) => {
   return (
      <TouchableOpacity
         onPress={() => (props.onClick ? props.onClick() : null)}
         style={[
            styles.container,
            { width: props.imageSize, height: props.imageSize }
         ]}
      >
         <ImageBackground
            source={{
               uri: `https://www.atlassian.com/dam/jcr:ba03a215-2f45-40f5-8540-b2015223c918/Max-R_Headshot%20(1).jpg`
            }}
            imageStyle={{ borderRadius: 60 }}
            style={styles.image}
         />
         <View style={styles.iconWrapper}>
            <MaterialIcons
               name="photo-camera"
               size={12}
               color={COLORS.light.white}
            />
         </View>
      </TouchableOpacity>
   );
};

export default UserProfilePhoto;

const styles = StyleSheet.create({
   container: {
      borderRadius: 100,
      alignItems: "center",
      flexDirection: "row",
      position: "relative"
   },
   image: {
      width: "100%",
      height: "100%"
   },
   iconWrapper: {
      position: "absolute",
      top: 1,
      right: 1,
      alignItems: "center",
      justifyContent: "center",
      fontFamily: "Inter-Medium",
      lineHeight: hp(16),
      fontSize: wp(14),
      color: COLORS.light.textBlack,
      width: wp(24),
      height: wp(24),
      borderRadius: 50,
      borderWidth: 1,
      borderColor: COLORS.light.white,
      backgroundColor: COLORS.light.primary
   }
});
