import * as React from "react";
import { StyleSheet, Text, View, Image, TouchableOpacity } from "react-native";
import { useNavigation } from '@react-navigation/native';
import coracao from "../../../../assets/Coracao.png";
import rosto from "../../../../assets/Rosto.png";
import { SafeAreaView } from "react-native-safe-area-context";
const UserScreen = () => {
  const navigation = useNavigation();

  const FotoPerfilURL = 'https://vivolabs.es/wp-content/uploads/2022/03/perfil-mujer-vivo.png';

  const handleTextClick = () => {
  };
  const irParaInfo = () => {
    navigation.navigate('Info');
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{ uri: FotoPerfilURL }}
          style={styles.avatarFoto}
        />
      </View>
      <Text style={styles.Nome}>Maria Fiorillo</Text>
      <Text style={styles.Cidade}>Londrina - PR</Text>
      <View style={styles.Divisoria} />
      <View style={styles.containerInf}>
        <Image source={rosto} style={styles.image} />
        <TouchableOpacity onPress={irParaInfo}>
          <Text style={styles.Informacoes}>Informações pessoais</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Divisoria} />
      <View style={styles.containerDoa}>
        <Image source={coracao} style={styles.image} />
        <TouchableOpacity onPress={handleTextClick}>
          <Text style={styles.Doacoes}>Minhas doações</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.Divisoria} />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#a24fb0',
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageContainer: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginTop: -150,
  },
  avatarFoto: {
    width: 130,
    height: 130,
    borderRadius: 100,
  },
  Nome: {
    marginTop: 20,
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
  },
  Cidade: {
    fontSize: 18,
    color: 'white',
  },
  Divisoria: {
    height: 2,
    backgroundColor: 'white',
    width: '80%',
    marginTop: 20,
    marginBottom: 20,
  },
  containerInf: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 16,
  },
  containerDoa: {
    flexDirection: 'row',
    alignItems: 'center', 
    padding: 16,
  },
  image: {
    width: 20,
    height: 20,
    marginRight: 16,
  },
  Informacoes: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
  Doacoes: {
    fontWeight: 'bold',
    fontSize: 25,
    color: 'white',
  },
});
export default UserScreen;