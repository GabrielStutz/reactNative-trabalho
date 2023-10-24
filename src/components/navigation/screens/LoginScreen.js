import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, SafeAreaView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

const LoginScreen = () => {
    const navigation = useNavigation();
    
    const goToRegister = () => {
        navigation.navigate('Register');
        };

    return(
            <SafeAreaView>
                <TouchableOpacity>
                    <Text>Login</Text>
                </TouchableOpacity>
                <Text onPress={goToRegister}>Cadastrar</Text>
            </SafeAreaView>
    );
}

export default LoginScreen;