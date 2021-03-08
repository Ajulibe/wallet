import React, { useState, useEffect, useCallback } from 'react';
import { Text, View, ScrollView, StyleSheet, StatusBar, TouchableOpacity, Image, } from 'react-native';
import { StackScreenProps } from "@react-navigation/stack";
import { AuthStackParamList } from "../../navigation/AuthStack";
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
import { BankPicker } from '../../components/BankPicker';
import AsyncStorage from '@react-native-async-storage/async-storage';

//redux wahala
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/RootReducer";
import { registerUser } from "../../store/actions/AuthActions";
import { UserInterface } from "../../store/types/AuthTypes";
import { CountryData } from '../../extra/CountryData';
import CircularProgress from '../../components/CircularProgress';
import { BankInterface } from '../../extra/BankData';

const CELL_COUNT = 4;

type Props = StackScreenProps<AuthStackParamList, ROUTES.AUTH_CREATE_PIN_SCREEN>;

const AuthSelectBank = ({ navigation, route }: Props) => {
    const [btnBgColor, setBtnBgColor] = useState(COLORS.light.disabled);
    const [authDetail, setAuthDetail] = useState(route.params.authDetail);
    const [bank, setBank] = useState({} as BankInterface);//USER'S BANK
    const [errorText, setErrorText] = useState('');

    //REDUCER DISPATCH
    const dispatch = useDispatch();
    const { user, error, loading, success } = useSelector(
        (state: RootState) => state.user
    );

    // on bank select callback 
    const onBankSelect = (newBank: BankInterface) => {
        setBank(newBank)
        setBtnBgColor(COLORS.light.primary)
        setErrorText('')
    }


    //submit/registring the user via redux store
    const onSubmit = () => {
        navigation.navigate(ROUTES.AUTH_FINAL_LOADING_SCREEN)

        // setErrorText('');
        // if (bank == null) {
        //     setErrorText('Select a bank')
        // } else if (bank.bankCode === undefined || Object.keys(bank).length === 0) {
        //     setErrorText('Select a bank')
        // } else {
        //     authDetail.phoneNo = CountryData.nigPhoneFormat(authDetail.phoneNo!)
        //     //dispatching to the user
        //     dispatch(registerUser({ authDetail: authDetail }));
        // }
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
        // <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps='handled' >
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
                            color={COLORS.light.blackLight}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.formTitleWrapper}>
                    <Text style={styles.formTitle}>{"Choose a \nBank"}</Text>
                    <CircularProgress icon={"phone"} progress={92} size={70} />
                </View>

                <Text style={styles.formSubtitle}>{`We partner with banks to make sure your funds are safe and secure`}</Text>

                <BankPicker onBankChange={onBankSelect} current={bank} />

                <Text style={{ color: COLORS.light.red, display: error ? 'flex' : 'none' }}>
                    {(errorText != "" ? errorText : error)}
                </Text>

                <CustomButton
                    bgColor={loading ? COLORS.light.disabled : btnBgColor}
                    textColor={COLORS.light.white}
                    isLoading={loading ? true : false}
                    btnText={"Continue"}
                    onClick={onSubmit}
                />
            </View>
        </View>
        // </ScrollView>
    );
};

export default AuthSelectBank;