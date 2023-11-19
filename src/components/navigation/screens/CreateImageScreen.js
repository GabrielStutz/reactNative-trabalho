import React, { useEffect } from "react";
import { StyleSheet, View, Text } from "react-native";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import ClickableImage from "../../ClickableImage.js";
import { useNavigation } from "@react-navigation/native";
import { textStyles } from "../../Fonts.js";

export default function CreateImageScreen({ navigation }) {
  const [images, setImages] = React.useState([
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
    "https://i.postimg.cc/ZRDBd4z2/Upload.png",
  ]);

  useEffect(() => {
    (async () => {
      const { status } =
        await ImagePicker.requestMediaLibraryPermissionsAsync();
      if (status !== "granted") {
        alert(
          "Desculpe, precisamos de permissão para acessar a galeria de imagens."
        );
      }
    })();
  }, []);

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
          <Text></Text>
          <Text style={textStyles.subtituloNeg}>
            Vamos começar escolhendo algumas fotos da sua doação
          </Text>
          <Text style={textStyles.subtituloNeg}>Clique sobre os quadrados</Text>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("CreateDescScreen")}
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
    marginBottom: 200,
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 10,
  },
});
