import React, { useCallback, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import TopLogo from "../../components/TopLogo";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import CircularProgress from "../../components/CircularProgress";
import IMAGES from "../../utils/Images";
import ProgressLoader from "../../components/ProgressLoader";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from '../../utils/Utilities'


type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;
export default function AuthEmail({ navigation }: Props) {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
  const [fullName, setFullName] = useState('')

  let inputChangeHandler = useCallback((id, value, isValid) => {
    setFullName(value.toString())

    // if (UTILITIES.isFullName(value)) {
    //   setBtnBgColor(COLORS.light.primary);
    // } else {
    //   setBtnBgColor(COLORS.light.primaryDisabled);
    // }
  }, []);

  const onSubmit = () => {
    // if (fullName.length < 11) {
    //   console.log("Error oooo!!!");
    // } else {
    navigation.navigate(ROUTES.AUTH_EMAIL_SCREEN);
    // }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <CircularProgress icon="user" progress={60} iconType= {"FeatherIcons"} />

        <Text style={styles.formTitle}>{`We would use this as the name for your SurePay account`}</Text>

        <Text style={styles.inputLabel}>First Name</Text>
        <Input
          id="fullName"
          placeholder="John"
          placeholderTextColor=""
          errorText="Enter your first name"
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
          onInputChange={inputChangeHandler}
          onSubmit={inputChangeHandler}
          initialValue=""
          initiallyValid={false}
          required
          secureTextEntry={false}
          minLength={2}
          textContentType="none"
        />
        <View style={{ height: 16 }} />
        <Text style={styles.inputLabel}>Last Name</Text>
        <Input
          id="fullName"
          placeholder="Okafor"
          placeholderTextColor=""
          errorText="Enter your last name"
          keyboardType="default"
          autoCapitalize="sentences"
          returnKeyType="next"
          onInputChange={inputChangeHandler}
          onSubmit={inputChangeHandler}
          initialValue=""
          initiallyValid={false}
          required
          secureTextEntry={false}
          minLength={2}
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
