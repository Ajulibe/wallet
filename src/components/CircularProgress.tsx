import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import COLORS from "../utils/Colors";

interface Props {
   progress: number;
   icon: string;
   size: number;
   iconType?: string;
   iconSize?: number;
}

export default function CircularProgress({
   progress,
   icon,
   size = 60,
   iconType = "FontAwesome",
   iconSize = 28,
}: Props) {
   return (
      <>
         <View style={{ alignItems: "center" }}>
            <AnimatedCircularProgress
               size={size}
               width={4}
               fill={progress}
               rotation={0}
               tintColor={COLORS.light.primary}
               backgroundColor={COLORS.light.tint}
            >
               {(fill) => (
                  // <View style={styles.wrapper}>
                  <View style={[styles.wrapperChild, { backgroundColor: progress == 100 ? COLORS.light.primary : COLORS.light.tint }]}>
                     {iconType == "FontAwesome" ? (
                        <Icon
                           name={icon}
                           size={iconSize}
                           color={COLORS.light.black}
                        />
                     ) : iconType == "SimpleLineIcons" ? (
                        <IconSimpleLineIcons
                           name={icon}
                           size={iconSize}
                           color={COLORS.light.black}
                        />
                     ) : iconType == "MaterialIcons" ? (
                        <MaterialIcons
                           name={icon}
                           size={iconSize}
                           color={COLORS.light.black}
                        />
                     ) : iconType == "FeatherIcons" ? (
                        <FeatherIcons
                           name={icon}
                           size={iconSize}
                           color={COLORS.light.black}
                        />
                     ) : iconType == "FontAwesome5" ? (
                        <FontAwesome5
                           name={icon}
                           size={iconSize}
                           color={COLORS.light.white}
                        />
                     ) : null}
                  </View>
                  // </View>
               )}
            </AnimatedCircularProgress>
         </View>
      </>
   );
}

const styles = StyleSheet.create({
   wrapper: {
      height: "100%",
      width: "100%",
      backgroundColor: COLORS.light.white,
      alignItems: "center",
      justifyContent: "center",
      padding: 16
   },
   wrapperChild: {
      height: "100%",
      width: "100%",
      backgroundColor: COLORS.light.tint,
      alignItems: "center",
      justifyContent: "center",
      padding: 6,
      borderRadius: 80
   }
});
