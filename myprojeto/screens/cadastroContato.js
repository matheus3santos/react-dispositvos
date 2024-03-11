import { Center } from "@gluestack-ui/themed-native-base";
import React from "react";
import { StyleSheet, Text, View, Button, Box, Icon, Stack } from "react-native";
import { Avatar, ListItem } from "react-native-elements";
import { Input } from '@rneui/themed';



const inserirDados = ({ route, navigation }) => {

    const [getData, setData] = useState([]);

    useEffect(() => {
        async function resgatarDados() {
            const result = await axios(
                'http://localhost:5000/contatos',
            );
            setData(result.data);
        }
        resgatarDados();

    })
}

const CadastroContato = ({ navigation }) => {
        return (
            <View style={[styles.container, {
                flexDirection: "column"
            }]}>

                <View style={[styles.input, {
                    align: "center"
                }]}>

            
                </View>

                <View align='center' spacing={5} style={[styles.input]}>
                    <Text h1 >Nome</Text>
                    <Input placeholder="NOME" />
                    <Text h1>Email</Text>
                    <Input placeholder="EMAIL" />
                    <Text h1 >Telefone</Text>
                    <Input placeholder="( )00000-0000"/>
                </View>
                <View style={[styles.input]}>
                    <Button title="Salvar" style={{ flex: 1, backgroundColor: "green" }} />
                </View>
               
                
            </View>
        )
    }


const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 40,
    },
    input: {
        paddingBottom: 20,
    },
    img: {
        padding: 20,
        justifyContent: 'center',
        alignItems: 'center',
    }
});

export default CadastroContato;