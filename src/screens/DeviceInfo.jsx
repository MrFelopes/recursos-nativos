import { StyleSheet, Text, View } from "react-native";
import * as Device from "expo-device";
import { Button } from "react-native";
import { Header } from "react-native/Libraries/NewAppScreen";

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

export default function DeviceInfo() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTextStyle}>Informações do Aparelho</Text>
      </View>
      <View
        style={{
          backgroundColor: "#B8F5C1",
          borderWidth: 5,
          borderColor: "#9BDEB8",
          marginBottom: 10,
          borderRadius: 10,
        }}
      >
        <Text style={{ fontWeight: "bold", textAlign: "center", fontSize: 25 }}>
          Informações do Aparelho
        </Text>
      </View>

      <View
        style={{
          backgroundColor: "#B8F5C1",
          borderWidth: 5,
          borderColor: "#9BDEB8",
          marginTop: 5,
          marginBottom: 5,
          borderRadius: 5,
        }}
      >
        <Text>
          O nome do seu aparelho é:
          {Device.modelName}
        </Text>

        <Text>
          A marca do aparelho é:
          {Device.brand}
        </Text>

        <Text>
          O modelo do aparelho é:
          {Device.modelName}
        </Text>

        <Text>
          O nome completo do aparelho é:
          {Device.deviceName}
        </Text>

        <Text>
          O Design do aparelho é:
          {Device.designName}
        </Text>

        <Text>
          O Ano do lançamento é:
          {Device.deviceYearClass}
        </Text>

        <Text>
          A memória do aparelho é:
          {Device.totalMemory}
        </Text>

        <Text>
          A versão do sistema é a:
          {Device.osBuildId}
        </Text>

        <Text>
          A arquitetura do aparelho é:
          {Device.osInternalBuildId}
        </Text>

        <View style={styles.footer}>
          <Button
            title="Sair"
            style={styles.button}
            color="#2E4237"
            mode="contained"
          />
        </View>
      </View>
    </View>
  );
}
