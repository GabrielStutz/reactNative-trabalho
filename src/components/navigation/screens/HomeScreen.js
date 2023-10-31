import * as React from "react";
import { StyleSheet, SafeAreaView, View, Image, Text} from "react-native";

export default function HomeScreen() {
    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.homeDonationTitle}>
                <Image source={require('../../../../assets/imagem_perfil_mickey.webp')} style={styles.logoImage} />
                <Text style={styles.text}>Mickey Mouse</Text>
            </View>
            <View style={styles.homeDonationImage}>
                <Image></Image>
            </View>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#a24fb0',
    },
    homeDonationTitle: {
        backgroundColor: 'purple',
        marginTop: 50,
        padding: 20,
        flexDirection: 'row',
    },
    homeDonationImage: {

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
});