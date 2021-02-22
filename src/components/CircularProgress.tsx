import React from "react";
import { View, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";
import IconSimpleLineIcons from "react-native-vector-icons/SimpleLineIcons";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import FeatherIcons from "react-native-vector-icons/Feather";
import { AnimatedCircularProgress } from "react-native-circular-progress";
import COLORS from "../utils/Colors";

interface Props {
  progress: number;
  icon: string;
  iconType?: string;
}

export default function CircularProgress({
  progress,
  icon,
  iconType = "FontAwesome",
}: Props) {
  return (
    <>
      <View style={{ alignItems: "center" }}>
        <AnimatedCircularProgress
          size={90}
          width={2}
          fill={progress}
          rotation={270}
          tintColor={COLORS.light.accent}
          backgroundColor={COLORS.light.tint}
        >
          {(fill) => (
            <View style={styles.wrapper}>
              <View style={styles.wrapperChild}>
                {iconType == "FontAwesome" ? (
                  <Icon name={icon} size={24} color={COLORS.light.white} />
                ) : iconType == "SimpleLineIcons" ? (
                  <IconSimpleLineIcons
                    name={icon}
                    size={24}
                    color={COLORS.light.white}
                  />
                ) : iconType == "MaterialIcons" ? (
                  <MaterialIcons
                    name={icon}
                    size={24}
                    color={COLORS.light.white}
                  />
                ) : iconType == "FeatherIcons" ? (
                  <FeatherIcons
                    name={icon}
                    size={24}
                    color={COLORS.light.white}
                  />
                ) : null}
              </View>
            </View>
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
    padding: 16,

  },
  wrapperChild: {
    height: "100%",
    width: "100%",
    backgroundColor: COLORS.light.accent,
    alignItems: "center",
    justifyContent: "center",
    padding: 6,
    borderRadius: 80,
  },
});
