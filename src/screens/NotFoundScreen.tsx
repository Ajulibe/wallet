import { StackScreenProps } from "@react-navigation/stack";
import * as React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import { RootStackParamList } from "../navigation/MainNavigator";
import { ROUTES } from "../navigation/Routes";

<<<<<<< HEAD
export default function NotFoundScreen({ navigation, }: StackScreenProps<RootStackParamList, ROUTES.SPLASH_SCREEN>) {

    return (
        <View style={styles.container}>
            <Text style={styles.title}>This screen doesn't exist.</Text>
            <TouchableOpacity onPress={() => navigation.replace(ROUTES.MAIN_FLOW_TAB)} style={styles.link}>
                <Text style={styles.linkText}>Go to home screen!</Text>
            </TouchableOpacity>
        </View>
    );
=======
export default function NotFoundScreen({
  navigation,
}: StackScreenProps<RootStackParamList, ROUTES.SPLASH_SCREEN>) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>This screen doesn't exist.</Text>
      <TouchableOpacity
        onPress={() => navigation.replace(ROUTES.HOME_TAB)}
        style={styles.link}
      >
        <Text style={styles.linkText}>Go to home screen!</Text>
      </TouchableOpacity>
    </View>
  );
>>>>>>> 67b0341c2e4e20823437373aeeffb9a34498c747
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  link: {
    marginTop: 15,
    paddingVertical: 15,
  },
  linkText: {
    fontSize: 14,
    color: "#2e78b7",
  },
});
