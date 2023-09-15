import React from "react";
import { View, Button, StyleSheet } from "react-native";

export default function ButtonScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <Button
        title="Criar"
        color='white'
        onPress={() => navigation.navigate("CreateImageScreen")}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#a24fb0',
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
