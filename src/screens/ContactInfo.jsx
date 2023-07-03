import { StyleSheet, View } from "react-native";
import * as Contacts from 'expo-contacts';
import { Button, Text } from "react-native-paper";
import { useCallback, useEffect, useState } from "react";
import Items from "../components/Items";
import { FlatList } from "react-native";
import Header from "../components/Header";
import { useFocusEffect } from "@react-navigation/native";
import { TouchableOpacity } from "react-native";

export default function ContactInfo({navigation}) {
    const [contacts, setContacts] = useState([{}]);
    async function carregarContatos() {
        const {data} = await Contacts.getContactsAsync({
            fields: [
                Contacts.Fields.Emails, 
                Contacts.Fields.PhoneNumbers
            ],
        });
        setContacts(data); 
    }

    useFocusEffect(
        useCallback(() => {
            (async () => {
                const {status} = await Contacts.requestPermissionsAsync();
                    if (status === 'granted') {
                        carregarContatos();
                    }
                })();
            }, []) 
    );

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
            <Header title="Informações de Contatos" style={styles.header}/>
            <View>
                {
                    contacts
                        ?
                            <FlatList
                            style={{flex: 1, gap: 10}}
                            data={contacts}
                            keyExtractor={(item) => item?.id?.toString()}
                            renderItem={({item}) => (
                                <TouchableOpacity onPress={() => navigation.navigate("Home")}>
                                    <View>
                                        <Items
                                            key={item.id}
                                            item={item}
                                        />
                                    </View>
                                </TouchableOpacity>
                                    )}
                            />                    
                        : <></>
                }
            </View>
        </View>
    );

    
}