import { StyleSheet, View } from "react-native";
import * as Contacts from 'expo-contacts';
import * as Battery from 'expo-battery';
import * as Device from 'expo-device';
import { Button, Text } from "react-native-paper";
import { useCallback, useEffect, useState } from "react";
import { Item } from "react-native-paper/lib/typescript/src/components/Drawer/Drawer";
import { FlatList } from "react-native-web";

export default function ContactsInfo({navigation}) {
    const [contacts, setContacts] = useState([{}]);
    async function carregarContatos() {
        const {data} = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails, 
                Contacts.Fields.PhoneNumbers
            ],
        });
        setContacts(data);
        console.log(contacts);
    }

    useEffect((
        useCallback(() => {
            (async () => {
                const {status} = await Contacts.requestPermissionsAsync();
                    if (status === 'granted') {
                        carregarContatos();
                    }
                })();
            }) 
    ), []);
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
            <Header
                title="Informações de Contatos"
            />
            <View>
                {
                    contacts
                        ? <FlatList
                            style={{flex: 1, gap: 10}}
                            data={contacts}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({item}) => {
                                <Item
                                    item={item}
                                />
                            }}
                            />                    
                        :<></>
                }
            </View>
        </View>
    );

    
}