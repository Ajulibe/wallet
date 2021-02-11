import React, { useCallback } from "react";
import { View, StyleSheet, Text, Image, TouchableOpacity } from "react-native";

const AuthEmail= ({ navigation }: any) => {

  return (
    <View style={styles.container}>
      
    </View>
  );
};

AuthEmail.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AuthEmail;

const styles = StyleSheet.create({
    container: {
    backgroundColor: "#FCFCFC",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
