import { View, StyleSheet, Text, Button } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import { useCallback, useRef } from "react";
import { useState } from "react";

export default function VideoEspecial(){
    const [playing, setPlaying] = useState(false);
    const [error, setError] = useState('');
    
    const onStateChange = useCallback((state) => {
        if (state === "ended") {
            setPlaying(false);
            alert("Vídeo finalizado!");
        }
    }, []);

    const togglePlaying = useCallback(() => {
        setPlaying((prev) => !prev);
    }, []);

    return(
        <View>
            <YoutubePlayer
                height = {300}
                play = {playing}
                videoId = {"dQw4w9WgXcQ"}
                onChangeState = {onStateChange}
                onError={ e => { setError(e.error)}}
            />
            <Button title={playing ? "Pausar" : "Tocar"} onPress={togglePlaying} />
            <Text>{error}</Text>
        </View>
    )
}