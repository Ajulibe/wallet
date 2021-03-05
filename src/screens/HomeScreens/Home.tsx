import React, { useEffect, useRef } from "react";
import {
  View,
  StyleSheet,
  Text,
  ScrollView,
  Animated,
  useWindowDimensions,
  Image,
  TouchableOpacity,
} from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Home: React.FC = ({ navigation }: any) => {
  // Initial Value: 0
  const scrollY = useRef(new Animated.Value(0)).current;

  const HEADER_EXPANDED_HEIGHT = hp("40.33%");
  const HEADER_COLLAPSED_HEIGHT = hp("30.33%");
  const BODY_EXPANDED_HEIGHT = hp("69.67%");
  const BODY_COLLAPSED_HEIGHT = hp("59.67%");
  const INVISIBLE_POSITION = -hp("30%");
  const VISIBLE_POSITION = hp("30.33%");
  const SCREEN_WIDTH = useWindowDimensions().width;
  const SCREEN_HEIGHT = useWindowDimensions().height;

  //Using Interpolate API from react animated. This is a way to animate
  //two properties at the same time. the movement of one property from a range
  //lets say [0,1], causes a movement of another property from [150,0]
  //here scrollY moves from [0, 240] while headerHeight changes from [300,60],
  //at the same time.Clamping makes it adhere to the output range.

  const headerHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [HEADER_EXPANDED_HEIGHT, HEADER_COLLAPSED_HEIGHT],
    extrapolate: "clamp",
  });

  const BottomViewHeight = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [BODY_COLLAPSED_HEIGHT, BODY_EXPANDED_HEIGHT],
    extrapolate: "clamp",
  });

  const headerTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [0, 1],
    extrapolate: "clamp",
  });
  const heroTitleOpacity = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [1, 0],
    extrapolate: "clamp",
  });

  const newDivPosition = scrollY.interpolate({
    inputRange: [0, HEADER_EXPANDED_HEIGHT - HEADER_COLLAPSED_HEIGHT],
    outputRange: [INVISIBLE_POSITION, VISIBLE_POSITION],
    extrapolate: "clamp",
  });
  // console.log(headerHeight);
  return (
    <View style={styles.container}>
      <Animated.View
        style={{
          height: headerHeight,
          width: SCREEN_WIDTH,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Animated.View
          style={{
            marginTop: 28,
            opacity: headerTitleOpacity,
          }}
        >
          <View
            style={{
              justifyContent: "space-between",
              alignItems: "center",
              flexDirection: "row",
              width: wp("90%"),
              height: hp("5%"),
              // borderColor: "red",
              // borderWidth: 1,
              marginLeft: wp("5%"),
              marginBottom: hp("4%"),
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: hp("2.18%"),
                color: "#666666",
                marginLeft: wp("2.42%"),
              }}
            >
              SurePay
            </Text>

            <Image
              source={require("../../assets/images/avatar.png")}
              style={{
                resizeMode: "contain",
                height: 60,
                width: 50,
              }}
            />
          </View>
          <View
            style={{
              justifyContent: "space-around",
              flexDirection: "row",
              width: SCREEN_WIDTH,
              height: hp("10%"),
              alignItems: "center",
              // borderColor: "red",
              // borderWidth: 1,
            }}
          >
            {/* FIRST ICON */}
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#FE3009",
                    width: hp("6.7%"),
                    height: hp("6.7%"),
                    borderRadius: hp("6.7%"),
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "rgba(0,0,0,0.15)",
                    shadowRadius: hp("2.23%"),
                    shadowOpacity: 1,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                  }}
                >
                  <Image
                    source={require("../../assets/images/add.png")}
                    style={{
                      resizeMode: "contain",
                      width: hp("2.67%"),
                      height: hp("2.67%"),
                    }}
                  />
                </View>

                <Text
                  style={{
                    marginTop: hp("1%"),
                    fontFamily: "Roboto-Medium",
                    fontSize: hp("1.34%"),
                  }}
                >
                  {" "}
                  Add Money
                </Text>
              </View>
            </TouchableOpacity>
            {/* SECOND ICON */}
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#FE3009",
                    width: hp("6.7%"),
                    height: hp("6.7%"),
                    borderRadius: hp("6.7%"),
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "rgba(0,0,0,0.15)",
                    shadowRadius: hp("2.23%"),
                    shadowOpacity: 1,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                  }}
                >
                  <Image
                    source={require("../../assets/images/Up.png")}
                    style={{
                      resizeMode: "contain",
                      width: hp("2.67%"),
                      height: hp("2.67%"),
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: hp("1%"),
                    fontFamily: "Roboto-Medium",
                    fontSize: hp("1.34%"),
                  }}
                >
                  {" "}
                  Send Money
                </Text>
              </View>
            </TouchableOpacity>
            {/* THIRD ICON */}
            <TouchableOpacity>
              <View style={{ alignItems: "center" }}>
                <View
                  style={{
                    backgroundColor: "#FE3009",
                    width: hp("6.7%"),
                    height: hp("6.7%"),
                    borderRadius: hp("6.7%"),
                    justifyContent: "center",
                    alignItems: "center",
                    shadowColor: "rgba(0,0,0,0.15)",
                    shadowRadius: hp("2.23%"),
                    shadowOpacity: 1,
                    shadowOffset: {
                      width: 0,
                      height: 0,
                    },
                  }}
                >
                  <Image
                    source={require("../../assets/images/walletHome.png")}
                    style={{
                      resizeMode: "contain",
                      width: hp("2.67%"),
                      height: hp("2.67%"),
                    }}
                  />
                </View>
                <Text
                  style={{
                    marginTop: hp("1%"),
                    fontFamily: "Roboto-Medium",
                    fontSize: hp("1.34%"),
                  }}
                >
                  {" "}
                  My Wallet
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </Animated.View>
        <Animated.View
          style={{
            position: "absolute",
            bottom: 16,
            marginBottom: hp("4%"),
            opacity: heroTitleOpacity,
            marginLeft: wp("5%"),
            marginRight: wp("5%"),
          }}
        >
          <View
            style={{
              justifyContent: "center",
              width: SCREEN_WIDTH,
              height: hp("20%"),
              alignItems: "center",
            }}
          >
            <Text
              style={{
                fontFamily: "Roboto-Regular",
                fontSize: hp("1.56%"),
                marginTop: hp("1%"),
                color: "#FE3009",
              }}
            >
              Current Balance
            </Text>

            <Text
              style={{
                fontFamily: "Roboto-Bold",
                fontSize: hp("4.35%"),
                marginTop: hp("1%"),
                color: "#FE3009",
              }}
            >
              N4,491
            </Text>
          </View>
        </Animated.View>
      </Animated.View>
      <Animated.View
        style={{
          height: BottomViewHeight,
          borderTopLeftRadius: hp("4.46%"),
          borderTopRightRadius: hp("4.46%"),
          backgroundColor: "#ffffff",
          paddingTop: hp("1.46%"),
          position: "absolute",
          bottom: 0,
          left: 0,
          shadowColor: "rgba(0, 0, 0, 0.1)",
          shadowRadius: hp("2.23%"),
          shadowOpacity: 1,
          shadowOffset: {
            width: 0,
            height: 0,
          },
        }}
      >
        <ScrollView
          style={{
            width: SCREEN_WIDTH,
            flex: 0.8,
            height: 500,
          }}
          contentContainerStyle={{
            padding: 16,
          }}
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
          scrollEventThrottle={16}
        >
          <Text style={styles.title}>This is Title</Text>
          <Text>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum. Where does it come
            from? Contrary to popular belief, Lorem Ipsum is not simply random
            text. It has roots in a piece of classical Latin literature from 45
            BC, making it over 2000 years old. Richard McClintock, a Latin
            professor at Hampden-Sydney College in Virginia, looked up one of
            the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham. the release of Letraset sheets containing Lorem Ipsum
            passages, and more recently with desktop publishing software like
            Aldus PageMaker including versions of Lorem Ipsum. Where does it
            come from? Contrary to popular belief, Lorem Ipsum is not simply
            random text. It has roots in a piece of classical Latin literature
            from 45 BC, making it over 2000 years old. Richard McClintock, a
            Latin professor at Hampden-Sydney College in Virginia, looked up one
            of the more obscure Latin words, consectetur, from a Lorem Ipsum
            passage, and going through the cites of the word in classical
            literature, discovered the undoubtable source. Lorem Ipsum comes
            from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum"
            (The Extremes of Good and Evil) by Cicero, written in 45 BC. This
            book is a treatise on the theory of ethics, very popular during the
            Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit
            amet..", comes from a line in section 1.10.32. The standard chunk of
            Lorem Ipsum used since the 1500s is reproduced below for those
            interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et
            Malorum" by Cicero are also reproduced in their exact original form,
            accompanied by English versions from the 1914 translation by H.
            Rackham.
          </Text>
        </ScrollView>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    backgroundColor: "#F4F5F7",
  },
  title: {
    fontSize: 24,
    marginVertical: 16,
  },
});

export default Home;
