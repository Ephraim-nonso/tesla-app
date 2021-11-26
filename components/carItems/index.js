import React from "react";
import { View, Text, ImageBackground } from "react-native";
import { styles } from "./styles";
import StyledButton from "../styledButton";

export default function CarItem(props) {
  const { name, tagLine, tagLineCTA, image } = props.car;
  const handlePress = () => {
    console.log("Hey there");
  };

  return (
    <View style={styles.carContainer}>
      <ImageBackground source={image} style={styles.image} />

      <View style={styles.titles}>
        <Text style={styles.title}>{name}</Text>
        <Text style={styles.subtitle}>
          {tagLine}
          <Text style={styles.subtitleCTA}>{tagLineCTA}</Text>
        </Text>
      </View>

      <View style={styles.btnContainer}>
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
