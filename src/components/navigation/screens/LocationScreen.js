import React from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const LocationScreen = () => {
    const navigation = useNavigation();

    const goToLogin = () => {
        navigation.navigate('Login');
    };

    const handleSave = () => {
        console.log('Location saved:', { rua, cidade, uf });
    };

    const [rua, onChangeRua] = React.useState('');
    const [cidade, onChangeCidade] = React.useState('');
    const [uf, onChangeUF] = React.useState('');

    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.text}>Rua</Text>
            <TextInput
                style={styles.textInput}
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={rua => onChangeRua(rua)}
                placeholder='Rua'
                value={rua}
            />
            <Text style={styles.text}>Cidade</Text>
            <TextInput
                style={styles.textInput}
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={cidade => onChangeCidade(cidade)}
                placeholder='Cidade'
                value={cidade}
            />
            <Text style={styles.text}>UF</Text>
            <TextInput
                style={styles.textInput}
                editable
                multiline
                numberOfLines={1}
                maxLength={40}
                onChangeText={uf => onChangeUF(uf)}
                placeholder='UF'
                value={uf}
            />
            
            <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
                <Text style={styles.buttonText}>Salvar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a24fb0',
        padding: 20,
    },
    text: {
        color: '#FFFFFF',
        fontSize: 15,
        marginTop: 15,
        marginLeft: 5,
    },
    textInput: {
        backgroundColor: '#FFFFFF',
        height: 50,
        padding: 10,
        borderRadius: 10,
        marginTop: 15,
        fontSize: 15,
    },
    saveButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 25,
    },
    buttonText: {
        color: '#FFFFFF',
    },
});

export default LocationScreen;
