import { StyleSheet, View } from "react-native";
import { Text } from "react-native-paper";
import { Gyroscope, Magnetometer } from 'expo-sensors';
import Header from "../components/Header";
import { useState } from "react";
import { useEffect } from "react";

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



export default function Sensors() {
    const [ giroscopio, setGiroscopio ] = useState({})
    const [ magnetometro, setMagnetometro ] = useState({})

    useEffect(() => {
        Gyroscope.addListener(giroscopioListener);
        Magnetometer.addListener(magnetometroListener);
    }, [])

    const giroscopioListener = (data) => {
        setGiroscopio(data)
    }
    const magnetometroListener = (data) => {
        setMagnetometro(data)
    }

    return (
        <View style={styles.container}>
            <Header title="Sensores" style={styles.header}/>
            <View>
                <Text style={{fontWeight: "bold", fontSize: 25}}>Giroscópio:{'\n'}
                    X: {giroscopio.x}{'\n'}
                    Y: {giroscopio.y}{'\n'}
                    Z: {giroscopio.z}{'\n'}
                </Text>
                <Text style={{fontWeight: "bold", fontSize: 25}}>Magnetômetro:{'\n'}
                    X: {magnetometro.x}{'\n'}
                    Y: {magnetometro.y}{'\n'}
                    Z: {magnetometro.z}{'\n'}
                </Text>
            </View>
        </View>
    )
}