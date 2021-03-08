import React, { useEffect } from "react";
import {
    View,
    StyleSheet,
    Image,
    Text,
    ScrollView,
    ImageSourcePropType,
    StatusBar,
    TouchableOpacity
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { AuthStackParamList } from "../../navigation/AuthStack";
import { ROUTES } from "../../navigation/Routes";
import CustomButton from "../../components/Button";
import COLORS from "../../utils/Colors";
import IMAGES from "../../utils/Images";


type Props = StackScreenProps<
    AuthStackParamList,
    ROUTES.AUTH_GET_STARTED_SCREEN>;

class AuthValueProposition extends React.PureComponent<Props> {
    // Define your state for your component.
    constructor(props: Props) {
        super(props);
        this.state = {};
    }

    render() {
        // Destruct navigation from props
        const { navigation } = this.props;

        return (
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={styles.wrapper}>

                    <StatusBar backgroundColor={COLORS.light.secondary} barStyle={'light-content'} />
                    <View style={styles.overlayWrapper}>
                        <Image source={IMAGES["top-overlay-dark2"]} style={styles.overlayImage} />
                    </View>

                    <View style={styles.container}>
                        <View style={{ alignItems: "center" }}>
                            <Image
                                source={IMAGES["logo"]}
                                style={{ height: wp('28%'), width: wp('28%'), marginBottom: hp('9.35%') }}
                            />
                        </View>

                        <RowItem
                            imgSrc={IMAGES.clock}
                            text={<Text style={styles.rowItemText}><Text style={styles.rowItemBold}>Setup an account</Text> quick and easy in <Text style={styles.rowItemBold}>less than 30 seconds</Text></Text>}
                        />
                        <RowItem
                            imgSrc={IMAGES.phone}
                            text={<Text style={styles.rowItemText}><Text style={styles.rowItemBold}>Send &amp; receive money </Text>easily using your phone number</Text>}
                        />
                        <RowItem
                            imgSrc={IMAGES.chat}
                            text={<Text style={styles.rowItemText}><Text style={styles.rowItemBold}>Experience payments</Text> as simple and fast as <Text style={styles.rowItemBold}>sending chats</Text></Text>}
                        />
                        <RowItem
                            imgSrc={IMAGES.share}
                            text={<Text style={styles.rowItemText}><Text style={styles.rowItemBold}>Transfer to</Text> your friends for free</Text>}
                        />

                        <CustomButton
                            bgColor={COLORS.light.primary}
                            textColor={COLORS.light.white}
                            btnText={"Continue"}
                            onClick={() => navigation.navigate(ROUTES.AUTH_GET_STARTED_SCREEN)}
                        />

                        <View
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                marginTop: 20,
                                justifyContent: "center"
                            }}
                        >
                            <Text>Already have an account? </Text>
                            <TouchableOpacity onPress={() => navigation.navigate(ROUTES.AUTH_LOGIN)}>
                                <Text style={{ fontFamily: "Inter-Medium" }}>
                                    Login
                        </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                </View>
            </ScrollView>
        );
    }
}

function RowItem({
    imgSrc,
    text,
}: {
    imgSrc: ImageSourcePropType;
    text: JSX.Element;
}) {
    return (
        <View style={styles.rowItem}>
            {/* <Image source={imgSrc} style={styles.icon} /> */}
            {text}
        </View>
    );
}

export default AuthValueProposition;

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
        flex: 1,
        backgroundColor: COLORS.light.white,
    },
    overlayWrapper: {
        height: hp('29.67%'),
        width: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
    },
    overlayImage: {
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    container: {
        flex: 1,
        height: hp("100%"),
        width: '100%',
        paddingHorizontal: wp("8%"),
        paddingVertical: hp("8%"),
        // paddingTop: Platform.OS ? hp('4%') : hp('8%')
    },

    rowItem: {
        width: "100%",
        alignItems: "center",
        alignSelf: 'center',
        flexDirection: "row",
        marginBottom: hp('4.06%'),
        flexWrap: 'wrap'
    },
    icon: {
        resizeMode: "contain",
        width: wp("8.59%"),
        height: wp("8.59%"),
    },
    rowItemText: {
        color: COLORS.light.black,
        fontFamily: "Inter-Regular",
        fontSize: wp('4.26%'),
        lineHeight: hp('2.9%'),
        marginLeft: wp('8% '),
        flex: 1,
    },
    rowItemBold: {
        color: COLORS.light.secondary,
        fontFamily: "Inter-Bold",
    }
});