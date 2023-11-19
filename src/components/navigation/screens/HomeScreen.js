import React, { useEffect } from "react";
import { StyleSheet, Text, View, SafeAreaView, Image } from "react-native";

export default function HomeScreen() {

    useEffect(() => {
        fetchUsers();
      }, []);    
    const fetchUsers =  () => {
        fetch('https://dcf3-2804-1b0-1903-81d4-3858-2faa-334c-7ffd.ngrok-free.app/api/user', { method: 'GET', headers: {
            Accept: "application/json",
            "Content-Type": "application/json;charset=UTF-8",
        } })
        .then(res => res.json())
        .then((data => console.log(data)))
        .catch(error => console.log(error));
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeDonation}>
                <View style={styles.homeDonationName}>
                    <Image source={require('../../../../assets/imagem_perfil_mickey.webp')} style={styles.logoImage} />
                    <Text style={styles.text}>Mickey Mouse</Text>
                </View>
                <View style={styles.homeDonationImage}>
                    <Image source={require('../../../../assets/cadeira_zeus.jpg')} style={styles.homeDonationImage}></Image>
                </View>
                <View style={styles.homeDonationDescription}>
                    <Text style={styles.donationDescriptionTitle}>Cadeira Olympians Zeus</Text>
                    <Text style={styles.donationDescription}>
                        Tamanho = {'\n'}
                        Altura: 126-136 cm {'\n'}
                        Largura: 67-70 cm {'\n'}
                        Profundidade: 67 cm {'\n'}
                        Altura do Encosto: 82 cm com ajuste angular de 90-180 graus {'\n'}
                        Altura do Assento ao Chão: 48-58 cm
                    </Text>
                </View>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a24fb0',
    },
    homeDonation: {
        backgroundColor: 'purple',
        marginTop: 50,
    },
    homeDonationName: {
        marginTop: 10,
        padding: 20,
        flexDirection: 'row',
    },
        logoImage: {
        width: 75,
        height: 75,
        borderRadius: 100,
        marginTop: 10,
    },
    text: {
        color: 'white',
        fontSize: 20,
        marginTop: 30,
        marginLeft: 30,
    },
    homeDonationImage: {
        width: 425,
        height: 425,
        marginTop: 10,
    },
    homeDonationDescription: {
        marginTop: 10,
        padding: 10,
    },
    donationDescriptionTitle: {
        color: 'white',
        fontWeight: 'bold',
    },
    donationDescription: {
        color: 'white',
    }
});