import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { textStyles } from "../../Fonts";
import { obterUrlBase } from "../../autenticacao/AuthContext";
import coracao from "../../../../assets/Coracao.png";
import rosto from "../../../../assets/Rosto.png";
import AsyncStorage from "@react-native-async-storage/async-storage";

const UserScreen = ({ navigation }) => {
  const [userData, setUserData] = useState(null);
  const [image, setImage] = useState(null);

  useEffect(() => {
    fetchUsers();
    getImageFromParams();
  }, []);

    // Função para obter dados do usuário
  const fetchUsers = () => {
    const token = AsyncStorage.getItem('userToken');
    const url = `${obterUrlBase()}/autenticacao/authenticated`;
    fetch(url,
      {
        method: "GET",
        headers: {
        Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
          "Authorization": `Bearer ${token}` 
        },
      }
    )
      .then((res) => {
        if (!res.ok) {
          throw new Error(
            `Erro na solicitação: ${res.status} - ${res.statusText}`
          );
        }
        return res.json();
      })
      .then((data) => {
        console.log("Dados do usuário recebidos:", data);
        if (Array.isArray(data) && data.length > 0) {
          setUserData(data[0]);
        } else {
          console.error("Formato de dados inválido ou array vazia");
        }
      })
      .catch((error) => {
        console.error("Erro ao obter dados do usuário:", error.message);
      });
  };

    // Função para obter imagem do parâmetro de rota
  const getImageFromParams = () => {
    const { selectedImage } = navigation.params || {};
    if (selectedImage) {
      setImage(selectedImage);
    }
  };

  // Função para navegar para a tela de informações pessoais
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