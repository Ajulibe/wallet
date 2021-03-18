import React from "react";
import {
   View,
   StyleSheet,
   Text,
   TouchableOpacity,
   SafeAreaView,
   StatusBar
} from "react-native";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import CustomAppbar from "../../../../../components/CustomAppbar";
import globalStyles from "../../../../../components/css/GlobalCss";
import ListTile from "../../../../../components/ListTile";
import { StackScreenProps } from "@react-navigation/stack";
import { ProfileStackParamList } from "../../../../../navigation/ProfileStack";
import { ROUTES } from "../../../../../navigation/Routes";
import COLORS from "../../../../../utils/Colors";
import IMAGES from "../../../../../utils/Images";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const HomeScreen: React.FC<Props> = ({ navigation }: Props) => {
   return (
      <>
         <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.white }}>
            <StatusBar barStyle="light-content" />
            <CustomAppbar navigation={navigation} title="Security" />
            <View
               style={[globalStyles.container, globalStyles.centerHorizontal]}
            >
               <ListTile
                  leading={IMAGES["icon-password"]}
                  title="Change Pin"
                  subtitle="Change your transaction pin"
                  onClick={() => navigation.navigate(ROUTES.CHANGE_PIN_SCREEN)}
               />
               <ListTile
                  leading={IMAGES["icon-biometric"]}
                  title="Enable Biometric"
                  onClick={() =>
                     navigation.navigate(ROUTES.ENABLE_BIOMETRIC_SCREEN)
                  }
               />
            </View>
         </SafeAreaView>
      </>
   );
};

const styles = StyleSheet.create({
   securityContainer: {
      width: wp("50%"),
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      marginLeft: wp("2%")
   },
   securityText: {
      color: "rgba(77,105,151,1)",
      fontSize: wp("3.86%"),
      lineHeight: hp("2.89%"),
      fontFamily: "Inter-Regular"
   }
});

export default HomeScreen;
