import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { textStyles } from "../../Fonts";

export default function ButtonScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate("CreateImageScreen")}
      >
        <Text style={styles.buttonText}>Doar</Text>
      </TouchableOpacity>
      <Text></Text>
      <Text style={textStyles.subtituloNeg}>Juntos, podemos mudar vidas.</Text>
    <Text style={textStyles.subtituloNeg}>Sua doação é o primeiro passo. Vamos começar!</Text>
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
  button: {
    backgroundColor: 'white',
    paddingVertical: 20,
    paddingHorizontal: 60,
    borderRadius: 5,
  },
  buttonText: {
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
  },
});
