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

const CELL_COUNT = 4;

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_CREATE_PIN_SCREEN>;

const AuthCreatePin = ({ navigation }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
  const [pinValue, setPinValue] = useState('');//PIN CODE
  const [pinValueConfirm, setPinValueConfirm] = useState('');//CONFIRM PIN
  //FOR FORM ERROR DISPLAY
  const [errorText, setErrorText] = useState('');

  //CHECKING IF USER'S FINGER PRINT AUTHENTICATION WAS SUCCESSFULL
  const [isFingerPrintCaptured, setIsFingerPrintCaptured] = useState(false)

  //CHECKING IF FINGER PRINT AUTHENTICATION WAS SETUP/ACTIVATED ON THE USER's DEVICE
  const [isFingerPrintActive, setIsFingerPrintActive] = useState(false)

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
      if (pinValue == pinValueConfirm) {
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

  const onSubmit = () => {
    // console.log(pinValue + "-----" + pinValueConfirm)
    if (pinValue === pinValueConfirm && pinValue != "") {
      navigation.navigate(ROUTES.AUTH_FINAL_LOADING_SCREEN);
    }
  }

  const scanFingerprint = async () => {
    await LocalAuthentication.authenticateAsync()
      .then(res => {
        if (res.success === true) {
          setIsFingerPrintCaptured(true);
        }
      })
  };

  const onSwitchChange = (val: boolean) => {
    if (isFingerPrintActive == false) {
      scanFingerprint()
    } else {
      setIsFingerPrintCaptured(false);
    }
  }

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

          <Text style={styles.formSubtitle}>{`Well, this is entirely up to you, you can either secure your account or not.`}</Text>

          <Text style={[styles.inputLabel]}>Enter Pin</Text>
          <PinInput cellCount={CELL_COUNT} onTextInputChange={pinInputChangeHandler} errorText={errorText} />

          <Text style={[styles.inputLabel]}>Confirm Pin</Text>
          <PinInput cellCount={CELL_COUNT} onTextInputChange={pinConfirmInputChangeHandler} errorText={errorText} />

          <View style={[{ display: isFingerPrintActive ? "flex" : "none" }, stylesSwitch.switchWrapper]}>
            <Switch
              value={isFingerPrintCaptured}
              onValueChange={onSwitchChange}
              disabled={false}
              activeText={'On'}
              inActiveText={'Off'}
              circleSize={30}
              barHeight={0}
              circleBorderWidth={0}
              backgroundActive={COLORS.light.blackLight}
              backgroundInactive={COLORS.light.lightGrey}
              circleActiveColor={COLORS.light.primary}
              circleInActiveColor={'#000000'}
              activeTextStyle={{ fontSize: 12, color: COLORS.light.primaryDisabled }}
              inactiveTextStyle={{ fontSize: 12, color: COLORS.light.blackLight }}
              changeValueImmediately={true} // if rendering inside circle, change state immediately or wait for animation to complete
              innerCircleStyle={{ alignItems: "center", justifyContent: "center" }} // style for inner animated circle for what you (may) be rendering inside the circle
              outerCircleStyle={{}} // style for outer animated circle
              renderActiveText={true}
              renderInActiveText={true}
              switchLeftPx={6} // denominator for logic when sliding to TRUE position. Higher number = more space from RIGHT of the circle to END of the slider
              switchRightPx={6} // denominator for logic when sliding to FALSE position. Higher number = more space from LEFT of the circle to BEGINNING of the slider
              switchWidthMultiplier={2} // multipled by the `circleSize` prop to calculate total width of the Switch
              switchBorderRadius={30} // Sets the border Radius of the switch slider. If unset, it remains the circleSize.
            />
            <Text style={stylesSwitch.label}>Enable fingerprint for authorization</Text>
          </View>

          <View style={{ flex: 1 }} />

          <CustomButton
            bgColor={btnBgColor}
            textColor={COLORS.light.white}
            btnText={"Finish"}
            onClick={onSubmit}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default AuthCreatePin;


const stylesSwitch = StyleSheet.create({
  switchWrapper: {
    marginTop: widthPercentageToDP('3.69%'),
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft: 8,
    flexWrap: 'wrap',
    flexShrink: 1,
  }
})