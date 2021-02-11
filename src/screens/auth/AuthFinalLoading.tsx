import React, { useCallback } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const AuthFinalLoading = ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      
    </View>
  );
};

AuthFinalLoading.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AuthFinalLoading;

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
