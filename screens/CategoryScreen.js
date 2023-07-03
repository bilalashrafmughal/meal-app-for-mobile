import React from "react";
import { View, Text, StyleSheet } from "react-native";

const CategoryScreen = () => {
  return (
    <View style={styles.screen}>
      <Text>This is CategoryScreen</Text>
    </View>
  );
};

export default CategoryScreen;

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
