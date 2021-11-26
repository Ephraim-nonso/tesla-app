import React from "react";
import { Dimensions, FlatList, Text, View } from "react-native";
import CarItem from "../carItems";
import { styles } from "./styles";
import { cars } from "./cars";

function CarList() {
  return (
    <View style={styles.container}>
      <FlatList
        data={cars}
        renderItem={({ item }) => (
          <View key={item.key}>
            <CarItem car={item} />
          </View>
        )}
        snapToAlignment={"start"}
        decelerationRate={"fast"}
        snapToInterval={Dimensions.get("screen").height}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}

export default CarList;
