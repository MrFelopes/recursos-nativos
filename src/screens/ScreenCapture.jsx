import { StyleSheet, Text, View } from "react-native";
import * as ScreenCapture from 'expo-screen-capture';
import { Button } from "react-native";
import { useEffect } from "react";
import * as MediaLibrary from 'expo-media-library';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9BDEB8",
    alignItems: "center",
    justifyContent: "center",
  },
  header: {
    backgroundColor: "#B8F5C1",
    width: "100%",
    height: "10%",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    borderWidth: 5,
    borderColor: "#9BDEB8",
  },
  headerTextStyle: {
    fontWeight: "bold",
    fontSize: 25,
  },
});

export default function ScreenCap() {

    useEffect(() => {
        if (permissao()){
            const listener = ScreenCapture.addScreenshotListener(() => {
                alert("Você fez uma captura de tela!")
            }
    )}
    }, [])

    const permissao = async () => {
        const { status } = await MediaLibrary.requestPermissionsAsync()
        return status === 'granted'
    }

    useEffect(() => {
        
    })


    const desativar = async () => {
        await ScreenCapture.preventScreenCaptureAsync()
    }

    const ativar = async () => {
        await ScreenCapture.allowScreenCaptureAsync()
    }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>Captura de tela</Text>
        <Button onPress={ativar} title="Ativar"/>
        <Button onPress={desativar} title="desativar"/>
      </View>

    </View>
  );
}
