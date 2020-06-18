import React ,{useEffect} from 'react';
import { Button ,View,Text,StyleSheet,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
import Feather from 'react-native-vector-icons/Feather';
import { ActivityIndicator } from 'react-native-paper';

import {AuthContext} from '../components/Context';


const SplashCancel=()=> {
  const [isLoading,setIsLoading]=React.useState(true);

  const{cancelCross}=React.useContext(AuthContext);

  useEffect(()=>{
    setTimeout(()=>{
      setIsLoading(false)
    },1000)
  },[]);
  
  if(isLoading){
    return(
    <View style={{flex:1,justifyContent:"center",alignItems:"center"}} >
            <ActivityIndicator  size="large"/>
    </View>
    );
  }

  return (
    
 <Animatable.View  animation="bounceIn">
                    <TouchableOpacity  
                      onPress={()=>{cancelCross()}}>
                        <Feather 
                        name='x'
                        color='black'
                        size={20}
                        />
                    </TouchableOpacity>
            </Animatable.View>        
    
  );
}
export default SplashCancel;
const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      
    },
  });