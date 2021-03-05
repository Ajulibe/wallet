import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  Animated,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";

const HomeScreen: React.FC = () => {
  return (
    <Animated.View style={styles.quickOptionsDiv}>
      <TouchableOpacity>
        <View style={{ justifyContent: "center" }}>
          <View style={styles.topUpDiv}>
            <Ionicons name="ios-add" size={24} color="#31B094" />
          </View>
          <Text style={styles.quickOptionsText}>Top Up</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View style={styles.transferDiv}>
            <AntDesign name="arrowup" size={20} color="#32C5FF" />
          </View>
          <Text style={styles.quickOptionsText}>Transfer</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View style={styles.withdrawDiv}>
            <Ionicons name="ios-wallet-outline" size={20} color="#CC9F00" />
          </View>
          <Text style={styles.quickOptionsText}>Withdraw</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity>
        <View>
          <View style={styles.moreDiv}>
            <Feather name="more-horizontal" size={20} color="#1054C2" />
          </View>
          <Text style={styles.quickOptionsText}>More..</Text>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  quickOptionsDiv: {
    backgroundColor: "#ffffff",
    width: wp("90%"),
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: hp("1.24%"),
  },
  topUpDiv: {
    height: wp("14.5%"),
    width: wp("14.5%"),
    backgroundColor: "rgba(71,204,175,0.2)",
    borderRadius: wp("2.41%"),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#31B094",
    borderWidth: 0.2,
  },
  transferDiv: {
    height: wp("14.5%"),
    width: wp("14.5%"),
    backgroundColor: "rgba(50,197,255,0.2)",
    borderRadius: wp("2.41%"),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#32C5FF",
    borderWidth: 0.2,
  },
  quickOptionsText: {
    color: "#00296B",
    fontSize: wp("2.41%"),
    textAlign: "center",
    marginTop: hp("0.56%"),
    lineHeight: hp("2.12%"),
    fontFamily: "Lato-Regular",
  },
  withdrawDiv: {
    height: wp("14.5%"),
    width: wp("14.5%"),
    backgroundColor: "rgba(255,213,0,0.2)",
    borderRadius: wp("2.41%"),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#CC9F00",
    borderWidth: 0.2,
  },
  moreDiv: {
    height: wp("14.5%"),
    width: wp("14.5%"),
    backgroundColor: "rgba(16,84,194,0.2)",
    borderRadius: wp("2.41%"),
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#1054C2",
    borderWidth: 0.2,
  },
});

export default HomeScreen;
