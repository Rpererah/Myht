import React, { Fragment } from 'react'
import { View, Text, Button,Dimensions } from 'react-native';
import estilo from './estilo'
const altura=Dimensions.get("screen").height

export default class Home extends React.Component {
    render() {
        return ( 
        <View>
            <View style={{flex:1,margin:5,marginLeft:50,marginTop:300}}>
             <Text style={estilo.Texto1}>Clique em Login </Text>
            </View>
            <View style={{marginTop:altura-470}}>
                <Button
                    
                    onPress={() => this.props.navigation.navigate('SobreMenu')}
                    title="Login"
                    color="#7a93ac"
                />
                </View>
            </View>
            
            
        )
    }
}
