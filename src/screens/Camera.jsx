import { useEffect } from "react";
import { useState } from "react";
import { View } from "react-native";
import Header from "../components/Header";
import { Camera } from "expo-camera";

export default function CameraInfo({navigation}){
    const [hasPermission, setHasPermission] = useState(null);
    const [cameraRef, setCameraRef] = useState(null);
    const [type, setType] = useState(Camera.Constants.Type.back);

    useEffect(() => {
        (async () => {
            const { status } = await Camera.requestCameraPermissionsAsync();
            setHasPermission(status == "granted");
        })();
    }, [])

    if (hasPermission == null){
        return (<View/>)
    } 

    if (hasPermission == false ){
        return (<View/>)
    }

    return (
        <View>
            <Header title="Camera"/>    

            <View>
                <Camera 
                    ref={(ref) => setCameraRef(ref)}
                    type={type}
                    ratio="4:3"
                    zoom={0}
                />
            </View>
        </View>
    )
}