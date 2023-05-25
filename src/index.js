import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import BatteryInfo from "./screens/BatteryInfo";
import DeviceInfo from "./screens/DeviceInfo";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();

export default function RootNavigation({navigation}) {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
            name="Home"
            component={Home}
            options={{ title: "Home" }} 
        />
        <Stack.Screen 
            name="DeviceInfo" 
            component={DeviceInfo} 
            options={{ title: "Device Info" }}    
        />
        <Stack.Screen 
            name="BatteryInfo" 
            component={BatteryInfo} 
            options={{ title: "Battery Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}