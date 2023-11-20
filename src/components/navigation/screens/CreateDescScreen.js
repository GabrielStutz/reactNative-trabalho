import React, { useState } from "react";
import { View, StyleSheet, Text, SafeAreaView, Button, TextInput, TouchableOpacity, FlatList } from "react-native";
import { textStyles } from "../../Fonts.js";

export default function DescScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [descricao, setDescricao] = useState("");
  const [quantidade, setQuantidade] = useState("");
  const [categoria, setCategoria] = useState("");
  const [isModalVisible, setIsModalVisible] = useState(false);

  const categorias = [
    { id: 1, label: "Categoria 1" },
    { id: 2, label: "Categoria 2" },
    { id: 3, label: "Categoria 3" },
  ];

  const handleAdicionar = () => {
    console.log('Nome:', nome);
    console.log('Quantidade:', quantidade);
    console.log('Categoria:', categoria);
    console.log('Descricao:', descricao);
  };

  const renderCategoriaItem = ({ item }) => (
    <TouchableOpacity
      style={styles.categoriaItem}
      onPress={() => {
        setCategoria(item.label);
        setIsModalVisible(false);
      }}
    >
      <Text>{item.label}</Text>
    </TouchableOpacity>
  );

  const renderCategoriaList = () => (
    <FlatList
      data={categorias}
      renderItem={renderCategoriaItem}
      keyExtractor={(item) => item.id.toString()}
    />
  );

  return (
    <SafeAreaView style={styles.container}>
    <Text></Text>
      <Text style={textStyles.subtituloNeg}>Fazer doação</Text>
      <View style={styles.containerText}>
        <Text style={textStyles.paragrafoNeg}>Nome do produto</Text>
        <TextInput
          style={styles.textInput}
          editable
          numberOfLines={1}
          maxLength={40}
          onChangeText={(nome) => setNome(nome)}
          placeholder="Nome"
          value={nome}
        />
      <Text></Text>
        <View style={styles.inlineContainer}>
          <View style={styles.inlineItem}>
            <Text style={textStyles.paragrafoNeg}>Quantidade</Text>
            <TextInput
              style={styles.quant}
              keyboardType="numeric"
              placeholder="Quantidade"
              value={quantidade}
              onChangeText={(quantidade) => setQuantidade(quantidade)}
            />
          </View>
          <View style={styles.inlineItem}>
            <Text style={textStyles.paragrafoNeg}>Categoria</Text>
            <TouchableOpacity
              style={styles.categoriaButton}
              onPress={() => setIsModalVisible(true)}
            >
              <Text style={{ color: "#000" }}>{categoria || "Selecione a categoria"}</Text>
            </TouchableOpacity>
            {isModalVisible && renderCategoriaList()}
          </View>
        </View>

        <Text style={textStyles.paragrafoNeg}>Descricao</Text>
        <TextInput
          style={styles.textInputDesc}
          editable
          multiline
          numberOfLines={5}
          maxLength={40}
          onChangeText={(descricao) => setDescricao(descricao)}
          placeholder="Descricao"
          value={descricao}
        />
        <TouchableOpacity 
          style={styles.adicionarButton} 
          onPress={handleAdicionar}
        >
          <Text style={{ color: "#000", fontSize: 16, fontWeight: "bold", }}>Adicionar</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#a24fb0",
    padding: 20,
  },
  containerText: {
    top: 40,
    marginLeft: 50,
    marginRight: 50,
  },
  textInput: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    height: 50,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    fontSize: 15,
  },
  categoriaButton: {
    backgroundColor: "#FFFFFF",
    height: 40,
    width: 150,
    padding: 10,
    borderRadius: 10,
    marginTop: 15,
    fontSize: 15,
    alignItems: 'center',
  },
  adicionarButton: {
    backgroundColor: "#FFFFFF",
    height: 40,
    borderRadius: 10,
    marginTop: 15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textInputDesc: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    height: 50,
    borderRadius: 10,
    marginTop: 15,
    fontSize: 15,
    height: 150,
  },
  quant: {
    textAlign: "center",
    backgroundColor: "#FFFFFF",
    height: 50,
    width: 70,
    borderRadius: 10,
    marginTop: 15,
    fontSize: 15,
  },
  inlineContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inlineItem: {
    flex: 1,
    marginRight: 10,
  },
  categoriaItem: {
    padding: 1,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
});