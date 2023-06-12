import { StyleSheet, View } from "react-native";
import * as Notifications from 'expo-notifications';
import * as Battery from 'expo-battery';
import * as Device from 'expo-device';
import { Button, Text } from "react-native-paper";
import { useEffect, useState } from "react";

export default function Notify({navigation}) {
    const [expoToken, setExpoToken] = useState()
    const [ nivelBateria, setNivelBateria ] = useState()

    const [ultimaNotificacao, setUltimaNotificacao] = useState(Notifications.useLastNotificationResponse());

    async function bateria() {
      const nivel = await Battery.getBatteryLevelAsync()
      setNivelBateria(nivel * 100)
    }

    useEffect(() => {
      bateria()
    }, [])

    async function notificarExpo(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Poggers",
                subtitle: "pog",
                body: "PogChamp",
            },
            trigger : {seconds: 3}
        })
        setExpoToken(token);
    };

    async function notifRetorno(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Página de dispositivo",
                body: "Visite a página de dispositivo",
            },
            trigger : {seconds: 3}
        })
        setExpoToken(token);
    };

    async function notificarBateria(){
        const token = await Notifications.scheduleNotificationAsync({
            content: {
                title: "Bateria",
                subtitle: "Nível da bateria",
                body: "Nível da bateria: "+ nivelBateria,
            },
            trigger: {seconds: 3}
        });
        setExpoToken(token);
    };

    useEffect(() => {
      if (ultimaNotificacao?.notification?.request?.content?.body === "Visite a página de dispositivo") {
        navigation.navigate("DeviceInfo")
        setTimeout(() => {
          setUltimaNotificacao(null)
        }, 2000)
        
      }
    }, [ultimaNotificacao])

    async function exibirAlerta(){
      alert(ultimaNotificacao.notification.request.content.body)
    };

    async function avaliarDispositivo(){
      alert("Seu aparelho " + Device.modelName + " é excelente.")
    };

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


    return (
        <View style={styles.container}>
            <Text style={styles.contentTextStyle}>Notificações</Text>
            <Text>Expo Token: {expoToken} </Text>
            <Button title="Enviar notificação" onPress={async () => notificarExpo()}>Enviar notificação</Button>
            <Button title="Notificar a bateria" onPress={async () => notificarBateria()}>Notificar Bateria</Button>
            <Button title="Ver última notificação" onPress={async () => exibirAlerta()}>Ver última notificação</Button>
            <Button title="Ir à página de dispositivo" onPress={() => {navigation.navigate("DeviceInfo")}}>Ir à página de dispositivo</Button>
            <Button title="Avalie seu dispositivo" onPress={async () => avaliarDispositivo()}>Avalie seu dispositivo</Button>
            <Button title="Notificação de retorno" onPress={async () => notifRetorno()}>Notificação de retorno</Button>
        </View>
    );

    
}