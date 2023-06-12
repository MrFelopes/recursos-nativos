import { StyleSheet, Text, View, Button } from 'react-native';
import Header from '../components/Header';
import * as ScreenOrientation from 'expo-screen-orientation';


async function padrao() {
   await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.DEFAULT
  )
}
async function ParaBaixo() {
   await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.PORTRAIT_DOWN
  )
}
async function DeitarDireita() {
   await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT
  )
}
async function DeitarEsquerda() {
   await ScreenOrientation.lockAsync(
    ScreenOrientation.OrientationLock.LANDSCAPE_LEFT
  )
}

export default function ScreenOrientations() {
  return (
    <View style={styles.container}>
      <Header />
      <View style={styles.content}>
        <Text style={styles.contentTextStyle}>Orientação da tela</Text>
        <Button title="Padrão" onPress={padrao} />
        <Button title="Para Baixo" onPress={ParaBaixo} />
        <Button title="Deitar para a direita" onPress={DeitarDireita} />
        <Button title="Para a esquerda" onPress={DeitarEsquerda} />
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        height: "100%",
        backgroundColor: "#9BDEB8"
    },
});