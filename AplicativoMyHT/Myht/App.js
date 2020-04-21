import React, { Fragment, Component } from 'react';
import {View,TouchableOpacity,Image,Button, StatusBar} from 'react-native'
import { Home, Login, Sobre } from './src/views';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { createDrawerNavigator } from 'react-navigation-drawer';

class NavigationDrawerStructure extends Component{
  toggleDrawer=()=>{
    this.props.navigationProps.toggleDrawer();
  };
  render(){
    return(
      <View
      style={{flexDirection:'row'}}
      >
        <StatusBar
        backgroundColor="#304558"
        barStyle="light-content"
      />
        <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
          <Image
          source={require('./resources/img/6.png')}
          style={{width:25,height:25,marginLeft:5}}
          />
        </TouchableOpacity>

      </View>
    )
  }
}
const HomeStackNavigator=createStackNavigator({
  Home:{
    screen:Home,
    navigationOptions:({navigation})=>({
      title:'Tela Inicial',
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor:'#182E43',
      },
      headerTintColor:'white',
    })
  }
})
const LoginStackNavigator=createStackNavigator({
  Home:{
    screen:Login,
    navigationOptions:({navigation})=>({
      title:'Tela de Login',
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor:'#182E43',
      },
      headerTintColor:'white',
    })
  }
})
const SobreStackNavigator=createStackNavigator({
  Home:{
    screen:Sobre,
    navigationOptions:({navigation})=>({
      title:'Sobre',
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor:'#182E43',
      },
      headerTintColor:'white',
    })
  }
})

const MyDrawerNavigator = createDrawerNavigator(
  {
    HomeMenu: {
      screen:HomeStackNavigator,
      navigationOptions: {
        drawerLabel: 'Home',
        drawerIcon: ({ focused, tintColor }) => (
            <Image
                source={require('./resources/img/1.png')}
                style={{ width: 30, height: 30 }}
            />
        )
    }
    },
    LoginMenu: {
      screen:LoginStackNavigator,
      navigationOptions :{
        drawerLabel: 'Login',
        drawerIcon:({focused,tintColor}) =>(
            <Image
            source={require('./resources/img/3.png')}
            style={{width:30,height:30}}
            />
        )
    }
    },
    SobreMenu: {
      screen:SobreStackNavigator,
      navigationOptions:{
        drawerLabel: 'Sobre',
        drawerIcon:({focused,tintColor}) =>(
            <Image
            source={require('./resources/img/2.png')}
            style={{width:30,height:30}}
            />
        )
    }
    },

  },
  {
    //cor do Conteudo do drawer fonts e tamanho
    contentOptions: {
      labelStyle: {
        fontSize: 16
      },
      activeTintColor:'#ff7821',
      inactiveTintColor: 'white',
    },
    //cor de fundo do DRAWER
    drawerBackgroundColor: '#2A344D',
  }
)
export default createAppContainer(MyDrawerNavigator);

