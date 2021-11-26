import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles.js";

const index = ({ type, content, handlePress }) => {
  const backgroundColor = type === "primary" ? "#171A20cc" : "#ffffffa6";
  const textColor = type === "primary" ? "#ffffff" : "#171a20";

  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: backgroundColor }]}
        onPress={handlePress}
      >
        <Text style={[styles.btnText, { color: textColor }]}>{content}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default index;
