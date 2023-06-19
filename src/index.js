import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Home from "./screens/Home";
import BatteryInfo from "./screens/BatteryInfo";
import DeviceInfo from "./screens/DeviceInfo";
import ScreenOrientation from "./screens/ScreenOrientation";
import { NavigationContainer } from "@react-navigation/native";
import ScreenOrientations from "./screens/ScreenOrientation";
import Notify from "./screens/Notify";
import ContactsInfo from "./screens/ContactInfo";

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
        <Stack.Screen 
            name="ScreenOrientation" 
            component={ScreenOrientations} 
            options={{ title: "Screen Orientation" }}
        />
        <Stack.Screen 
            name="Notificações" 
            component={Notify} 
            options={{ title: "Notificações" }}
        />
        <Stack.Screen 
            name="Contact" 
            component={ContactsInfo} 
            options={{ title: "Contacts Info" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}