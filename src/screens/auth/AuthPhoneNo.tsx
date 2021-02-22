import React, { useCallback, useState, useEffect } from "react";
import { View, Text, ScrollView, Modal } from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import Input from "../../components/Input";
import CircularProgress from "../../components/CircularProgress";
import INPUT_VALIDATION, { INPUT_TYPES } from "../../utils/InputValidation";
import ProgressLoader from "../../components/ProgressLoader";
import styles from "../../components/css/AuthFormCss";
import IMAGES from '../../utils/Images'


import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../../store/reducers/RootReducer';
import { loginUser, registerUser } from '../../store/actions/AuthActions';
import { UserInterface } from '../../store/types/AuthTypes';


type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_PHONE_NO_SCREEN>;

const AuthPhoneNo = ({ navigation }: Props) => {
  const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primary);
  const [phoneNumber, setPhoneNumber] = useState('')
  const [inputFocused, setInputFocused] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  const dispatch = useDispatch();
  const { user } = useSelector((state: RootState) => state.user)


  function regUser() {
    dispatch(registerUser())
  }

  function logUser() {
    dispatch(loginUser({ phoneNo: "dfdf", pin: "dfdf" }))
  }

  useEffect(() => {
    regUser()
    logUser()
  }, [])



  const submit = (id: string, x?: string | null, y?: boolean) => {
    if (phoneNumber.length < 11) {
      console.log("Error oooo!!!");
    } else {
      navigation.navigate(ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN);
    }
  };

  let inputChangeHandler = useCallback((id, value, isValid) => {
    setPhoneNumber(value.toString())
  }, []);


  let submitHandler = useCallback((id, value, isValid) => {
    submit(id, value, isValid);
    // console.log(`${id} : ${value} - ${isValid}`)
  }, []);


  const onSubmit = () => {
    // setIsLoading(true)
    if (phoneNumber == "") {
      setInputFocused(true);
    } else {
      setInputFocused(false);

      submit('id', phoneNumber,);
    }
  };

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.container}>
        <StatusBar backgroundColor={COLORS.light.white} />

        <CircularProgress icon="screen-smartphone" progress={20} iconType={"SimpleLineIcons"} />

        <Text style={styles.formTitle}>{`In Surepay, your phone number is your account number`} {JSON.stringify(user)}</Text>

        <Text style={styles.inputLabel}>Phone No</Text>
        <Input
          id={INPUT_TYPES.PHONE}
          placeholder="0803 926 8250"
          errorText="Enter a valid Phone Number"
          keyboardType="number-pad"
          autoCapitalize="sentences"
          returnKeyType="next"
          onInputChange={inputChangeHandler}
          onSubmit={submitHandler}
          initialValue=""
          initiallyValid={false}
          touched={inputFocused}
          required
          secureTextEntry={false}
          minLength={11}
          textContentType="telephoneNumber"
        />

        <View style={{ flex: 1 }} />
        <CustomButton
          bgColor={btnBgColor}
          textColor={COLORS.light.white}
          btnText={"Next"}
          onClick={onSubmit}
        />


        <Modal
          visible={isLoading}
          transparent={true}
          animationType={'fade'}
          onRequestClose={() => setIsLoading(false)}
        >
          <ProgressLoader isLoading={true} imgSrc={IMAGES.loading} />
        </Modal>
      </View>
    </ScrollView>
  );
};

export default AuthPhoneNo;
