import React, { useState, useEffect, useCallback } from 'react';
import { Modal, Text, Button, View, ScrollView, StyleSheet, Alert, AlertButton } from 'react-native';
import { Switch } from 'react-native-switch';
import PinInput from '../../components/InputPin';
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import CircularProgress from "../../components/CircularProgress";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from '../../utils/Utilities'
import * as LocalAuthentication from 'expo-local-authentication';

const CELL_COUNT = 4;

const AuthCreatePin = () => {
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
    console.log(pinValue + "-----" + pinValueConfirm)
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
    if(isFingerPrintActive){
      scanFingerprint()
    }
  }

  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <View style={styles.container}>
        <CircularProgress icon="lock" progress={98} iconType={"SimpleLineIcons"} />

        <Text style={styles.formTitle}>{`We will use this to secure and protect your account`}</Text>

        <Text style={styles.inputLabel}>Pin</Text>
        <PinInput cellCount={CELL_COUNT} onTextInputChange={pinInputChangeHandler} errorText={errorText} />

        <Text style={styles.inputLabel}>Confirm Pin</Text>
        <PinInput cellCount={CELL_COUNT} onTextInputChange={pinConfirmInputChangeHandler} errorText={errorText} />


        <View style={[{display:isFingerPrintActive?"flex":"none"},stylesSwitch.switchWrapper]}>
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
            // containerStyle={{borderColor: COLORS.light.primary, }}
            // renderInsideCircle={() => <CustomComponent />} // custom component to render inside the Switch circle (Text, Image, etc.)
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
    </ScrollView>
  );
};

export default AuthCreatePin;


const stylesSwitch = StyleSheet.create({
  switchWrapper: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  label: {
    marginLeft: 8,
    flexWrap: 'wrap',
    flexShrink: 1,
  }
})