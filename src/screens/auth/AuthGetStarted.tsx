import React, { useEffect } from "react";
import {
  View,
  StyleSheet,
  Image,
  Text,
  ScrollView,
  ImageSourcePropType,
  Platform,
} from "react-native";
import { StackScreenProps } from "@react-navigation/stack";
import { StatusBar } from "expo-status-bar";
import Icon from "react-native-vector-icons/FontAwesome";
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
  ROUTES.AUTH_GET_STARTED_SCREEN
>;

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
        <View style={styles.container}>
          <View style={{ flex: 1 }} />

          <RowItem
            imgSrc={IMAGES.chat}
            text={<Text style={styles.rowItemText}>Experience payments as <Text style={styles.rowItemBold}>simple and fast</Text> as sending chats</Text>}
          />
          <RowItem
            imgSrc={IMAGES.share}
            text={<Text style={styles.rowItemText}><Text style={styles.rowItemBold}>Transfer to</Text> your friends for free</Text>}
          />
          <RowItem
            imgSrc={IMAGES.clock}
            text={<Text style={styles.rowItemText}>Setup an account quick and easy in <Text style={styles.rowItemBold}>less than 30 seconds</Text></Text>}
          />
          <RowItem
            imgSrc={IMAGES.phone}
            text={<Text style={styles.rowItemText}> <Text style={styles.rowItemBold}>Send &amp; receive money </Text>easily using your phone number</Text>}
          />

          <View style={{ flex: 1 }} />
          <CustomButton
            bgColor={COLORS.light.primary}
            textColor={COLORS.light.white}
            btnText={"Get Started"}
            onClick={() => navigation.navigate(ROUTES.AUTH_PHONE_NO_SCREEN)}
          />
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
      {/* <Text style={styles.rowItemText}>{text} </Text> */}
      {text}
    </View>
  );
}

export default AuthGetStarted;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.light.white,
    paddingHorizontal: wp("8%"),
    paddingVertical: hp("8%"),
    paddingTop : Platform.OS? hp('4%') : hp('8%')
  },

  rowItem: {
    width: "100%",
    alignItems: "center",
    flexDirection: "column",
    paddingHorizontal: 24
  },
  icon: {
    resizeMode: "contain",
    width: 48,
    height: 48,
    marginVertical: 16
  },
  rowItemText: {
    fontSize: 16,
    // fontWeight: "700",
    color: COLORS.light.black,
    textAlign: 'center',
  },
  rowItemBold: {
    fontWeight: '700'
  }
});
