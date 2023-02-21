import React from "react";
import { Image, StyleSheet, Text, View } from "react-native";

import logo from "../../../assets/logo.png";

export default function Topo() {
    return <View style={styles.topo}>
        <Image source={logo} style={styles.imagem}/>
        <Text style={styles.boasVindas}>Olá Marcelo</Text>
        <Text style={styles.legenda}>Encontre os melhores produtores</Text>
    </View>
}

const styles = StyleSheet.create({
    topo:{
        backgroundColor: "#F6F6F6",
        padding: 16,
    },
    imagem:{
        width: 70,
        height: 28
    },
    boasVindas:{
        marginTop: 24,
        fontSize: 26,
        lineHeight: 42,
        fontWeight: "bold",
        color: "#000000"
    },
    legenda:{
        fontSize: 16,
        lineHeight: 26
    }

})