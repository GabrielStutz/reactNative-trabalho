import * as React from "react";
import { StyleSheet, Text, View } from "react-native";

export default function HomeScreen() {
    return (
        <View style={styles.View}>
            <Text onPress={() => alert("This is the home screen.")} style={styles.Text}>Home Screen</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    View: {
        flex: 1,
        backgroundColor: "#a24fb0",
        alignItems: "center",
        justifyContent: "center",
    },
    Text: {
        color: 'white',
        fontSize: 26,
        fontWeight: "bold",
    },
});