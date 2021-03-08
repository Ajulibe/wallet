import React, { useCallback, useState, useEffect } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    ScrollView,
    StatusBar,
    Image,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import OtpCodeInput from "../../components/OtpCodeInput";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import IMAGES from "../../utils/Images";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import styles from "../../components/css/AuthFormCss";
import UTILITIES from "../../utils/Utilities";
import CryptoJS from 'crypto-js'
import COLORS from "../../utils/Colors";
import aesjs from "aes-js";
import bcrypt from "bcrypt";
import { AuthDetail } from "../../models/AuthDetail";
import { CountryData } from "../../extra/CountryData";

//redux wahala
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../../store/reducers/RootReducer";
import { loginUser } from "../../store/actions/AuthActions";
import { UserInterface } from "../../store/types/AuthTypes";

type Props = StackScreenProps<
    AuthStackParamList,
    ROUTES.AUTH_PHONE_NO_VERIFY_SCREEN
>;

const CELL_COUNT = 4;
const AuthLogin = ({ navigation }: Props) => {
    const [btnBgColor, setBtnBgColor] = useState(COLORS.light.primaryDisabled);
    const [isLoading, setIsLoading] = useState(false);
    const [otpCode, setPinCode] = useState("");
    const [errorText, setErrorText] = useState("");

    //OTP CODE INPUT TEXT CHANGE LISTENER
    let otpInputChangeHandler = useCallback((value) => {
        setBtnBgColor(COLORS.light.primaryDisabled);

        const otp = value.toString();
        setPinCode(value);
        if (otp.length != 5) {
            setBtnBgColor(COLORS.light.primaryDisabled);
        } else {
            setErrorText("");
            setBtnBgColor(COLORS.light.primary);
        }
    }, []);

    //REDUCER DISPATCH
    const dispatch = useDispatch();
    const { user, error, loading } = useSelector(
        (state: RootState) => state.user
    );

    // on submit click handler
    let onSubmit = () => {
        if (otpCode == "") {
            setErrorText("Enter your pin");
        } else if (otpCode.length != CELL_COUNT) {
            setErrorText(`Enter ${CELL_COUNT} digit pin to proceed`);
        } else {
            login();
        }
    };

    //otp submit handler
    const login = () => {
        setIsLoading(true);
        //dispatching to the user
        dispatch(loginUser({ PhoneNumber: '08066184545', pin: '1111' }));
        if (user.phoneNumber != "") {
            console.log('User don login ooooooo!!!!!!!');
        }
    };

    useEffect(() => {
        // encrypt_decrypt3()
    })

    const encrypt_decrypt1 = () => {
        // An example 128-bit key
        var key = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16];

        // The initialization vector (must be 16 bytes)
        var iv = [21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36];

        // Convert text to bytes (text must be a multiple of 16 bytes)
        var text = 'TextMustBe16Byte';
        var textBytes = aesjs.utils.utf8.toBytes(text);

        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var encryptedBytes = aesCbc.encrypt(textBytes);

        // To print or store the binary data, you may convert it to hex
        var encryptedHex = aesjs.utils.hex.fromBytes(encryptedBytes);
        console.log(encryptedHex);
        // "104fb073f9a131f2cab49184bb864ca2"

        // When ready to decrypt the hex string, convert it back to bytes
        var encryptedBytes = aesjs.utils.hex.toBytes(encryptedHex);

        // The cipher-block chaining mode of operation maintains internal
        // state, so to decrypt a new instance must be instantiated.
        var aesCbc = new aesjs.ModeOfOperation.cbc(key, iv);
        var decryptedBytes = aesCbc.decrypt(encryptedBytes);

        // Convert our bytes back into text
        var decryptedText = aesjs.utils.utf8.fromBytes(decryptedBytes);
        console.log(decryptedText);
        // "TextMustBe16Byte"
    }

    const encrypt_decrypt2 = () => {
        var encrypted = CryptoJS.AES.encrypt("Message", "Secret Passphrase");
        //U2FsdGVkX18ZUVvShFSES21qHsQEqZXMxQ9zgHy+bu0=

        var decrypted = CryptoJS.AES.decrypt(encrypted, "Secret Passphrase");
        //4d657373616765
    }
    const encrypt_decrypt3 = () => {

    }
    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <View style={styles.wrapper}>
                <StatusBar backgroundColor={COLORS.light.white} />
                <View style={styles.overlayWrapper}>
                    <Image
                        source={IMAGES["top-overlay-white"]}
                        style={styles.overlayImage}
                    />
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

                    <Text style={styles.formTitle}>Welcome back, Ray!</Text>
                    <Text style={styles.formSubtitle}>
                        Enter your pin to continue or use your fingerprint.
                        {/* {JSON.stringify(user)}=={JSON.stringify(loading)}=={JSON.stringify(error)} */}
                    </Text>

                    {/* custom otp plugin   */}
                    <OtpCodeInput
                        cellCount={CELL_COUNT}
                        onTextInputChange={otpInputChangeHandler}
                        pinVisible={true}
                        errorText={errorText}
                    />

                    <View style={{ flex: 1 }} />
                    {/* continue btn  */}
                    <CustomButton
                        bgColor={isLoading ? COLORS.light.primaryDisabled : btnBgColor}
                        textColor={COLORS.light.white}
                        btnText={"Continue"}
                        isLoading={isLoading}
                        onClick={() => onSubmit()}
                    />
                </View>
            </View>
        </ScrollView>
    );
};

export default AuthLogin;
