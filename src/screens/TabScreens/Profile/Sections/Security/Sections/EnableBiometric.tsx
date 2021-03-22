import { StackScreenProps } from "@react-navigation/stack";
import React, { useState } from "react";
import { SafeAreaView, StatusBar, View, Switch } from "react-native";
import globalStyles from "../../../../../../components/css/GlobalCss";
import CustomAppbar from "../../../../../../components/CustomAppbar";
import ListTile from "../../../../../../components/ListTile";
import { ProfileStackParamList } from "../../../../../../navigation/ProfileStack";
import { ROUTES } from "../../../../../../navigation/Routes";
import COLORS from "../../../../../../utils/Colors";
import IMAGES from "../../../../../../utils/Images";

type Props = StackScreenProps<ProfileStackParamList, ROUTES.PROFILE_SCREEN>;

const EnableBiometricScreen: React.FC<Props> = ({ navigation }) => {
   const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);

   const onSwitchToggle = () => {
      setIsBiometricEnabled(!isBiometricEnabled);
   };

   return (
      <>
         <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.light.white }}>
            {/* <StatusBar barStyle="light-content" /> */}
            <CustomAppbar navigation={navigation} title="" />
            <View
               style={[globalStyles.container, globalStyles.centerHorizontal]}
            >
               <ListTile
                  leading={IMAGES["icon-biometric"]}
                  title="Enable Biometric"
                  onClick={() => null}
                  trailing={
                     <Switch
                        trackColor={{ false: "#F2F6F8", true: "#F2F6F8" }}
                        thumbColor={
                           isBiometricEnabled ? COLORS.light.primary : "#fafafa"
                        }
                        ios_backgroundColor="#F2F6F8"
                        onValueChange={onSwitchToggle}
                        value={isBiometricEnabled}
                     />
                  }
               />
            </View>
         </SafeAreaView>
      </>
   );
};

export default EnableBiometricScreen;
