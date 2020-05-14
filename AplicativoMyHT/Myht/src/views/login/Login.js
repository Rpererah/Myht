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
import auth from '@react-native-firebase/auth';

const mensagemErro="[auth/user-not-found] There is no user record corresponding to this identifier. The user may have been deleted."
const mensagemErro2="[auth/wrong-password] The password is invalid or the user does not have a password."

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
    height:50,
    width:'80%',
    borderRadius:7,
    fontSize:20,
    padding:10,
    marginBottom:15
  },
  button:{
    marginTop:'3%',
    backgroundColor:'#3E92CC',
    width:'80%',
    height:40,
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
  const [offset]=useState(new Animated.ValueXY({x:0,y:90}));
  const [opacity]=useState(new Animated.Value(0));
  const  [logo]=useState(new Animated.ValueXY({x:250,y:300}));

const [usuario, setUsuario] = useState("");
const [senha, setSenha] = useState("");

  isLogado=()=>{    
    try{
      auth()
  .signInWithEmailAndPassword(usuario, senha)
  .then(() => {
    alert('usuario logado');
  }).catch(function(error){
  var errorMessage = error.message;
  if(errorMessage===mensagemErro || errorMessage===mensagemErro2) {
    alert("Usuario ou senha incorreto")
  }
  })
    }catch(erro){
      console.log(erro)
    }
  }

  cadastrar=()=>{
    try{
      auth()
  .createUserWithEmailAndPassword(usuario, senha)
  .then(() => {
    alert('Usuario Criado Com Sucesso');
  })
  .catch(error => {
    if (error.code === 'auth/email-already-in-use') {
      alert('esse usuario ja está em uso');
    }

    if (error.code === 'auth/invalid-email') {
      console.log('formato de email invalido');
    }

    console.error(error);
  });
    }catch(erro){
      console.log(erro)
    }
  }



  useEffect(()=>{
    keyDidShowListener=Keyboard.addListener('keyboardDidShow',keyboardDidShow);
    keyDidHideListener=Keyboard.addListener('keyboardDidHide',keyboardDidHide);
    Animated.parallel([

      Animated.spring(offset.y,{
      toValue:0,
      speed:3,
      bounciness:18,
      useNativeDriver:false
    }),
    Animated.timing(opacity,{
      toValue:1,
      duration:300,
      useNativeDriver:false
  
    }),

    ]).start();
    
  },[])

  function keyboardDidShow(){
Animated.parallel([
  Animated.timing(logo.x,{
    toValue:100,
    duration:100,
    useNativeDriver:false
  }),
  Animated.timing(logo.y,{
    toValue:150,
    duration:100,
    useNativeDriver:false
  })

]).start();
  }
  function keyboardDidHide(){
    Animated.parallel([
      Animated.timing(logo.x,{
        toValue:250,
        duration:300,
        useNativeDriver:false
      }),
      Animated.timing(logo.y,{
        toValue:300,
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
                marginBottom:"3%"
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
                secureTextEntry={false}
                onChangeText={text=>setUsuario(text)}
                ></TextInput>
                <TextInput
                style={estilo.inputs}
                placeholder="Senha"
                autoCorrect={false}
                secureTextEntry={true}
                onChangeText={text=>setSenha(text)}
                
                ></TextInput>
                <TouchableOpacity
                onPress={isLogado}
                style={estilo.button}
                >
               <Text
               style={estilo.txtButton}
               >Login</Text>
                </TouchableOpacity>
                <TouchableOpacity
                onPress={cadastrar}
                >
               <Text
               style={estilo.txtButton2}
               >Cadastrar-se</Text>
                </TouchableOpacity>
                </Animated.View>

          </KeyboardAvoidingView>
      )
  }

export default Login;