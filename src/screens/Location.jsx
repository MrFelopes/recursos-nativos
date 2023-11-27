import React, { useEffect, useState } from 'react';
import { View, Button, Alert, Text } from 'react-native';
import MapView, { Marker } from 'react-native-maps';

import * as Location from 'expo-location';

import styles from '../utils/styles';
import Header from '../components/Header';


const Location = () => {

    const [ getLocation, setLocation ] = useState(null);

    useEffect(() => {
        (async () => {
            let { status } = await Location.requestForegroundPermissionsAsync();
            if(status !== 'granted') {
                Alert.alert('Permissão de acesso à localização negada!');
                console.log('Permissão de acesso à localização negada!');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location.coords);
            console.log(location.coords);
        })();
    }, []);

    return (
        <View style={styles.container}>
            <Header title='Localização' />
            <View style={styles.center}>
                {!getLocation
                ?
                    <Text style={styles.text}>Carregando...</Text>
                :
                    <>
                        <Text style={styles.text}>Latitude: {getLocation.latitude ?? '0'}</Text>
                        <Text style={styles.text}>Longitude: {getLocation.longitude ?? '0'}</Text>
                        <View style={{ flex: 1, width: 300 }}>
                        <MapView
                            style={{ flex: 1 }}
                            initialRegion={{
                                latitude: getLocation.latitude,
                                longitude: getLocation.longitude,
                                latitudeDelta: 0.0922,
                                longitudeDelta: 0.0421,
                            }}
                        >
                            <Marker
                                coordinate={{ latitude: getLocation.latitude, longitude: getLocation.longitude }}
                                title="Localização do dispositivo"
                                description="Esta é a atual localização do dispositivo."
                            />
                        </MapView>
                        </View>
                    </>
                }

            </View>
        </View>
    );
}

export default Location;