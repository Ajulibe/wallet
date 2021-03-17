import React from "react";
import PropTypes from "prop-types";
import { View, StyleSheet } from "react-native";

const CenterView: React.FC = ({ children }: any) => {
   return <View style={styles.main}>{children}</View>;
};

// CenterView.defaultProps = {
//    children: null
// };

// CenterView.propTypes = {
//    children: PropTypes.node
// };

const styles = StyleSheet.create({
   main: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#F5FCFF"
   }
});

export default CenterView;
