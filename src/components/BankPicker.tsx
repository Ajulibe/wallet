import React, { useEffect, useState } from "react";
import BottomSheet from "reanimated-bottom-sheet";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Platform,
  Image
} from "react-native";
import FeatherIcon from "react-native-vector-icons/Feather";
import {
  BankData,
  BankInterface,
} from "../extra/BankData";
import COLORS from "../utils/Colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

interface Props {
  current?: BankInterface;
  onBankChange: (bank: BankInterface) => void;
}

export function BankPicker(props: Props) {
  const [banks, setBanks] = useState(BankData.banks)


  const BankItem = ({
    bank,
    current,
  }: {
    bank: BankInterface,
    current?: BankInterface
  }) => (
    <TouchableOpacity onPress={() => { props.onBankChange(bank); }}>
      <View style={styles.bankItem}>
        <Image
          source={{
            uri: bank.bankLogo,
          }}
          style={styles.bankImage}
        />
        <Text
          style={[
            styles.bankText,
            { fontFamily: current != null && bank.bankCode == current.bankCode ? "Inter-Bold" : "Inter-Regular" },
          ]}
        >
          {bank.bankName}
        </Text>
        <View style={{ flex: 1 }} />
        <RadioDot
          color={current != null && bank.bankCode == current.bankCode ? COLORS.light.primary : 'transparent'}
        />
      </View>
    </TouchableOpacity>
  );

  const RadioDot = ({ color }: { color: string }) =>
  (
    <View style={styles.radioDot}>
      <View style={[styles.dot, { backgroundColor: color }]}></View>
    </View>
  )


  return (
    <FlatList
      data={banks}
      keyboardShouldPersistTaps={'handled'}
      bouncesZoom={true}
      renderItem={(data) => (
        <BankItem bank={data.item} current={props.current} />
      )}
      keyExtractor={(item) => item.bankCode}
    />
  );
}

const styles = StyleSheet.create({
  bankItem: {
    flexDirection: "row",
    width: "100%",
    paddingVertical: 6,
    // justifyContent: "space-between",
    alignItems: 'center',
    marginVertical: hp("1%"),
  },
  bankText: {
    fontSize: wp("3.73%"),
    overflow: 'hidden',
    marginLeft: 12,
    fontFamily: 'Inter-Regular',
    color: COLORS.light.black2
  },
  bankImage: {
    width: wp('6%'),
    height: wp('6%'),
    resizeMode: "contain"
  },
  radioDot: {
    width: wp('6%'),
    height: wp('6%'),
    backgroundColor: '#F4F1EF',
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center'
  },
  dot: {
    width: wp('4%'),
    height: wp('4%'),
    backgroundColor: COLORS.light.primary,
    borderRadius: 50
  }
});
