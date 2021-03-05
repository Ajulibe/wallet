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
import COLORS from "../../utils/Colors";
import { AuthService } from "../../services/AuthService";
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
        dispatch(loginUser({ phoneNo: '0812876546', pin: '1234' }));
        if (user.phoneNo != "") {
            console.log('User don login ooooooo!!!!!!!');

        }
    };


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
