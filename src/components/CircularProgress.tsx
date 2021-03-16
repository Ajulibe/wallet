import React from "react";
import { View, StyleSheet, ImageSourcePropType, Image } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import FontAwesome5 from "react-native-vector-icons/FontAwesome5";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import COLORS from "../utils/Colors";
import IMAGES from "../utils/Images";

interface Props {
   progress: number;
   iconPath: ImageSourcePropType;
   iconSize?: number;
   size?: number;
}

export default function CircularProgress({
   progress,
   iconPath,
   iconSize = 24,
   size = 60
}: Props) {
   return (
      <>
         <View style={{ alignItems: "center" }}>
            <AnimatedCircularProgress
               size={size}
               width={progress == 100 ? 5 : 3}
               fill={progress}
               duration={2000}
               rotation={0}
               tintColor={
                  progress == 100
                     ? COLORS.light.primaryLight
                     : COLORS.light.primary
               }
               backgroundColor={COLORS.light.transparent}
            >
               {(fill) => (
                  // <View style={styles.wrapper}>
                  <View
                     style={[
                        styles.wrapperChild,
                        {
                           backgroundColor:
                              progress == 100
                                 ? COLORS.light.primary
                                 : COLORS.light.tint
                        }
                     ]}
                  >
                     <Image
                        source={iconPath}
                        style={{
                           width: iconSize,
                           height: iconSize,
                           resizeMode: "contain"
                        }}
                     />
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
