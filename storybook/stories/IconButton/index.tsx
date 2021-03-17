import React from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome";

interface Props {
   icon: string;
   color: string;
   onPress: () => void;
}

const IconButton: React.FC<Props> = ({ icon, color, onPress }) => {
   return (
      <TouchableOpacity onPress={onPress} style={styles.button}>
         <Icon name={icon} size={30} color={color} />
      </TouchableOpacity>
   );
};

const styles = StyleSheet.create({
   button: {
      alignSelf: "center",
      marginTop: 10
   }
});

export default IconButton;
