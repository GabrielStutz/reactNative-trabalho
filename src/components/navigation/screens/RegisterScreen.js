import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const RegisterScreen = () => {
    const navigation = useNavigation();

    const goToHome = () => {
        navigation.navigate('Home');
    };
    const goToRegister = () => {
    navigation.navigate('Register');
    };
    const goToLogin = () => {
    navigation.navigate('Login');
    };
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.registerButton} onPress={goToHome}>
                <Text style={styles.buttonText}>Cadastrar</Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a24fb0',
        padding: 20,
      },
    registerButton: {
        backgroundColor: 'purple',
        padding: 10,
        borderRadius: 5,
        alignItems: 'center',
        marginTop: 5,
      },
      buttonText: {
        color: '#FFFFFF'
      }
})
export default RegisterScreen;