import React, { useCallback, useState, useEffect } from "react";
import {
  View,
  Text,
  ScrollView,
  Image,
  TextInput,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import styles from "../../components/css/AuthFormCss";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import libphonenumber from "google-libphonenumber";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IMAGES from "../../utils/Images";
import { CountryPicker } from "../../components/CountryPicker";
import Animated from 'react-native-reanimated';
import { CountryData } from '../../extra/CountryData'

//redux wahala
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/RootReducer";
import { loginUser, registerUser } from "../../store/actions/AuthActions";
import { UserInterface } from "../../store/types/AuthTypes";
// api service 
import { AuthService } from "../../services/AuthService";
import { AuthDetail } from '../../models/AuthDetail'

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_PHONE_NO_SCREEN>;

const AuthPhoneNo = ({ navigation }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primaryDisabled);
  const [phoneNumber, setPhoneNumber] = useState("");
  const [errorText, setErrorText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [openCountry, setOpenCountry] = useState(false);
  const [country, setCountry] = useState(CountryData.africaCountries[0]);


  //reducer dispath starts
  const dispatch = useDispatch();
  const { user, error, loading } = useSelector(
    (state: RootState) => state.user
  );

  function regUser() {
    dispatch(registerUser());
  }

  function logUser() {
    dispatch(loginUser({ phoneNo: "dfdf", pin: "dfdf" }));
  }

  useEffect(() => {
    regUser();
    // logUser()
  }, []);
  //reducer dispath ends

  //on input text change handler
  let inputChangeHandler = (value: string) => {
    setPhoneNumber(value.toString());
    if (value.toString().length < 10) {
      setBtnBgColor(COLORS.light.primaryDisabled);
    } else {
      setBtnBgColor(COLORS.light.primary);
    }
  };

  //submit handler
  const onSubmit = () => {
    let phone = country.dial_code + parseInt(phoneNumber);

    const phoneNumberUtil = libphonenumber.PhoneNumberUtil.getInstance();
    const number = phoneNumberUtil.parseAndKeepRawInput(phone, country.code); //with/or without leading zero

    if (!phoneNumberUtil.isValidNumber(number)) {
      setErrorText('Enter a valid phone number');
    } else {
      setErrorText('');

      submit(phone);
    }
  };
  //otp submit handler
  const submit = (phone: string) => {
    setIsLoading(true)
    let nigPhone = CountryData.nigPhoneFormat(phone!);
    AuthService.sendOtp({ phoneNo: nigPhone }).then((response) => {//'nigPhone' to be replaced with 'phone'
      setIsLoading(false)

      if (Boolean(response.success) === true) {
        let authDetail = new AuthDetail();
        authDetail.phoneNo = phone;
        authDetail.verifyId = response.additionalParam;
        navigation.navigate(ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN, {
          authDetail: authDetail,
        });
      } else {
        setErrorText(response.message!)
      }
    });
  };

  return (
    // <ScrollView
    //   contentContainerStyle={{ flexGrow: 1 }}
    //   keyboardShouldPersistTaps="handled"
    // >
    <View style={styles.wrapper}>
      {/* country picker bottom sheet  */}
      <CountryPicker
        initialSnap={openCountry ? 0 : 1}
        onClose={() => setOpenCountry(false)}
        current={country}
        onCountryChange={(newCountry) => setCountry(newCountry)}
      />

      <StatusBar backgroundColor={COLORS.light.white} />
      {/* bg image  */}
      <View style={styles.overlayWrapper}>
        <Image
          source={IMAGES["top-overlay-white"]}
          style={styles.overlayImage}
        />
      </View>

      {/* container view  */}
      <Animated.View style={[styles.container, {
        opacity: Animated.add(0.5, Animated.multiply(!openCountry ? 1 : 0, 1.0)),
      }]} >
        <View>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <MaterialIcons
              name={"arrow-back-ios"}
              size={24}
              color={COLORS.light.secondary}
            />
          </TouchableOpacity>
        </View>

        <Text style={styles.formTitle}>{`Get Started`} </Text>

        <Text style={styles.formSubtitle}>
          {`Your number is your account number on Surepay`}{" "}
        </Text>

        <View
          style={[
            inputStyles.formControl,
            {
              backgroundColor:
                errorText != ""
                  ? COLORS.light.inputBgError
                  : COLORS.light.inputBg,
              borderColor:
                errorText != "" ? COLORS.light.red : COLORS.light.inputBorder,
            },
          ]}
        >
          <TouchableOpacity onPress={() => setOpenCountry(true)}>
            <View style={inputStyles.countryCodeWrapper}>
              <Text
                style={{
                  fontSize: wp("4.26%"),
                  fontFamily: "Lato-Regular",
                  color: COLORS.light.inputText,
                }}
              >
                {country.dial_code}
              </Text>
              <MaterialIcons
                name={"keyboard-arrow-down"}
                size={24}
                color={COLORS.light.inputText}
              />
            </View>
          </TouchableOpacity>

          <TextInput
            placeholder="803 926 8250"
            keyboardType="number-pad"
            autoCapitalize="sentences"
            returnKeyType="next"
            autoCorrect={false}
            onChangeText={inputChangeHandler}
            onSubmitEditing={() => onSubmit()}
            maxLength={11}
            textContentType="telephoneNumber"
            style={[
              ,
              {
                color:
                  errorText != ""
                    ? COLORS.light.inputTextError
                    : COLORS.light.inputText,
              },
              inputStyles.input,
            ]}
          />
        </View>

        {errorText != "" && (
          <View style={inputStyles.errorContainer}>
            <Text style={inputStyles.errorText}>{errorText}</Text>
          </View>
        )}
        <Text style={styles.inputLabel}>
          Already have an account?{" "}
          <Text style={{ fontFamily: "Lato-Bold" }}>Login</Text>
        </Text>

        <View style={{ flex: 1 }} />
        <CustomButton
          bgColor={isLoading ? COLORS.light.primaryDisabled : btnBgColor}
          textColor={COLORS.light.white}
          btnText={"Continue"}
          onClick={() => onSubmit()}
          isLoading={isLoading}
        />

      </Animated.View>
    </View>
    // </ScrollView>
  );
};

export default AuthPhoneNo;

const inputStyles = StyleSheet.create({
  formControl: {
    width: "100%",
    borderWidth: 0.2,
    borderRadius: 4,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLORS.light.inputBg,
    borderColor: COLORS.light.inputBorder,
  },
  countryCodeWrapper: {
    flexDirection: "row",
    alignItems: "center",
    borderRightColor: "rgba(0,63,136,0.1)",
    borderRightWidth: 1,
    paddingHorizontal: wp("5.6%"),
    paddingVertical: hp("1.47%"),
  },
  input: {
    flex: 1,
    fontSize: wp("4.26%"),
    fontFamily: "Lato-Regular",
    paddingHorizontal: wp("5.6%"),
    paddingVertical: hp("1.47%"),
    color: COLORS.light.inputText,
  },
  errorContainer: {
    marginVertical: 0,
  },
  errorText: {
    marginTop: hp("1%"),
    fontFamily: "Lato-Regular",
    color: COLORS.light.red,
    fontSize: wp("3.5%"),
  },
});
