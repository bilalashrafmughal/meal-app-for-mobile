import React from "react";
import { View, Text, StyleSheet } from "react-native";

const MealDetailScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is MealDetailScreen</Text>
    </View>
  );
};

export default MealDetailScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
