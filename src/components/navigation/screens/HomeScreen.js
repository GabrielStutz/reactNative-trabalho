import React, { useEffect, useContext, useState } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image, FlatList } from "react-native";
import { AuthContext } from "../../autenticacao/AuthContext";
import { loginName } from "../TabNavigator";

export default function HomeScreen({ navigation }) {
  const userAuth = useContext(AuthContext);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {

    if (!userAuth.userToken) {
      navigation.navigate(loginName);
    }
  }, []);

  const fetchUsers = () => {
    fetch(
      "https://dcf3-2804-1b0-1903-81d4-3858-2faa-334c-7ffd.ngrok-free.app/api/user",
      {
        method: "GET",
        headers: {
          Origin: "*",
          Accept: "application/json",
          "Content-Type": "application/json;charset=UTF-8",
        },
      }
    )
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));
  };

const [donations, setDonations] = useState([
    {
        id: 1,
        nome: 'Cadeira de rodas',
        descricao: 'Uma cadeira de rodas em bom estado',
        situacao: 'PUBLICADO',
        file: null,
        categoria: 'eletronico',
        categoriaId: 1,
        quantidade: 3,
        vendedorId: 1,
        vendedorNome: 'teste 2',
        userFile: null,
        endereco: {
          id: 1,
          rua: 'rua fudida',
          cidade: 'rolandia',
          uf: 'PR',
          userId: 1,
          userNome: 'teste 2',
        },
        imagemDoacao: require('../../../../assets/cadeira.webp'),
        usuario: {
            idUser: 1,
            nome: 'Maria Silva',
            imagem: require('../../../../assets/imagem_perfil_mickey.webp'),
        },
    },
    {
        id: 2,
        nome: 'Roupas de Inverno',
        descricao: 'Conjunto de roupas quentes para adultos e crianças',
        situacao: 'PUBLICADO',
        file: null,
        categoria: 'Eletronico',
        categoriaId: 1,
        quantidade: 3,
        vendedorId: 1,
        vendedorNome: 'teste 2',
        userFile: null,
        endereco: {
          id: 1,
          rua: 'rua fudida',
          cidade: 'rolandia',
          uf: 'PR',
          userId: 1,
          userNome: 'teste 2',
        },
        imagemDoacao: require('../../../../assets/Jaqueta.jpg'),
        usuario: {
            idUser: 2,
            nome: 'João Oliveira',
            imagem: require('../../../../assets/imagem_perfil_mickey.webp'),
        },
    },
])

return (
    <SafeAreaView style={styles.container}>
      <FlatList 
        keyExtractor={(item) => item.id}
        data={donations}
        renderItem={({ item }) => (
          <View style={styles.homeDonation}>
            <View style={styles.homeDonationName}>
              <Image
                source={item.usuario.imagem}
                style={styles.logoImage}
              />
              <Text style={styles.text}>{item.usuario.nome}</Text>
            </View>
            <View style={styles.homeDonationImage}>
              <Image
                source={item.imagemDoacao}
                style={styles.homeDonationImage}
              />
            </View>
            <View style={styles.homeDonationDescription}>
              <Text style={styles.donationDescriptionTitle}>
                {item.nome}
              </Text>
              <Text style={styles.donationDescription}>
                {item.descricao}
              </Text>
              <Text style={styles.donationDescription}>
                Quantidade disponível: {item.quantidade}
              </Text>
              <Text style={styles.donationDescription}>
                {item.categoria}
              </Text>
            </View>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#a24fb0",
    },
    homeDonation: {
        backgroundColor: "purple",
        marginTop: 50,
    },
    homeDonationName: {
        marginTop: 10,
        padding: 20,
        flexDirection: "row",
    },
    logoImage: {
        width: 75,
        height: 75,
        borderRadius: 100,
        marginTop: 10,
    },
    text: {
        color: "white",
        fontSize: 20,
        marginTop: 30,
        marginLeft: 30,
    },
    homeDonationImage: {
        width: 425,
        height: 425,
        marginTop: 10,
        backgroundColor: "white",
    },
    homeDonationDescription: {
        marginTop: 10,
        padding: 10,
    },
    donationDescriptionTitle: {
        color: "white",
        fontWeight: "bold",
    },
    donationDescription: {
        color: "white",
    },
});