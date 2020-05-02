import React, { Component,useState,useEffect } from 'react';
import  {
  View,
  Animated,
  Text,
  TextInput,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  StyleSheet,
  Keyboard
} from 'react-native' ;
import { func } from 'prop-types';


const estilo=StyleSheet.create({
  background:{
    flex: 1,
    backgroundColor:'#E3F6F8',
  },
  containerLogo:{
    flex:1,
    alignItems:'center',
  },
  container:{
    flex:1,
    justifyContent:'center',
    alignItems:'center'
  },
  inputs:{
    backgroundColor:'white',
    height:55,
    width:'80%',
    borderRadius:7,
    fontSize:20,
    padding:10,
    marginBottom:'4%'
  },
  button:{
    marginTop:'3%',
    backgroundColor:'#3E92CC',
    width:'80%',
    height:43,
    borderRadius:7,
    alignItems:'center',
    justifyContent:'center',
  },
  txtButton:{
    fontSize:20,
    color:'#F5F5FA'
  },
  txtButton2:{
    marginBottom:'20%',
    marginTop:'3%',
    fontSize:18
  },
})



function Login() {
  const [offset]=useState(new Animated.ValueXY({x:0,y:95}));
  const [opacity]=useState(new Animated.Value(0));
  const  [logo]=useState(new Animated.ValueXY({x:240,y:300}));

  useEffect(()=>{
    keyDidShowListener=Keyboard.addListener('keyboardDidShow',keyboardDidShow);
    keyDidHideListener=Keyboard.addListener('keyboardDidHide',keyboardDidHide);
    Animated.parallel([

      Animated.spring(offset.y,{
      toValue:0,
      speed:4,
      bounciness:18,
      useNativeDriver:false
    }),
    Animated.timing(opacity,{
      toValue:1,
      duration:200,
      useNativeDriver:false
    }),

    ]).start();
    
  },[])

  function keyboardDidShow(){
Animated.parallel([
  Animated.timing(logo.x,{
    toValue:150,
    duration:100,
    useNativeDriver:false
  }),
  Animated.timing(logo.y,{
    toValue:200,
    duration:100,
    useNativeDriver:false
  })

]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:300,
        duration:100,
        useNativeDriver:false
      }),
      Animated.timing(logo.y,{
        toValue:400,
        duration:300,
        useNativeDriver:false
      })
    
    ]).start();
    
  }
  return (
        
          <KeyboardAvoidingView
           style={estilo.background}
           
          >
              <View
              style={estilo.containerLogo}
              >
              <Animated.Image
              style={{
                height:logo.x,
                width:logo.y,
              }}
                source={require('./../../../resources/img/LHT.png')}
                />
              </View>
              <Animated.View
              style={[
                estilo.container,{
                  opacity:opacity,
                  transform:[
                    {
                      translateY:offset.y
                    }
                  ]
                }
              ]}
              >
                <TextInput
                style={estilo.inputs}
                placeholder="E-mail"
                autoCorrect={false}
                onChangeText={()=>{}}
                ></TextInput>
                <TextInput
                style={estilo.inputs}
                placeholder="Senha"
                autoCorrect={false}
                onChangeText={()=>{}}
                
                ></TextInput>
                <TouchableOpacity
                style={estilo.button}
                >
               <Text
               style={estilo.txtButton}
               >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity>
               <Text
               style={estilo.txtButton2}
               >Cadastrar-se</Text>
                </TouchableOpacity>
                </Animated.View>

          </KeyboardAvoidingView>
      )
  }

export default Login;