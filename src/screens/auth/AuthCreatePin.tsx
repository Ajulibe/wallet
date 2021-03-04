import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { Switch } from 'react-native-switch';
import PinInput from '../../components/InputPin';
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import { ROUTES } from "../../navigation/Routes";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import IMAGES from "../../utils/Images";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from '../../utils/Utilities'
import * as LocalAuthentication from 'expo-local-authentication';
import { widthPercentageToDP } from 'react-native-responsive-screen';
import { CheckBox } from 'react-native-elements';
import { STORAGE_KEYS } from '../../utils/StorageKeys';
import { AuthDetail } from '../../models/AuthDetail';
import AsyncStorage from '@react-native-async-storage/async-storage';

//redux wahala
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/RootReducer";
import { registerUser } from "../../store/actions/AuthActions";
import { UserInterface } from "../../store/types/AuthTypes";
import { CountryData } from '../../extra/CountryData';

const CELL_COUNT = 4;

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_CREATE_PIN_SCREEN>;

const AuthCreatePin = ({ navigation, route }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
  const [authDetail, setAuthDetail] = useState(route.params.authDetail);
  const [pinValue, setPinValue] = useState('');//PIN CODE
  const [pinValueConfirm, setPinValueConfirm] = useState('');//CONFIRM PIN
  //FOR FORM ERROR DISPLAY
  const [errorText, setErrorText] = useState('');

  //CHECKING IF USER'S FINGER PRINT AUTHENTICATION WAS SUCCESSFULL
  const [isFingerPrintCaptured, setIsFingerPrintCaptured] = useState(false)

  //CHECKING IF FINGER PRINT AUTHENTICATION WAS SETUP/ACTIVATED ON THE USER's DEVICE
  const [isFingerPrintActive, setIsFingerPrintActive] = useState(false)

  //REDUCER DISPATCH
  const dispatch = useDispatch();
  const { user, error, loading, success } = useSelector(
    (state: RootState) => state.user
  );



  //PIN CODE INPUT LISTENER
  let pinInputChangeHandler = useCallback((value) => {
    setPinValue(value);
  }, []);
  //PIN CODE CONFIRM INPUT LISTENER
  let pinConfirmInputChangeHandler = useCallback((value) => {
    setPinValueConfirm(value);
  }, []);
  //finger print check
  useEffect(() => {
    UTILITIES.checkDeviceForHardware().then(hardwareResponse => {
      if (hardwareResponse === true) {
        UTILITIES.checkForFingerprints().then(isFingerPrintSetup => {
          if (isFingerPrintSetup !== false)
            setIsFingerPrintActive(true)
        })
      }
    });
    return () => { }
  }, [])

  //pin code setup check
  useEffect(() => {
    if (pinValue.length == CELL_COUNT && pinValueConfirm.length == CELL_COUNT) {
      if (pinValue === pinValueConfirm) {
        setBtnBgColor(COLORS.light.primary)
      } else {
        setErrorText("Pin mismatch")
        setBtnBgColor(COLORS.light.primaryDisabled)
      }
    } else {
      setErrorText('')
      setBtnBgColor(COLORS.light.primaryDisabled)
    }
  }, [pinValue, pinValueConfirm])


  const scanFingerprint = async () => {
    await LocalAuthentication.authenticateAsync()
      .then(res => {
        if (res.success === true) {
          setIsFingerPrintCaptured(true);
        }
      })
  };

  const onSwitchChange = () => {
    if (isFingerPrintActive == false) {
      scanFingerprint()
    } else {
      setIsFingerPrintCaptured(false);
    }
  }
  //submit/registring the user via redux store
  const onSubmit = () => {
    setErrorText('');
    if (pinValue == "" || pinValueConfirm == "") {
      setErrorText('Enter your pin')
    } else if (pinValueConfirm == "") {
      setErrorText('Enter your pin')
    } else if (pinValueConfirm != pinValueConfirm) {
      setErrorText('Pin mismatch')
    } else if (pinValue === pinValueConfirm && pinValue != "") {
      authDetail.userPin = pinValue
      authDetail.phoneNo = CountryData.nigPhoneFormat(authDetail.phoneNo!)
      //dispatching to the user
      dispatch(registerUser({ authDetail: authDetail }));
    } else {
      setErrorText('Enter your pin')
    }
  }

  useEffect(() => {
    if (success) {
      if (user.phoneNumber != "") {
        AsyncStorage.setItem(STORAGE_KEYS.PHONE_NUMBER, user.phoneNumber);
        AsyncStorage.setItem(STORAGE_KEYS.UUID, String(user.uuid));
        // navigate the next screen 
        navigation.navigate(ROUTES.AUTH_FINAL_LOADING_SCREEN)
      }
    }
  })

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
      <View style={styles.wrapper}>
        {/* redirect user  */}

        <StatusBar backgroundColor={COLORS.light.white} />
        {/* overlay bg image */}
        <View style={styles.overlayWrapper}>
          <Image source={IMAGES["top-overlay-white"]} style={styles.overlayImage} />
        </View>
        {/* top menu  */}
        <View style={styles.container}>
          <View style={{ flexDirection: 'row' }}>
            {/* Back Button */}
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <MaterialIcons
                name={"arrow-back-ios"}
                size={24}
                color={COLORS.light.secondary}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.formTitle}>{`Create Pin`}</Text>

          <Text style={styles.formSubtitle}>{`Finally, Enter a 4-digit pin that you would use to login to your account`}</Text>

          <Text style={[styles.inputLabel, { textAlign: 'left' }]}>Enter Pin</Text>
          <PinInput cellCount={CELL_COUNT} onTextInputChange={pinInputChangeHandler} errorText={errorText} />

          <Text style={[styles.inputLabel, { textAlign: 'left' }]}>Confirm Pin</Text>
          <PinInput cellCount={CELL_COUNT} onTextInputChange={pinConfirmInputChangeHandler} errorText={errorText} />

          <Text style={{ color: COLORS.light.red, display: error ? 'flex' : 'none' }}>
            {error}
          </Text>


          <CheckBox
            checked={isFingerPrintCaptured}
            checkedColor={COLORS.light.secondary}
            size={24}
            containerStyle={{ marginHorizontal: 0, padding: 0, backgroundColor: 'transparent', borderWidth: 0, display: isFingerPrintActive ? "flex" : "none" }}
            checkedTitle="Biometric enabled"
            title="Enable Biometric authentication"
            titleProps={{ style: { fontFamily: 'Lato-Regular', color: isFingerPrintCaptured ? COLORS.light.secondary : COLORS.light.blackLight } }}
            onPress={() => onSwitchChange()}
          />

          <View style={{ flex: 1 }} />

          <CustomButton
            bgColor={loading ? COLORS.light.primaryDisabled : btnBgColor}
            textColor={COLORS.light.white}
            isLoading={loading ? true : false}
            btnText={"Finish"}
            onClick={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthCreatePin;