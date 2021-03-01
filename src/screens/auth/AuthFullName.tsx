import React, { useCallback, useState } from "react";
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
          <View style={{ height: hp('3.36%') }} />
          <Input
            id="fullName"
            placeholder="Last name"
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


      </View>
    </ScrollView>
  );
};

AuthEmail.navigationOptions = () => {
  return {
    headerShown: false,
  };
};
