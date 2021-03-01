import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageSourcePropType,
  StatusBar
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

class AuthGetStarted extends React.PureComponent<Props> {
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
            <View style={{ flex: 1 }} />

            <RowItem
              imgSrc={IMAGES.phone}
              text={<Text style={styles.rowItemText}> <Text style={styles.rowItemBold}>Send &amp; receive money </Text>easily using your phone number</Text>}
            />
            <RowItem
              imgSrc={IMAGES.chat}
              text={<Text style={styles.rowItemText}>Experience payments as <Text style={styles.rowItemBold}>simple and fast</Text> as sending chats</Text>}
            />
            <RowItem
              imgSrc={IMAGES.clock}
              text={<Text style={styles.rowItemText}>Setup an account quick and easy in <Text style={styles.rowItemBold}>less than 30 seconds</Text></Text>}
            />
            <RowItem
              imgSrc={IMAGES.share}
              text={<Text style={styles.rowItemText}><Text style={styles.rowItemBold}>Transfer to</Text> your friends for free</Text>}
            />

            <CustomButton
              bgColor={COLORS.light.primary}
              textColor={COLORS.light.white}
              btnText={"Get Started"}
              onClick={() => navigation.navigate(ROUTES.AUTH_PHONE_NO_SCREEN)}
            />
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
      <Image source={imgSrc} style={styles.icon} />
      {text}
    </View>
  );
}

export default AuthGetStarted;

const styles = StyleSheet.create({
  wrapper: {
    position: 'relative',
    flex: 1,
    backgroundColor: COLORS.light.secondary,
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
    marginBottom: hp('6.7%'),
    flexWrap: 'wrap'
  },
  icon: {
    resizeMode: "contain",
    width: wp("8.59%"),
    height: wp("8.59%"),
  },
  rowItemText: {
    color: COLORS.light.white,
    fontFamily: "Lato-Bold",
    fontSize: wp('4.26%'),
    lineHeight: hp('2.9%'),
    marginLeft: wp('8% '),
    flex: 1,
  },
  rowItemBold: {
    color: '#B3CFFA'
  }
});
