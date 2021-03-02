import React, { useCallback, useState, useEffect } from "react";
import { View, ScrollView, Text, Image, TouchableOpacity, StatusBar } from "react-native";
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
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import { heightPercentageToDP as hp, widthPercentageToDP } from "react-native-responsive-screen";
import { AuthDetail } from "../../models/AuthDetail";


type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_FULL_NAME_SCREEN>;
export default function AuthEmail({ navigation, route }: Props) {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primaryDisabled);
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [fNameErrorText, setFNameErrorText] = useState("");
  const [lNameErrorText, setLNameErrorText] = useState("");
  const [authDetail, setAuthDetail] = useState({} as AuthDetail);

  // set the navigation prop authDetail
  useEffect(() => {
    setAuthDetail(route.params.authDetail); //route.key, route.name, route.params,
  }, []);

  let fNameInputChangeHandler = useCallback((id, value, isValid) => {
    setFirstName(value)
    if (value.toString() != "" && lastName != "") {
      setBtnBgColor(COLORS.light.primary);
    } else {
      setBtnBgColor(COLORS.light.primaryDisabled);
    }
  }, []);

  let lNameInputChangeHandler = useCallback((id, value, isValid) => {
    setLastName(value.toString())

    if (value.toString() != "" && firstName != "") {
      setBtnBgColor(COLORS.light.primary);
    } else {
      setBtnBgColor(COLORS.light.primaryDisabled);
    }
  }, []);

  const onSubmit = () => {
    setFNameErrorText('')
    setLNameErrorText('')

    if (firstName == "") {
      setFNameErrorText("Enter your first name")
    } else if (lastName == "") {
      setFNameErrorText('Enter your last name')
    } else {
      authDetail.firstName = firstName;
      authDetail.lastName = lastName
      navigation.navigate(ROUTES.AUTH_EMAIL_SCREEN, { authDetail: authDetail })
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
      <View style={styles.wrapper}>

        <StatusBar backgroundColor={COLORS.light.white} />
        <View style={styles.overlayWrapper}>
          <Image source={IMAGES["top-overlay-white"]} style={styles.overlayImage} />
        </View>
        <View style={styles.container}>
          <View>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={"arrow-back-ios"}
                size={24}
                color={COLORS.light.secondary}
              />
            </TouchableOpacity>
          </View>

          <Text style={styles.formTitle}>Personal Info</Text>

          <Text style={styles.formSubtitle}>We would use this as the name for your SurePay account</Text>
          <Input
            id="fullName"
            placeholder="First name"
            placeholderTextColor=""
            errorText={fNameErrorText}
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="next"
            onInputChange={fNameInputChangeHandler}
            onSubmit={onSubmit}
            initialValue=""
            initiallyValid={false}
            required
            secureTextEntry={false}
            minLength={2}
            textContentType="none"
          />
          <View style={{ height: hp('3.36%') }} />
          <Input
            id="fullName"
            placeholder="Last name"
            placeholderTextColor=""
            errorText={lNameErrorText}
            keyboardType="default"
            autoCapitalize="sentences"
            returnKeyType="next"
            onInputChange={lNameInputChangeHandler}
            onSubmit={onSubmit}
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
            btnText={"Continue"}
            onClick={onSubmit}
          />

        </View>


      </View>
    </ScrollView>
  );
};
