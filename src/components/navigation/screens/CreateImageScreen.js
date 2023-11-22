import React, { useState } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ClickableImage from "../../ClickableImage.js";
import { textStyles } from "../../Fonts.js";

export default function ImageScreen({ navigation }) {
  const [image, setImage] = useState("https://i.postimg.cc/ZRDBd4z2/Upload.png");

  const handleImageChange = (uri) => {
    setImage(uri);
  };

  const VoltaButton = () => {
    navigation.navigate("Create")
  };
  return (
    <View style={styles.view}>
      <TouchableOpacity onPress={VoltaButton}>
      <Text style={styles.BotaoVoltar}>{`ᐊ`}</Text>
      </TouchableOpacity>
      <GestureHandlerRootView>
        <View style={styles.imageContainer}>
          <Text></Text>
          <Text style={textStyles.subtituloNeg} bottom={30}>Escolha uma foto do seu produto.</Text>
          <Text style={textStyles.subtituloNeg} bottom={20}>Clique sobre o quadrado</Text>
          <Text></Text>
          <ClickableImage
            imageUri={image}
            onChangeImage={(uri) => handleImageChange(uri)}
          />
          <TouchableOpacity
            style={styles.button}
            disabled={image === 'https://i.postimg.cc/ZRDBd4z2/Upload.png'}
            onPress={() => navigation.navigate("Desc")}
          >
            <Text style={styles.buttonText}>Proximo</Text>
          </TouchableOpacity>
        </View>
      </GestureHandlerRootView>
    </View>
  );
}

const styles = StyleSheet.create({
  view: {
    backgroundColor: "#a24fb0",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    shadowColor: "#000",
    shadowOffset: {
      width: 3,
      height: 3,
    },
    shadowOpacity: 0.4,
    shadowRadius: 5,
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    marginTop: 20,
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
  BotaoVoltar: {
    right: 148,
    fontWeight: "bold",
    color: "white",
    fontSize: 30,
    bottom: 135,
  },
});