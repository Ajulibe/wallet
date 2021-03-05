import React, { useCallback, useState } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StatusBar } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import IMAGES from "../../utils/Images";
import { AuthDetail } from "../../models/AuthDetail";
import InputValidation from "../../utils/InputValidation";

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;

const AuthEmail = ({ navigation, route }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primaryDisabled);
  const [email, setEmail] = useState("");
  const [errorText, setErrorText] = useState("");
  const [touchedAction, setTouchedAction] = useState(false);
  const [authDetail, setAuthDetail] = useState(route.params.authDetail);

  let inputChangeHandler = (id?: string, value?: string, isValid?: boolean) => {
    setEmail(value!);

    if (InputValidation.isValidEmail(value!)) {
      setBtnBgColor(COLORS.light.primary)
      setErrorText('')
    } else {
      setBtnBgColor(COLORS.light.primaryDisabled)
    }
  }

  const onSubmit = () => {
    setTouchedAction(true)

    if (email == "") {
      setErrorText('Enter your email')
    } else if (!InputValidation.isValidEmail(email)) {
      setErrorText('Enter a valid email address')
    } else {
      authDetail.emailAddress = email.toLocaleLowerCase()
      navigation.navigate(ROUTES.AUTH_CREATE_PIN_SCREEN, { authDetail: authDetail });
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
      <View style={styles.wrapper}>

        <StatusBar backgroundColor={COLORS.light.white} />
        {/* overlay bg image */}
        <View style={styles.overlayWrapper}>
          <Image source={IMAGES["top-overlay-white"]} style={styles.overlayImage} />
        </View>
        {/* top menu  */}
        <View style={styles.container}>
          <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={"arrow-back-ios"}
                size={24}
                color={COLORS.light.secondary}
              />
            </TouchableOpacity>
            {/* Skip button */}
            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.AUTH_CREATE_PIN_SCREEN, { authDetail: authDetail })}>
              <Text style={{ fontFamily: 'Lato-Regular', textDecorationLine: 'underline', color: COLORS.light.secondary }}>Skip</Text>
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>Email address</Text>

          <Text style={styles.formSubtitle}>Almost done! Please enter a valid email address that we can use to reach you</Text>
          <Input
            id="fullName"
            placeholder="Email address"
            placeholderTextColor=""
            errorText={errorText}
            keyboardType="email-address"
            autoCapitalize="sentences"
            returnKeyType="none"
            onSubmit={onSubmit}
            onInputChange={inputChangeHandler}
            initialValue=""
            touched={touchedAction}
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
            btnText={"Continue"}
            onClick={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthEmail;