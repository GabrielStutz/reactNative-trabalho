import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textStyles } from "../../Fonts";
import coracao from "../../../../assets/Coracao.png";
import rosto from "../../../../assets/Rosto.png";

const UserScreen = ({ route }) => {
  const navigation = useNavigation();
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    getImageFromParams();
  }, [route]);

  const getImageFromParams = () => {
    const { selectedImage } = route.params || {};
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  

  const irParaInfo = () => {
    navigation.navigate("Info", {
      defaultImage: image || "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg",
    });
  };

    // Função para navegar para a tela de doações
  const irParaDonate = () => {
    navigation.navigate("Donate");
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        {image ? (
          <Image
            source={{ uri: `data:image/png;base64,${image}` }}
            style={styles.avatarFoto}
          />
        ) : (
          <Image
            source={{ uri: "https://static.vecteezy.com/system/resources/thumbnails/005/545/335/small/user-sign-icon-person-symbol-human-avatar-isolated-on-white-backogrund-vector.jpg" }}
            style={styles.avatarFoto}
          />
        )}
      </View>
      {userData && (
        <>
          <Text style={textStyles.titulo}>{userData.nome}</Text>
        </>
      )}
      <View style={styles.Divisoria} />
      <View style={styles.containerInf}>
        <Image source={rosto} style={styles.image} />
        <TouchableOpacity onPress={irParaInfo}>
          <Text style={textStyles.subtituloNeg}>Informações pessoais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Divisoria} />
      <View style={styles.containerDoa}>
        <Image source={coracao} style={styles.image} />
        <TouchableOpacity onPress={irParaDonate}>
          <Text style={textStyles.subtituloNeg}>Minhas doações</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Divisoria} />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a24fb0",
    alignItems: "center",
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "flex-start",
    marginTop: -100,
  },
  avatarFoto: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  Divisoria: {
    height: 2,
    backgroundColor: "white",
    width: "80%",
    marginTop: 20,
    marginBottom: 20,
  },
  containerInf: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  containerDoa: {
    flexDirection: "row",
    alignItems: "center",
    padding: 16,
  },
  image: {
    width: 40,
    height: 40,
    marginRight: 16,
  },
});

export default UserScreen;