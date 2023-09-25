import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import Header from "../components/Header";
import * as LocalAuthentication from "expo-local-authentication";

export default function LocalAuthentificator({ navigation }) {
    const autenticar = async () => {
        try {
            const disponivel = await LocalAuthentication.hasHardwareAsync();
            console.log(disponivel);
            if(!disponivel){
                alert("Autenticação não disponível")
                return
            }
            const { error } = await LocalAuthentication.authenticateAsync();
                if(!error){
                    alert("Autenticado com sucesso!")
                }
                else{
                    console.log(error);
                    alert("Erro na autenticação!")
                }
        } catch (error) {
            console.log(error)
        }
    }

  return (
    <View style={styles.container}>
        <Header title="Autenticação Local"/>	
        <View style={{ }}>
            <TouchableOpacity 
                style={{ backgroundColor: "#6750a4", border: "2px #6750a4 solid"}}
                onPress={autenticar}    
            >
                <Text style={{ color: "white"}}> Auteticar </Text>
            </TouchableOpacity>
        </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    height: "100%",
    backgroundColor: "#FFFFFF",
  },
});