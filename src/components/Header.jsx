import { Text, View, StyleSheet } from 'react-native';
import * as Battery from 'expo-battery';
import { useState } from 'react';
import { useEffect } from 'react';

const styles = StyleSheet.create({
    header: {
        paddingTop: 30,
        backgroundColor: "#606",
        paddingBottom: 5,
        paddingHorizontal: 5,
    },
    headerTextStyle: {
        marginTop: 10,
        color: 'white',
        fontWeight: 'bold',
        fontSize: 35,
        textAlign: 'center'
    },
});

export default function Header({ title }) {

    const [ nivelBateria, setNivelBateria ] = useState()
    const [background, setBackground] = useState()
  
    const mudarCor = () => {
      if(nivelBateria <= 4) {
        setBackground("#fc0b03")
      } else if(nivelBateria <= 29) {
        setBackground("#fca903")
      } else if(nivelBateria <= 59) {
        setBackground("#fcf803")
      } else {
        setBackground("#a83297")
      }
    }

    async function bateria() {
        const nivel = await Battery.getBatteryLevelAsync()
        setNivelBateria(nivel * 100)
      }

      useEffect(() => {
        bateria()
        mudarCor()
      }, [{nivelBateria}]);
return (
    <View style={styles.header}>
        <Text style={{backgroundColor: background}}>
            {title}
        </Text>
    </View>
)
}