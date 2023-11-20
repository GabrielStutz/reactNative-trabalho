import React, { useEffect } from "react";
import { StyleSheet, View, Text, TouchableOpacity } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ClickableImage from "../../ClickableImage.js";
import { textStyles } from "../../Fonts.js";

export default function ImageScreen({ navigation }) {
  const [images, setImages] = React.useState([
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
  ]);

  useEffect(() => {
    const unsubscribe = navigation.addListener("blur", () => {
      setImages([
        "https://i.postimg.cc/ZRDBd4z2/Upload.png",
        "https://i.postimg.cc/ZRDBd4z2/Upload.png",
        "https://i.postimg.cc/ZRDBd4z2/Upload.png",
        "https://i.postimg.cc/ZRDBd4z2/Upload.png",
      ]);
    });

    return unsubscribe;
  }, [navigation]);

  const handleImageChange = (uri, index) => {
    const updatedImages = [...images];
    updatedImages[index] = uri;
    setImages(updatedImages);
  };

  return (
    <View style={styles.view}>
      <GestureHandlerRootView>
        <View style={styles.imageContainer}>
          <Text></Text>
          <Text style={textStyles.subtituloNeg} bottom={30}>Escolha algumas fotos do seu produto.</Text>
          <Text style={textStyles.subtituloNeg} bottom={20}>Clique sobre os quadrados</Text>
          <Text></Text>
          <View style={styles.row}>
            <ClickableImage
              imageUri={images[0]}
              onChangeImage={(uri) => handleImageChange(uri, 0)}
            />
            <ClickableImage
              imageUri={images[1]}
              onChangeImage={(uri) => handleImageChange(uri, 1)}
            />
          </View>
          <View style={styles.row}>
            <ClickableImage
              imageUri={images[2]}
              onChangeImage={(uri) => handleImageChange(uri, 2)}
            />
            <ClickableImage
              imageUri={images[3]}
              onChangeImage={(uri) => handleImageChange(uri, 3)}
            />
          </View>
          <TouchableOpacity
            style={styles.button}
            disabled={images.every((image) => image === 'https://i.postimg.cc/ZRDBd4z2/Upload.png')}
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
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
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
}
);