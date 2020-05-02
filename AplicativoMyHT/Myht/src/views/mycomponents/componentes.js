import React, { Fragment } from 'react'
import { View, Text } from 'react-native';
import estilo from './estilo'


export default class Componentes extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <View >
                    <Text style={estilo.Texto}>Veja a lista de componentes que você possue</Text>
                </View>
            </View>
        )
    }
}
