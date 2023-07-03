import React from "react";
import { View, Text, StyleSheet } from "react-native";

const FavouriteScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is FavouriteScreen</Text>
    </View>
  );
};

export default FavouriteScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
