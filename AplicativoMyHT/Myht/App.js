import React, { Fragment, Component } from 'react';
import {View,TouchableOpacity,Image,Button, StatusBar} from 'react-native'
import { Home, Login, Sobre,Luzes,Componentes,Notificacao,Despertador} from './src/views';
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
          style={{width:25,height:25,marginLeft:10}}
          />
        </TouchableOpacity>

      </View>
    )
  }
}
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
const LuzesStackNavigator=createStackNavigator({
  Home:{
    screen:Luzes,
    navigationOptions:({navigation})=>({
      title:'Controle de iluminação',
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor:'#182E43',
      },
      headerTintColor:'white',
    })
  }
})
const DespertadorStackNavigator=createStackNavigator({
  Home:{
    screen:Despertador,
    navigationOptions:({navigation})=>({
      title:'Despertador',
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor:'#182E43',
      },
      headerTintColor:'white',
    })
  }
})
const ComponentesStackNavigator=createStackNavigator({
  Home:{
    screen:Componentes,
    navigationOptions:({navigation})=>({
      title:'Meus componentes',
      headerLeft:()=><NavigationDrawerStructure navigationProps={navigation}/>,
      headerStyle:{
        backgroundColor:'#182E43',
      },
      headerTintColor:'white',
    })
  }
})
const NotificacaoStackNavigator=createStackNavigator({
  Home:{
    screen:Notificacao,
    navigationOptions:({navigation})=>({
      title:'Notificações',
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
    LuzesMenu: {
      screen:LuzesStackNavigator,
      navigationOptions :{
        drawerLabel: 'Luzes',
        drawerIcon:({focused,tintColor}) =>(
            <Image
            source={require('./resources/img/7.png')}
            style={{width:30,height:30}}
            />
        )
    }
    },
    DespertadorMenu: {
      screen:DespertadorStackNavigator,
      navigationOptions :{
        drawerLabel: 'Despertador',
        drawerIcon:({focused,tintColor}) =>(
            <Image
            source={require('./resources/img/8.png')}
            style={{width:30,height:30}}
            />
        )
    }
    },
    ComponentesMenu: {
      screen:ComponentesStackNavigator,
      navigationOptions :{
        drawerLabel: 'Meus componentes',
        drawerIcon:({focused,tintColor}) =>(
            <Image
            source={require('./resources/img/10.png')}
            style={{width:30,height:30}}
            />
        )
    }
    },
    NotificacaoMenu: {
      screen:NotificacaoStackNavigator,
      navigationOptions :{
        drawerLabel: 'Minhas notificações',
        drawerIcon:({focused,tintColor}) =>(
            <Image
            source={require('./resources/img/9.png')}
            style={{width:25,height:25}}
            />
        )
    }
    },
    

  },
  {
    //cor do Conteudo do drawer fonts e tamanho
    contentOptions: {
      marginTop:100,
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

