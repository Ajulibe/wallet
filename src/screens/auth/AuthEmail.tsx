import React, { useCallback, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import CircularProgress from "../../components/CircularProgress";
import styles from "../../components/css/AuthFormCss";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;

const AuthEmail = ({ navigation }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
  const [fullName, setFullName] = useState("");

  let inputChangeHandler = useCallback((id, value, isValid) => {
    setFullName(value.toString());

  }, []);

  const onSubmit = () => {
    // if (fullName.length < 2) {
    //   console.log("Error oooo!!!");
    // } else {
      navigation.navigate(ROUTES.AUTH_CREATE_PIN_SCREEN);
    // }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <CircularProgress icon="envelope" progress={80} iconType={"SimpleLineIcons"} />

        <Text style={styles.formTitle}>{`This is not compulsory. If you don’t have an email address, you skip this option.`}</Text>

        <Text style={styles.inputLabel}>Email Address</Text>
        <Input
          id="fullName"
          placeholder="john.okafor@gmail.com"
          placeholderTextColor=""
          errorText="* your name please!"
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="none"
          onSubmit={inputChangeHandler}
          onInputChange={inputChangeHandler}
          initialValue=""
          initiallyValid={false}
          required
          secureTextEntry={false}
          minLength={11}
          textContentType="none"
        />

        <View style={{ flex: 1 }} />

        <CustomButton
          bgColor={btnBgColor}
          textColor={COLORS.light.white}
          btnText={"Next"}
          onClick={onSubmit}
        />

        {/* <ProgressLoader isLoading={true} imgSrc={IMAGES.loading} /> */}
      </View>
    </ScrollView>
  );
};

AuthEmail.navigationOptions = () => {
  return {
    headerShown: false,
  };
};

export default AuthEmail;
