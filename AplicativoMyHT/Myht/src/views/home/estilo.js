import {StyleSheet,Dimensions} from 'react-native';
const largura = Dimensions.get("screen").width;

const estilo = StyleSheet.create({
    Texto1: {
    fontSize:40,
    alignItems:"center",
    flexDirection:"row",
    alignContent:'center'
 
   },
   Texto2: {
    fontSize:40,
    alignItems:"center",
    justifyContent:'center'
   },
    Botao:{
margin:100
    },

})

export default estilo;