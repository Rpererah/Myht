import React, { Fragment } from 'react'
import { View, Text } from 'react-native';
import estilo from './estilo'


export default class Notificacao extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <View >
                    <Text style={estilo.Texto}>Veja aqui suas ultimas atualizações</Text>
                </View>
            </View>
        )
    }
}
