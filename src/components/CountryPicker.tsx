import React, { useEffect, useState } from "react";
import {
   View,
   Text,
   TouchableOpacity,
   FlatList,
   TextInput,
   StyleSheet,
   Platform,
   ImageBackground
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import { CountryData, CountryInterface } from "../extra/CountryData";
import COLORS from "../utils/Colors";
import {
   widthPercentageToDP as wp,
   heightPercentageToDP as hp
} from "react-native-responsive-screen";
import { ListItem, BottomSheet } from "react-native-elements";

interface Props {
   isVisible: boolean;
   onClose: () => void;
   current: CountryInterface;
   onCountryChange: (country: CountryInterface) => void;
}

export function CountryPicker(props: Props) {
   // const [countries, setCountries] = useState(CountryData.allCountries);
   const [countries, setCountries] = useState(CountryData.africaCountries);
   const [inputFocus, setInputFocus] = useState(false);

   const onTextChange = (text: string) => {
      let newCountries = CountryData.allCountries.filter(function (item) {
         return item.name
            .toLocaleLowerCase()
            .includes(text.toLocaleLowerCase());
      });
      setCountries(newCountries);
   };

   const CountryItem = ({
      country,
      current
   }: {
      country: CountryInterface;
      current: CountryInterface;
   }) => (
      <TouchableOpacity
         onPress={() => {
            props.onCountryChange(country);
            props.onClose();
         }}
      >
         <View style={styles.countryItem}>
            <ImageBackground
               source={{
                  uri: `https://flagcdn.com/w20/${country.code.toLocaleLowerCase()}.png`
               }}
               imageStyle={{ borderRadius: 60 }}
               style={styles.countryFlag}
            />
            <Text
               style={[
                  styles.countryText,
                  {
                     color:
                        country.code == current.code
                           ? COLORS.light.secondary
                           : "#001538"
                  }
               ]}
            >
               {" "}
               {country.name}({country.dial_code})
            </Text>
            <View style={{ flex: 1 }} />
            <FeatherIcon
               name="check"
               size={wp("5.26%")}
               color={COLORS.light.secondary}
               style={{
                  display: country.code == current.code ? "flex" : "none"
               }}
            />
         </View>
      </TouchableOpacity>
   );

   return (
      <BottomSheet
         modalProps={{
            animationType: "slide",
            onDismiss: () => props.onClose(),
            collapsable: true,
            onRequestClose: () => props.onClose(),
            focusable: true
         }}
         isVisible={props.isVisible}
         containerStyle={{ backgroundColor: "rgba(0.5, 0.25, 0, 0.2)" }}
      >
         <View>
            <View style={styles.header}>
               <View style={styles.panelHeader}>
                  <View style={styles.panelHandle} />
               </View>
            </View>

            <View
               style={[
                  styles.container
                  // { maxHeight: inputFocus ? "90%" : 300 }
               ]}
            >
               <View style={[styles.inputWrapper, { display: "none" }]}>
                  <FeatherIcon
                     name="search"
                     size={wp("5.26%")}
                     color={COLORS.light.inputText}
                     style={styles.icon}
                  />
                  <TextInput
                     placeholder={"Search..."}
                     style={styles.input}
                     //  onFocus={() => setInputFocus(true)}
                     //  onBlur={() => setInputFocus(true)}
                     onChangeText={onTextChange}
                  />
               </View>
               {countries.length > 0 ? (
                  <FlatList
                     data={countries}
                     keyboardShouldPersistTaps={"handled"}
                     bouncesZoom={false}
                     bounces={false}
                     renderItem={(data) => (
                        <CountryItem
                           country={data.item}
                           current={props.current}
                        />
                     )}
                     keyExtractor={(item) => item.code}
                  />
               ) : (
                  <Text style={styles.noResult}>No result found</Text>
               )}
            </View>
         </View>
      </BottomSheet>
   );
}

const styles = StyleSheet.create({
   container: {
      padding: 20,
      backgroundColor: "#fff",
      maxHeight: 300
   },
   header: {
      backgroundColor: "#FFFFFF",
      shadowColor: "#333333",
      shadowOffset: { width: -1, height: -3 },
      shadowRadius: 2,
      shadowOpacity: 0.2,
      // elevation: 5,
      paddingTop: 16,
      borderTopColor: "#eee",
      borderTopWidth: Platform.OS == "android" ? 1 : 0,
      borderTopLeftRadius: 20,
      borderTopRightRadius: 20
   },
   panelHeader: {
      alignItems: "center"
   },
   panelHandle: {
      width: 60,
      height: 4,
      borderRadius: 4,
      backgroundColor: "#00000040"
   },
   inputWrapper: {
      backgroundColor: COLORS.light.inputBg,
      borderColor: COLORS.light.inputBorder,
      borderWidth: 1,
      paddingHorizontal: wp("5.6%"),
      flexDirection: "row",
      height: hp("6.15%"),
      width: "100%",
      borderRadius: wp("8%"),
      alignItems: "center",
      marginBottom: hp("2.58%")
   },
   icon: {
      marginRight: wp("2.15%")
   },
   input: {
      flex: 1,
      fontSize: wp("3.2%"),
      fontFamily: "Inter-Regular"
   },
   countryItem: {
      flexDirection: "row",
      width: "100%",
      paddingVertical: 6,
      // justifyContent: "space-between",
      alignItems: "center",
      marginVertical: hp("1.35%"),
      zIndex: 2
   },
   countryFlag: {
      width: wp("5.33%"),
      height: wp("5.33%")
   },
   countryText: {
      fontSize: wp("3.73%"),
      overflow: "hidden",
      fontFamily: "Inter-Regular"
   },
   noResult: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      paddingVertical: hp("4%")
   }
});
