import React, { useRef, useState } from "react";
import {
  View,
  StyleSheet,
  Text,
  Image,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  ImageBackground,
  Animated,
  Easing,
  useWindowDimensions,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import {
  NavigationTabProp,
  NavigationBottomTabScreenComponent,
} from "react-navigation-tabs";
import { useScrollToTop } from "@react-navigation/native";
import { GUIDE } from "../constants/StyleGuide";
import { BlurView } from "expo-blur";
import { Ionicons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { ROUTES } from "../../navigation/Routes";

import QuickOptionsScreen from "../HomeScreenComponents/QuickOptionsComponent";
import DashBoardComponent from "../HomeScreenComponents/DashBoardComponent";
import IMAGES from "../../utils/Images";

type Props = {
  navigation: NavigationTabProp<"Shop">;
};

const HomeScreen: NavigationBottomTabScreenComponent<Props> = ({
  navigation,
}) => {
  const ref = useRef<ScrollView | null>(null);
  const [viewRef, setViewRef] = useState(null);
  useScrollToTop(ref);

  const WIDTH = wp("90%");

  //ANIMATION VARIABLES
  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_EXPANDED_HEIGHT = hp("34.26%");
  const HEADER_COLLAPSED_HEIGHT = hp("12.83%");
  const BODY_EXPANDED_HEIGHT = hp("84.67%");
  const BODY_COLLAPSED_HEIGHT = hp("65.67%");
  const INVISIBLE_POSITION = -hp("30%");
  const VISIBLE_POSITION = hp("0");

  const FASTER_OPACITY_REDUCTION = hp("32.83%");
  const SCREEN_WIDTH = useWindowDimensions().width;
  const SCREEN_HEIGHT = useWindowDimensions().height;

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - hp("20.83%")],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
    easing: Easing.linear,
  });

  const BottomViewHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [BODY_COLLAPSED_HEIGHT, BODY_EXPANDED_HEIGHT],
    extrapolate: "clamp",
    easing: Easing.linear,
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - hp("8.83%")],
    outputRange: [0, 1],
    extrapolate: "clamp",
    easing: Easing.linear,
  });
  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, hp("12%")],
    outputRange: [1, 0],
    extrapolate: "clamp",
    easing: Easing.linear,
  });
  const rewardsTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - FASTER_OPACITY_REDUCTION],
    outputRange: [1, 0],
    extrapolate: "clamp",
    easing: Easing.linear,
  });

  const newDivPosition = scrollY.interpolate({
    inputRange: [0, hp("14%")],
    outputRange: [INVISIBLE_POSITION, VISIBLE_POSITION],
    extrapolate: "clamp",
    easing: Easing.linear,
  });
  const newDivOpacity = scrollY.interpolate({
    inputRange: [0, hp("4%")],
    outputRange: [0, 1],
    extrapolate: "clamp",
    easing: Easing.linear,
  });

  const increaseMarginTop = scrollY.interpolate({
    inputRange: [0, hp("4%")],
    outputRange: [hp("0%"), hp("10%")],
    extrapolate: "clamp",
    easing: Easing.linear,
  });

  const handleScroll = (event: any) => {
    console.log(event);
  };

  return (
    <>
      <SafeAreaView style={{ flex: 0, backgroundColor: "#00296B" }} />
      <Animated.View style={styles.container}>
        <Animated.View
          style={{
            width: wp("100%"),
            height: headerHeight,
            backgroundColor: "#00296B",
            borderBottomLeftRadius: wp("7.25%"),
            borderBottomRightRadius: wp("7.25%"),
            alignItems: "center",
            shadowOffset: {
              width: 0,
              height: 4,
            },
            shadowColor: "#00296B",
            shadowOpacity: 0.1,
            shadowRadius: 1,
            elevation: 1,
          }}
        >
          <ImageBackground
            source={require("../../assets/images/mask.png")}
            style={{
              flex: 1,
              justifyContent: "center",
            }}
          >
            <Animated.View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                position: "absolute",
                top: newDivPosition,
                opacity: newDivOpacity,
                width: wp("90%"),
              }}
            >
              <View style={styles.contentContainer}>
                <View
                  style={{
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  <TouchableOpacity
                    onPress={() => {
                      navigation.navigate(ROUTES.PROFILE_SCREEN);
                    }}
                  >
                    <Image
                      source={IMAGES.newAvatar}
                      style={{ width: wp("10.39%"), height: wp("10.39%") }}
                    />
                  </TouchableOpacity>
                </View>

                <View
                  style={{
                    justifyContent: "center",
                  }}
                >
                  <Text
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      fontSize: wp("7%"),
                      fontFamily: "Lato-Bold",
                      lineHeight: hp("4.35%"),
                    }}
                  >
                    {" "}
                    {"\u20A6"} 00.00
                  </Text>
                </View>
              </View>

              <View style={styles.Notification}>
                <TouchableOpacity>
                  <Image
                    source={IMAGES.bells}
                    style={{
                      width: wp("3.22%"),
                      height: hp("1.67%%"),
                      tintColor: "#ffffff",
                    }}
                  />
                </TouchableOpacity>
              </View>
            </Animated.View>
            <Animated.View
              style={{
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "center",
                width: wp("90%"),
                opacity: heroTitleOpacity,
              }}
            >
              <TouchableOpacity
                onPress={() => {
                  navigation.navigate(ROUTES.PROFILE_SCREEN);
                }}
              >
                <View style={styles.contentContainer}>
                  <Animated.View
                    style={{
                      justifyContent: "center",
                      alignItems: "center",
                      marginTop: increaseMarginTop,
                    }}
                  >
                    <Image
                      source={IMAGES.newAvatar}
                      style={{ width: wp("10.39%"), height: wp("10.39%") }}
                    />
                  </Animated.View>

                  <Animated.View
                    style={{
                      justifyContent: "center",
                      marginTop: increaseMarginTop,
                    }}
                  >
                    <Text style={styles.profileName}>Hi Jane</Text>
                    <Text style={[styles.welcomeMessage, { color: "#ffffff" }]}>
                      Welcome Back!
                    </Text>
                  </Animated.View>
                </View>
              </TouchableOpacity>

              <Animated.View
                style={[styles.Notification, { marginTop: increaseMarginTop }]}
              >
                <TouchableOpacity>
                  <Image
                    source={IMAGES.bells}
                    style={{
                      width: wp("3.22%"),
                      height: hp("1.67%%"),
                      tintColor: "#ffffff",
                    }}
                  />
                </TouchableOpacity>
              </Animated.View>
            </Animated.View>
            <Animated.View
              style={{
                marginTop: hp("4.46%"),
                alignItems: "center",
                opacity: heroTitleOpacity,
              }}
            >
              <Text
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: wp("3.38%"),
                  fontFamily: "Lato-Regular",
                  lineHeight: hp("2.57%"),
                }}
              >
                Total Balance
              </Text>
              <Text
                style={{
                  color: "#ffffff",
                  textAlign: "center",
                  fontSize: wp("7%"),
                  fontFamily: "Lato-Bold",
                  lineHeight: hp("4.35%"),
                }}
              >
                {" "}
                {"\u20A6"} 00.00
              </Text>
            </Animated.View>
            <Animated.View
              style={{
                marginTop: hp("4.68%"),
                height: hp("7.59%"),
                width: wp("90%"),
                backgroundColor: "rgba(0,21,56,0.2)",
                borderRadius: wp("3.62%"),
                justifyContent: "center",
                paddingLeft: wp("4.5%"),
                paddingRight: wp("4.5%"),
                borderColor: "rgba(0,21,56,0.4)",
                borderWidth: 0.2,
                shadowOffset: {
                  width: 0,
                  height: 0,
                },
                shadowColor: "#00296B",
                shadowOpacity: 1,
                opacity: rewardsTitleOpacity,
              }}
            >
              <View
                style={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <View
                  style={{
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    width: wp("27%"),
                  }}
                >
                  <Image
                    source={require("../../assets/images/gift.png")}
                    style={{
                      resizeMode: "contain",
                      width: hp("1.82%"),
                      height: hp("1.82%"),
                      tintColor: "#ffffff",
                    }}
                  />
                  <Text
                    style={{
                      color: "#ffffff",
                      textAlign: "center",
                      fontSize: wp("3.38%"),
                      fontFamily: "Lato-Regular",
                      lineHeight: hp("2.57%"),
                    }}
                  >
                    New Rewards
                  </Text>
                </View>
                <Text
                  style={{
                    color: "#ffffff",
                    textAlign: "center",
                    fontSize: wp("3.38%"),
                    fontFamily: "Lato-Regular",
                    lineHeight: hp("2.57%"),
                  }}
                >
                  0
                </Text>
              </View>
            </Animated.View>
          </ImageBackground>
        </Animated.View>

        <Animated.View
          style={{
            height: BottomViewHeight,
            backgroundColor: "#ffffff",
            paddingTop: hp("1%"),
            position: "absolute",
            bottom: 0,
            left: 0,
          }}
        >
          <ScrollView
            showsVerticalScrollIndicator={false}
            style={{
              width: wp("90%"),
              height: hp("70%"),
              marginLeft: wp("5%"),
            }}
            // contentContainerStyle={{
            //   padding: 16,
            // }}
            onScroll={Animated.event(
              [
                {
                  nativeEvent: {
                    contentOffset: {
                      y: scrollY,
                    },
                  },
                },
              ],
              { useNativeDriver: false }
            )}
            scrollEventThrottle={10}
          >
            <Animated.View
              style={{
                backgroundColor: "#ffffff",
                width: wp("90%"),
                flexDirection: "row",
                justifyContent: "space-around",
                marginTop: hp("1.24%"),
                //opacity: rewardsTitleOpacity,
              }}
            >
              <TouchableOpacity>
                <View style={{ justifyContent: "center" }}>
                  <View
                    style={{
                      height: wp("14.5%"),
                      width: wp("14.5%"),
                      backgroundColor: "rgba(71,204,175,0.2)",
                      borderRadius: wp("2.41%"),
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#31B094",
                      borderWidth: 0.2,
                    }}
                  >
                    <Ionicons name="ios-add" size={24} color="#31B094" />
                  </View>
                  <Text
                    style={{
                      color: "#00296B",
                      fontSize: wp("2.41%"),
                      textAlign: "center",
                      marginTop: hp("0.56%"),
                      lineHeight: hp("2.12%"),
                      fontFamily: "Lato-Regular",
                    }}
                  >
                    Top Up
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <View
                    style={{
                      height: wp("14.5%"),
                      width: wp("14.5%"),
                      backgroundColor: "rgba(50,197,255,0.2)",
                      borderRadius: wp("2.41%"),
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#32C5FF",
                      borderWidth: 0.2,
                    }}
                  >
                    <AntDesign name="arrowup" size={20} color="#32C5FF" />
                  </View>
                  <Text
                    style={{
                      color: "#00296B",
                      fontSize: wp("2.41%"),
                      textAlign: "center",
                      marginTop: hp("0.56%"),
                      lineHeight: hp("2.12%"),
                      fontFamily: "Lato-Regular",
                    }}
                  >
                    Transfer
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <View
                    style={{
                      height: wp("14.5%"),
                      width: wp("14.5%"),
                      backgroundColor: "rgba(255,213,0,0.2)",
                      borderRadius: wp("2.41%"),
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#CC9F00",
                      borderWidth: 0.2,
                    }}
                  >
                    <Ionicons
                      name="ios-wallet-outline"
                      size={20}
                      color="#CC9F00"
                    />
                  </View>
                  <Text
                    style={{
                      color: "#00296B",
                      fontSize: wp("2.41%"),
                      textAlign: "center",
                      marginTop: hp("0.56%"),
                      lineHeight: hp("2.12%"),
                      fontFamily: "Lato-Regular",
                    }}
                  >
                    Withdraw
                  </Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity>
                <View>
                  <View
                    style={{
                      height: wp("14.5%"),
                      width: wp("14.5%"),
                      backgroundColor: "rgba(16,84,194,0.2)",
                      borderRadius: wp("2.41%"),
                      justifyContent: "center",
                      alignItems: "center",
                      borderColor: "#1054C2",
                      borderWidth: 0.2,
                    }}
                  >
                    <Feather name="more-horizontal" size={20} color="#1054C2" />
                  </View>
                  <Text
                    style={{
                      color: "#00296B",
                      fontSize: wp("2.41%"),
                      textAlign: "center",
                      marginTop: hp("0.56%"),
                      lineHeight: hp("2.12%"),
                      fontFamily: "Lato-Regular",
                    }}
                  >
                    More..
                  </Text>
                </View>
              </TouchableOpacity>
            </Animated.View>
            <View style={{ marginTop: hp("3.57%") }}>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  //borderWidth: 2,
                }}
              >
                <Text
                  style={{
                    color: "rgba(128,148,181,1)",
                    lineHeight: hp("2.57%"),
                    fontSize: wp("3.9%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  Recent Transactions
                </Text>
                <Text
                  style={{
                    color: "rgba(128,148,181,1)",
                    lineHeight: hp("2.57%"),
                    fontSize: wp("3.38%"),
                    fontFamily: "Lato-Regular",
                    textDecorationStyle: "solid",
                    textDecorationColor: "rgba(128,148,181,1)",
                  }}
                >
                  View All
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.34%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#EB5757",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  - {"\u20A6"} 50,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#EB5757",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  - {"\u20A6"} 250,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#EB5757",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  - {"\u20A6"} 5,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>

              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  +{"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
              <View
                style={{
                  width: wp("90%"),
                  flexDirection: "row",
                  alignItems: "center",
                  justifyContent: "space-between",
                  marginTop: hp("2.23%"),
                }}
              >
                <View style={{ justifyContent: "center" }}>
                  <View>
                    <Text
                      style={{
                        color: "rgba(1,35,86,1)",
                        fontFamily: "Lato-Regular",
                        lineHeight: hp("2.9%"),
                        fontSize: wp("3.86%"),
                      }}
                    >
                      Mcgobo Gampi
                    </Text>
                  </View>
                  <View>
                    <Text
                      style={{
                        color: "rgba(128,148,181,1)",
                        marginTop: hp("0.2%"),
                      }}
                    >
                      6:10pm
                    </Text>
                  </View>
                </View>

                <Text
                  style={{
                    color: "#219653",
                    lineHeight: hp("2.9%"),
                    fontSize: wp("3.86%"),
                    fontFamily: "Lato-Bold",
                  }}
                >
                  + {"\u20A6"} 500,000.00
                </Text>
              </View>
            </View>
          </ScrollView>
        </Animated.View>
      </Animated.View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#ffffff",
    paddingLeft: wp("7.24%"),
    paddingRight: wp("7.24%"),
    alignItems: "center",
    height: hp("100%"),
  },
  contentContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: wp("33%"),
    backgroundColor: "#00296B",
  },
  profileName: {
    fontSize: wp("4.35%"),
    fontFamily: "Lato-Bold",
    color: "#ffffff",
  },
  welcomeMessage: {
    color: "#ffffff",
    textAlign: "center",
    fontSize: wp("2.9%"),
    fontFamily: "Lato-Regular",
    lineHeight: hp("2.12%"),
  },
  Notification: {
    width: wp("10%"),
    height: wp("10%"),
    borderColor: "#ffffff",
    justifyContent: "center",
    alignItems: "center",
  },
});

export default HomeScreen;
