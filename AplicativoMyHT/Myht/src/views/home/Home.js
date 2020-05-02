import React, { Component } from 'react';
import  {View,Animated} from 'react-native' 

export default class Home extends React.Component {
    render() {
        return (
            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
                <View >
                    <Text >Welcome to SOBRE!</Text>
                </View>
            </View>
        )
    }
}

