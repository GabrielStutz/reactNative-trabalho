import React from "react";
import { View, StyleSheet } from "react-native";
import { textStyles } from "../../Fonts";

export default function DescScreen({ navigation }) {
  return <View style={styles.container}></View>;
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#a24fb0",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
