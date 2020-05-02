import axios from 'axios';
import {Platform} from 'react-native'
let url=""
if(Platform=='android'){
    url="http://10.0.2.2" ;
}
else{
    url="http://localhost" ;
}
const api=axios.create({
baseURL: url+':3333' ,
})
export default api;