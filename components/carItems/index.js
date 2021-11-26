import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import StyledButton from "../styledButton";

export default function CarItem() {
  const handlePress = () => {
    console.log("Hey there");
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground
        source={require("../../assets/images/3.jpg")}
        style={styles.image}
      />

      <View style={styles.titles}>
        <Text style={styles.title}>Model S</Text>
        <Text style={styles.subtitle}>Starting from $640, 000</Text>

        <StyledButton
          type="primary"
          content="custom order"
          handlePress={handlePress}
        />

        <StyledButton
          type="secondary"
          content="custom order"
          handlePress={handlePress}
        />
      </View>
    </View>
  );
}
